
import {  DownloadAppDialogProps } from "../constants";

import "./Download_App_Dialog.css"

function DownloadAppDialog({close, dialogRef}: DownloadAppDialogProps){
    

    return (
        <dialog ref={dialogRef} >
            <div className="DownloadAppDialog">
                <h2>Please download the Campus Connect App!</h2>
                <label htmlFor="">There is now an app for Campus Connect that will sync your schedule with your device calendar and help with communication via group chats! Please make sure to allow notifications when opening the app for the first time!</label>
                <div className="download-btns">
                    <img src="https://firebasestorage.googleapis.com/v0/b/snippets2024.appspot.com/o/App%20Store%20Download.png?alt=media&token=a4ced63e-ec30-4c5f-97df-8a118e765609" alt="" id="apple-download" onClick={() => {
                        window.open('https://apps.apple.com/us/app/campusconnect-for-the-student/id6642662119');
                    }}/>
                    <img src="https://firebasestorage.googleapis.com/v0/b/snippets2024.appspot.com/o/Google%20Play%20Download.png?alt=media&token=dcee5af0-1eb3-438c-89fd-0338c5160cd6" alt="" id="android-download" onClick={() => {
                        window.open('https://play.google.com/store/apps/details?id=com.kazoom.campus_connect');
                }}/>
        
                </div>
                <br />
            <button className="ActionBtn" onClick={() => {
                close()
            }
            }>
                Okay
            </button>
            


            </div>
            
            
        </dialog>
    );
}

export default DownloadAppDialog;