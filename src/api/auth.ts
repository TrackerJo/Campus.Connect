import { browserLocalPersistence, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, setPersistence, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "./init";

const auth = getAuth(app);

export async function login(email: string, password: string, schoolId: string){
    return setPersistence(auth, browserLocalPersistence).then( async () => {
        try{
            await signInWithEmailAndPassword(auth, email, password);
            console.log(auth.currentUser);
            localStorage.setItem("schoolId", schoolId);
            localStorage.setItem("userId", auth.currentUser!.uid!);
            return true;
        } catch (e){
            return false;
        }
    });
    
    
}

export async function logout(){
    return signOut(auth);
}

export async function register(email: string, password: string): Promise<string | boolean>{
    return setPersistence(auth, browserLocalPersistence).then( async () => {

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            localStorage.setItem("userId", auth.currentUser!.uid!);


            console.log(auth.currentUser);

            return auth.currentUser!.uid!;
        }
        catch (e){
            return false;
        }
    });
}

export async function isLoggedIn(setIsLoggedIn: (isLoggedIn: boolean) => void){
    console.log("Checking if user is logged in");
   onAuthStateChanged(auth, (user) => {
         if(user){
              setIsLoggedIn(true);
              console.log("User is logged in");
         } else {
              setIsLoggedIn(false);
              //Set the url to the login page
              window.location.href = "/Auth/?redirect=" + window.location.pathname + window.location.search.replace(/&/g, '~');
         }
    });
   
    
}

export async function reauthenticateUser(email: string, password: string){
    return setPersistence(auth, browserLocalPersistence).then( async () => {
        try{
            await signInWithEmailAndPassword(auth, email, password);
            return true;
        } catch (e){
            return false;
        }
    });
}

export function getCurrentUserId(){
    return auth.currentUser?.uid ?? localStorage.getItem("userId"); 
}