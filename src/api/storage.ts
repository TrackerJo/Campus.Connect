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