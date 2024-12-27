import { useRef } from "react";
import QRCode from "react-qr-code";
import "./Qr_Code_Dialog.css";



import * as htmlToImage from "html-to-image";

import X from "../assets/xmark.png";
import { QRCodeDialogProps } from "../constants";


function QRCodeDialog({dialogRef, link, close}: QRCodeDialogProps){
    const qrCodeRef = useRef<HTMLDivElement>(null);

  
    const downloadQRCode = () => {
        htmlToImage
          .toPng(qrCodeRef.current!)
          .then(function (dataUrl) {
            const link = document.createElement("a");
            link.href = dataUrl;
            link.download = "qr-code.png";
            link.click();
          })
          .catch(function (error) {
            console.error("Error generating QR code:", error);
          });
      };

    return (
       <dialog ref={dialogRef} className="QRDialog">
            <div className="QRDialogDiv">
            <img src={X} alt="" className="XMark" onClick={() => [
                close()
            ]} />
            <h2>QR Code</h2>
           
            <div className="qrcode__download" ref={qrCodeRef}>
                <div className="qrcode__image">
                <QRCode value={link} size={100} />
                </div>
            </div>
              <br />
              <button className="ActionBtn" onClick={() => {
                  downloadQRCode();
                  
                  
              }}>Download QR Code</button>
            
           
            </div>
            
       </dialog>
    )
}

export default QRCodeDialog;