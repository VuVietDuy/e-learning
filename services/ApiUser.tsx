import { firestore } from "@/configs/firebase";
import { collection, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore";

const usersRef = collection(firestore, "users");

export interface IUser {
    [x: string]: string;
    firstName: string,
    lastName: string,
    username: string,
    password: string
}

async function createNewUser(user : {}) {
    await setDoc(doc(usersRef), user)
}

async function getAllUsers() {
    const querySnapshot = await getDocs(collection(firestore, "users"));
    return querySnapshot;
}

async function checkExistUser(username: string, password: string) {
    const q = query(usersRef, where("username", "==", username));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.size > 0) {
        // User with the given username exists
        const user = querySnapshot.docs[0].data() as IUser;

        if (user.password === password) {
            return user; // Return the user if the password is correct
        } else {
            console.log("Pass word incorrect");
            return null; // Return null if the password is incorrect
        }
    } else {
        console.log("User is doesn't exist");
        return null; // User with the given username doesn't exist
    }
}

async function getUser(id : string) {
    const docRef = doc(firestore, "users", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        console.log("Users >>> ", docSnap.data);
    } else {
        console.log("No such document");
    }
    
}

export {
    createNewUser,
    getAllUsers,
    checkExistUser
}