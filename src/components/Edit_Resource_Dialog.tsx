import { useEffect, useRef, useState } from "react";
import { EditResourceDialogProps, FBFile, Resource } from "../constants";

import "./Edit_Resource_Dialog.css"
import { deleteFile, uploadFile } from "../api/storage";

function EditResourceDialog({editResource, dialogRef, close, resource}: EditResourceDialogProps){
    const [selectedType, setSelectedType] = useState<"link" | "image" | "video" | "unset">("unset")
    const [resourceName, setResourceName] = useState<string>("")
    const [resourceDescription, setResourceDescription] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [resourceLink, setResourceLink] = useState<string>("")
    const fileInputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if(resource){
            setResourceName(resource.name)
            setResourceDescription(resource.description)
            setSelectedType(resource.type)
            console.log(resource.toMap())
            if(resource.type == "link"){
                setResourceLink(resource.link!)
            }
        }
    }, [resource])
        


    

    return (
        <dialog ref={dialogRef} >
            <div className="EditResourceDiv">
                <h2>Edit Resource</h2>
                
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
                                console.log("Link")
                                const newResource = Resource.fromBlank(resourceName, resourceDescription, selectedType, resourceLink)
                                await editResource(newResource)
                            } else {
                                console.log("File")
                                const file = fileInputRef.current!.files![0]
                                if(file == undefined) {
                                    alert("Please select a file")
                                    setIsLoading(false)
                                    return
                                }

                                const fileName = file.name.split(".")[0] + Date.now() + "." + file.name.split(".")[1]
                                if(fileName == resource!.file!.name){
                                    const newResource = Resource.fromBlank(resourceName, resourceDescription, resource!.type, "", resource!.file)
                                    newResource.activityId = resource!.activityId
                                    newResource.showId = resource!.showId
                                    await editResource(newResource)
                                } else {
                                const schoolId = localStorage.getItem("schoolId")!
                                await deleteFile(schoolId, resource!.activityId, resource!.file!.name)
                                const url = await uploadFile(schoolId!, resource!.activityId, fileName, file)
                                const fbFile = FBFile.fromBlank(fileName, url)
                                const newResource = Resource.fromBlank(resourceName, resourceDescription, resource!.type, "", fbFile)
                                newResource.activityId = resource!.activityId
                                newResource.showId = resource!.showId
                                await editResource(newResource)
                                }
                            }
                           
                            setIsLoading(false)
                        }}>
                            Save
                        </button>}

                  
            <br />
            <button className="ActionBtn" onClick={() => {
                
                close()
            }
            }>
                Close
            </button>

            </div>
            
            
        </dialog>
    );
}

export default EditResourceDialog;


