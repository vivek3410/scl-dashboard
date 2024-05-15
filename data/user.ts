import { db } from "@/firebase/clientApp";
import { collection, query, where, getDocs } from "firebase/firestore";

  export const getUserByEmail = async (email: string) => {
  try {
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('email', '==', email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      return querySnapshot.docs[0].data();
    } 
  } catch {
  
    return null;
  }
};

export const getUserByName = async (name: string) => {
  try {
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('name', '==', name));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      return querySnapshot.docs[0].data();
    }
    return null;
  } catch (error) {
    console.error('Error getting user by name:', error);
    return null;
  }
};


export const getUserById = async (id: string) => {
  try {
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('id', '==', id));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      return querySnapshot.docs[0].data();
    } 
      
  } catch  {
    return null;
  }
};
export const getUserByRole = async (role: string) => {
  try {
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('role', '==', role));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      return querySnapshot.docs[0].data();
      
    } 
      
  } catch  {
    return null;
  }
};
