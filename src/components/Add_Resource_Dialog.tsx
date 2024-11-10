import { useRef, useState } from "react";
import { AddResourceDialogProps, FBFile, Resource } from "../constants";

import "./Add_Resource_Dialog.css"
import { uploadFile } from "../firebase/storage";

function AddResourceDialog({addResource, dialogRef, close, activityId}: AddResourceDialogProps){
    const [selectedType, setSelectedType] = useState<"link" | "image" | "video" | "unset">("unset")
    const [resourceName, setResourceName] = useState<string>("")
    const [resourceDescription, setResourceDescription] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [resourceLink, setResourceLink] = useState<string>("")
    const fileInputRef = useRef<HTMLInputElement>(null)


    

    return (
        <dialog ref={dialogRef} >
            <div className="AddResourceDiv">
                <h2>Add Resource</h2>
                {
                    selectedType == "unset" ?
                    <div className="ResourceTypeSelect">
                        <h3>Resource Type</h3>
                        <button className="ResourceTypeSelectBtn" onClick={() => {
                            setSelectedType("link")
                        }}>
                            Link
                        </button>
                        <button className="ResourceTypeSelectBtn" onClick={() => {
                            setSelectedType("image")
                        }}>
                            Image
                        </button>
                        <button className="ResourceTypeSelectBtn" onClick={() => {
                            setSelectedType("video")
                        }}>
                            Video
                        </button>
                    </div>
                    :
                    <>
                        <h3>Resource Name</h3>
                        <input type="text" className="ResourceNameInput" value={resourceName} onChange={(e) => {
                            setResourceName(e.target.value)
                        }}/>
                        <h3>Resource Description</h3>
                        <input type="text" className="ResourceDescriptionInput" value={resourceDescription} onChange={(e) => {
                            setResourceDescription(e.target.value)
                        }}/>
                        {
                            selectedType == "link" ?
                            <>
                                <h3>Link</h3>
                                <input type="text" className="ResourceLinkInput" value={resourceLink} onChange={(e) => {
                                    setResourceLink(e.target.value)
                                }}/>
                            </>
                            :
                            <>
                                <h3>Resource File</h3>
                                <input type="file" className="ResourceFileInput" ref={fileInputRef}/>
                            </>

                        }
                        <br />
                        {isLoading ? <div className="loader"></div> : <button className="ActionBtn" onClick={async () => {
                            setIsLoading(true)
                            if(selectedType == "link"){
                                const resource = Resource.fromBlank(resourceName, resourceDescription, selectedType, resourceLink)
                                addResource(resource)
                            } else {
                                const file = fileInputRef.current!.files![0]
                                if(file == undefined) return
                                const fileName = file.name.split(".")[0] + Date.now() + "." + file.name.split(".")[1]
                                const schoolId = localStorage.getItem("schoolId")
                                const url = await uploadFile(schoolId!, activityId, fileName, file)
                                const fbFile = FBFile.fromBlank(fileName, url)
                                const resource = Resource.fromBlank(resourceName, resourceDescription, selectedType, "", fbFile)
                                addResource(resource)
                            }
                            setSelectedType("unset")
                            setResourceName("")
                            setResourceDescription("")
                            setResourceLink("")

                            setIsLoading(false)
                            close()
                        }}>
                            Add Resource
                        </button>}

                    </>
                }
            <br />
            <button className="AddResourceCloseBtn" onClick={() => {
                setSelectedType("unset")
                setResourceName("")
                setResourceDescription("")
                setResourceLink("")
                close()
            }
            }>
                Close
            </button>

            </div>
            
            
        </dialog>
    );
}

export default AddResourceDialog;


