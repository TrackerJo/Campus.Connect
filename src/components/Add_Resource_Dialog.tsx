import { useRef, useState } from "react";
import { AddResourceDialogProps, FBFile, Resource } from "../constants";

import "./Add_Resource_Dialog.css"
import { uploadFile } from "../api/storage";

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
                        <button className="ActionBtn" onClick={() => {
                            setSelectedType("link")
                        }}>
                            Link
                        </button>
                        <button className="ActionBtn" onClick={() => {
                            setSelectedType("image")
                        }}>
                            Image
                        </button>
                        <button className="ActionBtn" onClick={() => {
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
                                <input type="file" className="ResourceFileInput" ref={fileInputRef} accept={selectedType == "image" ? ".png,.jpg,.jpeg" : ".mp4,.mov,.avi,.wmv,.mkv,"}/>
                            </>

                        }
                        <br />
                        {isLoading ? <div className="loader"></div> : <button className="ActionBtn" onClick={async () => {
                            setIsLoading(true)
                            if(selectedType == "link"){
                                const resource = Resource.fromBlank(resourceName, resourceDescription, selectedType, resourceLink)
                                await addResource(resource)
                            } else {
                                const file = fileInputRef.current!.files![0]
                                if(file == undefined) return
                                const fileName = file.name.split(".")[0] + Date.now() + "." + file.name.split(".")[1]
                                const schoolId = localStorage.getItem("schoolId")
                                const url = await uploadFile(schoolId!, activityId, fileName, file)
                                const fbFile = FBFile.fromBlank(fileName, url)
                                const resource = Resource.fromBlank(resourceName, resourceDescription, selectedType, "", fbFile)
                                await addResource(resource)
                            }
                            setSelectedType("unset")
                            setResourceName("")
                            setResourceDescription("")
                            setResourceLink("")

                            setIsLoading(false)
                        }}>
                            Add Resource
                        </button>}

                    </>
                }
            <br />
            <button className="ActionBtn" onClick={() => {
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


