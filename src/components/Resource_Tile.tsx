import { useRef } from "react";
import { ResourceTileProps } from "../constants";
import EditResourceDialog from "./Edit_Resource_Dialog";
import "./Resource_Tile.css";

function ResourceTile({resource, canRemove, removeResource, canEdit, editResource}: ResourceTileProps) {
    const editResourceDialogRef = useRef<HTMLDialogElement>(null)
    return (
        <>
        <div className="resource-tile">
        <h3>{resource.name}</h3>
        <p>{resource.description}</p>
        <div>
            {
                resource.type == "link" ? <button className="ActionBtn" onClick={() => {
                    window.open(resource.link, "_blank");
                }}>
                    Open Link
                </button>  : <button className="ActionBtn" onClick={() => {
                    //Download file
                    const xhr = new XMLHttpRequest();
                    xhr.responseType = 'blob';
                    xhr.onload = (event) => {
                        const blob = xhr.response;
                        const link = document.createElement('a');
                        link.href = URL.createObjectURL(blob);
                        link.download = resource.file!.name;
                        link.click();
                        URL.revokeObjectURL(link.href);
                    };
                    xhr.open('GET', resource.file!.url);
                    xhr.send();
                } }>
                    Download File
                </button>
            }
            {canEdit && (
                <button onClick={() => {
                    editResourceDialogRef.current?.showModal()
                }
                } className="ActionBtn">Edit</button>
            )}
            
            {canRemove && (
                <button onClick={() => removeResource()} className="ActionBtn">Remove</button>
            )}
        </div>
        
        </div>
        <EditResourceDialog editResource={async (newResource) => {
            await editResource(newResource)
            editResourceDialogRef.current?.close()
        }} dialogRef={editResourceDialogRef} close={() => {
            editResourceDialogRef.current?.close()
        }
        } resource={resource}/>
        </>
    );
    }

export default ResourceTile;