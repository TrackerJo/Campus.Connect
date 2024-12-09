import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

import '../../index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef, useState } from 'react'






import './messages.css'
import { ActivityGC, GroupChatMember, Message, StudentData, TeacherData, TimeChatSeparator } from '../../constants'
import { createActivityDirectChat, getActivity, getActivityGCMessagesStream, getActivityGCsStream, getUserData, sendActivityGCMessage } from '../../api/db'

import MessageTile from '../../components/Message_Tile'
import { DocumentData } from 'firebase/firestore'
import MessageSendBar from '../../components/Message_Send_Bar'
import CreateGroupChatDialog from '../../components/Create_Group_Chat_Dialog'
import GroupChatDisplayTile from '../../components/Group_Chat_Display_Tile'
import BroadcastMessageDialog from '../../components/Broadcast_Message_Dialog'



import Back from '../../assets/back.png'
import { isLoggedIn } from '../../api/auth'

function App() {
    const [activityId, setActivityId] = useState<string>("")
    const [groupChats, setGroupChats] = useState<ActivityGC[]>([])
    const [accountType, setAccountType] = useState<"student" | "teacher">("student")
    const [selectedGroupChat, setSelectedGroupChat] = useState<ActivityGC | null>(null)
    const [messages, setMessages] = useState<Message[]>([])
    const [messagesWithSeparators, setMessagesWithSeparators] = useState<(Message | TimeChatSeparator)[]>([])
    const [userData, setUserData] = useState<StudentData | TeacherData | null>(null)
    const [isMobile, setIsMobile] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const messagesRef = useRef<HTMLDivElement>(null)
    const createGroupChatDialogRef = useRef<HTMLDialogElement>(null)
    const broadcastMessageDialogRef = useRef<HTMLDialogElement>(null)
    const [filteredGroupChats, setFilteredGroupChats] = useState<ActivityGC[]>([])
    const [activityName, setActivityName] = useState<string>("")
    const [checkedForGroupParams, setCheckedForGroupParams] = useState<boolean>(false)



    function updateMessages(messages: Message[]) {
        setMessages(messages)
        setTimeout(() => {
            messagesRef.current!.scrollTop = messagesRef.current!.scrollHeight
        }, 100)
    }

    useEffect(() => {
        if(!selectedGroupChat) { 
            return
        }
        getActivityGCMessagesStream(selectedGroupChat.activityId, selectedGroupChat!.id, updateMessages)

    },[selectedGroupChat])

    useEffect(() => {
        isLoggedIn(() => {})
        const handleResize = () => {
            if (window.innerWidth < 800) {
                setIsMobile(true)
            } else {
                setIsMobile(false)
            }
        }
        window.addEventListener('resize', handleResize)
       
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    },[])

    function formatDate(date: Date): string {
        const options: Intl.DateTimeFormatOptions = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        return date.toLocaleDateString('en-US', options);
    }
    function seperateMessagesByDate(messages: Message[]) {
        const messagesWithSeparators: (Message | TimeChatSeparator)[] = []
        let lastDate = new Date(0)
        messages.forEach((message) => {
            if (message.timeSent.toDateString() != lastDate.toDateString()) {


                messagesWithSeparators.push({time: formatDate(message.timeSent)} as TimeChatSeparator)
                lastDate = message.timeSent
            }
            messagesWithSeparators.push(message)
        })
        return messagesWithSeparators
    }

    useEffect(() => {
        setIsLoading(true)
        isLoggedIn(() => {})
        //Get from url params
        const urlParams = new URLSearchParams(window.location.search)
        const activityId = urlParams.get('activityId')
        if (activityId) {
            setActivityId(activityId)
           getActivity(activityId).then((activity) => {
                if (activity) {
                    setActivityName(activity.name)
                }
            })
        }
       
        //Get group chats
        getActivityGCsStream(activityId!, setGroupChats).then(() => {


            getUserData().then((userData) => {
                setUserData(userData)
                
                
            })
           
        });
        
        const accountType = localStorage.getItem('accountType')
        if (accountType) {
            setAccountType(accountType as "student" | "teacher")
        }

    }, [])

    useEffect(() => {
        async function checkURLParams() {
            if(checkedForGroupParams || !groupChats || groupChats.length == 0) {
                return
            }
            setIsLoading(false)
            const urlParams = new URLSearchParams(window.location.search)
            const groupChatId = urlParams.get('groupChatId')
            console.log(groupChatId)
            if (groupChatId) {
                const groupChat = groupChats.find((groupChat) => groupChat.id == groupChatId)
                if (groupChat) {
                    setSelectedGroupChat(groupChat)
                }
            }
            const studentId = urlParams.get('studentId')
            console.log(studentId)
            if (studentId) {
                const groupChat = groupChats.find((groupChat) => groupChat.id == studentId)
                if (groupChat) {
                    setSelectedGroupChat(groupChat)
                } else {
                    const creator: GroupChatMember = GroupChatMember.fromBlank(userData!.fullname, userData!.email, userData!.phoneNumber, userData!.FCMToken, userData!.uid)
                    const recipiant = localStorage.getItem('viewingUser')
                    if(recipiant) {
                        const recipiantData = JSON.parse(recipiant)

                        const recipiantMember: GroupChatMember = GroupChatMember.fromBlank(recipiantData.fullname, recipiantData.email, recipiantData.phoneNumber, recipiantData.FCMToken, recipiantData.uid)
                        
                        createActivityDirectChat(creator, recipiantMember, activityId).then((groupChat) => {
                            console.log(groupChat?.toMap())
                            setSelectedGroupChat(groupChat)
                            localStorage.removeItem('viewingUser')
                        })
                    }


                }
            }
            setCheckedForGroupParams(true)
        }
    checkURLParams()

    },[groupChats])

    function searchGroupChats(search: string) {
        
        const searchLower = search.toLowerCase()
        const filteredGroupChats = groupChats.filter((groupChat) => {
            return groupChat.name.toLowerCase().includes(searchLower)
        })
        setFilteredGroupChats(filteredGroupChats)
    }

    useEffect(() => {
        setFilteredGroupChats(groupChats)
    }, [groupChats])



    async function sendMessage(message: string) {

        if(!userData || !selectedGroupChat) {
            return
        }

        const messageObj = Message.fromBlank(message, userData!.uid, userData!.fullname,userData!.FCMToken,selectedGroupChat!.id, activityId,'', new Date(), [userData!.uid] )
        await sendActivityGCMessage(activityId, selectedGroupChat!.id, messageObj, activityName)
        //Scroll to bottom


        //TODO
    }





    return (
        <>
        <div className='title'>
            <h1>
                Messages
            </h1>
            
        </div>
        <div className='center'>
            <div className='window'>
                {((!isMobile) || (isMobile && !selectedGroupChat)) && <div className='left'>
                    <div className='search-div'>
                        <input type="text" className='search-input' placeholder='Enter group chat name...' onChange={(e) => {
                            searchGroupChats(e.target.value)
                        }}/>
                    </div>
                    <div className='groupChats'>
                        {isLoading ? <div className='loader'></div> :  
                        filteredGroupChats.map((groupChat) => {
                            return (
                                <GroupChatDisplayTile groupChat={groupChat} onClick={() => {
                                    setSelectedGroupChat(groupChat)
                                }} />
                            )
                        })}
                    </div>
                    <div className={'GCOptions ' + (accountType)}>
                        <button className='ActionBtn' onClick={() => {
                            createGroupChatDialogRef.current!.showModal()
                        }}>
                            Create Group Chat
                        </button>
                        

                        {accountType == "teacher" && <button className='ActionBtn' onClick={() => {
                            broadcastMessageDialogRef.current!.showModal()
                        }}>
                            Broadcast Message
                        </button>}
                    </div>
                   
                   

                </div>}
                {((!isMobile) || (isMobile && selectedGroupChat)) && <div className='right'>
                    {
                        selectedGroupChat ? (
                            <div className='selectedGroupChat'>
                                 <div className='back-div'>
                                     {isMobile && <img src={Back} alt="" onClick={() => setSelectedGroupChat(null)}/>}
                                    <h2>{selectedGroupChat.name}</h2>
                                </div>
                                <div className='messages' ref={messagesRef}>
                                    {
                                        seperateMessagesByDate(messages).map((message) => {
                                            if (Object.prototype.hasOwnProperty.call(message, 'time')) {
                                                return (
                                                    <div className='timeSeparator'>
                                                        {(message as TimeChatSeparator).time}
                                                    </div>
                                                )
                                            }
                                            return (
                                                <MessageTile message={message as Message} isSender={(message as Message).senderUid == localStorage.getItem('userId')} />
                                            )
                                        })
                                    }
                                </div>

                                <MessageSendBar sendMessage={sendMessage} />
                            </div>
                        ) : (
                            <div className='noSelectedGroupChat'>
                                <h1>No Group Chat Selected</h1>
                            </div>
                        )
                    }
                </div>}  
                
                
            </div>
            <br />
            <button className='ActionBtn' onClick={() => {
                window.location.href = '/Activity/?activityId=' + activityId
            }}>
                Back
            </button>
        </div>

        <CreateGroupChatDialog dialogRef={createGroupChatDialogRef} refresh={() => {
                
            }}  close={() => { createGroupChatDialogRef.current!.close() } } activityId={activityId} />
            <BroadcastMessageDialog activityName={activityName} dialogRef={broadcastMessageDialogRef} refresh={() => {
               
            }} close={() => { broadcastMessageDialogRef.current!.close() } } activityId={activityId} userData={userData!} />
      
        
        </>
    )
}

export default App
