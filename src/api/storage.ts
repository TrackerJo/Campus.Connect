import { deleteObject, getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { app } from "./init";



const storage = getStorage(app);

export async function uploadFile(schoolId: string, activityId: string, fileName: string, file: File): Promise<string>{
    console.log('uploading file');
    console.log(`${schoolId}/${activityId}/${fileName}`)
    const storageRef = ref(storage, `${schoolId}/${activityId}/${fileName}`);
    const snapshot = await uploadBytes(storageRef, file);
    return await getDownloadURL(snapshot.ref);

}

export async function deleteFile(schoolId: string, activityId: string, fileName: string): Promise<void>{
    const storageRef = ref(storage, `${schoolId}/${activityId}/${fileName}`);
    await deleteObject(storageRef);
}

export async function userFCMExisits(userId: string): Promise<boolean>{
    const schoolId = localStorage.getItem('schoolId');
    const storageRef = ref(storage, `${schoolId}/${userId}.json`);
    try{
        const url = await getDownloadURL(storageRef);
        return true;
    } catch (e){
        return false;
    }
}

export async function getUserFCMToken(userId: string): Promise<string | null>{
    const schoolId = localStorage.getItem('schoolId');
    const storageRef = ref(storage, `${schoolId}/${userId}.json`);
    try{
        const url = await getDownloadURL(storageRef);
        const response = await fetch(url);
        const data = await response.json();
        return data.FCMToken;
    } catch (e){
        return null;
    }
}