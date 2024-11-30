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
import { ActivityGC, Message } from '../../constants'
import { getActivityGCMessagesStream, getActivityGCsStream, getUserData, sendActivityGCMessage } from '../../api/db'

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
    const [userData, setUserData] = useState<DocumentData | null>(null)
    const [isMobile, setIsMobile] = useState<boolean>(false)

    const messagesRef = useRef<HTMLDivElement>(null)
    const createGroupChatDialogRef = useRef<HTMLDialogElement>(null)
    const broadcastMessageDialogRef = useRef<HTMLDialogElement>(null)



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




    useEffect(() => {
        //Get from url params
        const urlParams = new URLSearchParams(window.location.search)
        const activityId = urlParams.get('activityId')
        if (activityId) {
            setActivityId(activityId)
        }

        //Get group chats
        getActivityGCsStream(activityId!, setGroupChats)


        getUserData().then((userData) => {
            setUserData(userData)
        })
        
        const accountType = localStorage.getItem('accountType')
        if (accountType) {
            setAccountType(accountType as "student" | "teacher")
        }

    }, [])



    async function sendMessage(message: string) {

        if(!userData || !selectedGroupChat) {
            return
        }

        const messageObj = Message.fromBlank(message, userData!.uid, userData!.fullname,userData!.FCMToken,selectedGroupChat!.id, activityId,'', new Date(), [userData!.uid] )
        await sendActivityGCMessage(activityId, selectedGroupChat!.id, messageObj)
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
                    <div className='groupChats'>
                        {groupChats.map((groupChat) => {
                            return (
                                <GroupChatDisplayTile groupChat={groupChat} onClick={() => {
                                    setSelectedGroupChat(groupChat)
                                }} />
                            )
                        })}
                    </div>
                    <div className='GCOptions'>
                        <button className='ActionBtn' onClick={() => {
                            createGroupChatDialogRef.current!.showModal()
                        }}>
                            Create Group Chat
                        </button>

                        <button className='ActionBtn' onClick={() => {
                            broadcastMessageDialogRef.current!.showModal()
                        }}>
                            Broadcast Message
                        </button>
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
                                        messages.map((message) => {
                                            return (
                                                <MessageTile message={message} isSender={message.senderUid == localStorage.getItem('userId')} />
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
            <BroadcastMessageDialog dialogRef={broadcastMessageDialogRef} refresh={() => {
               
            }} close={() => { broadcastMessageDialogRef.current!.close() } } activityId={activityId} userData={userData!} />
      
        
        </>
    )
}

export default App
