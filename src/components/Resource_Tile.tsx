import { ResourceTileProps } from "../constants";
import "./Resource_Tile.css";

function ResourceTile({resource, canRemove, removeResource}: ResourceTileProps) {
    return (
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
            
            {canRemove && (
                <button onClick={() => removeResource()} className="ActionBtn">Remove</button>
            )}
        </div>
        
        </div>
    );
    }

export default ResourceTile;