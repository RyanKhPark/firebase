import React, { useState } from 'react'
import { auth } from '../utils/firebase/firebase';
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { db } from '../utils/firebase/firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const usersCollection = collection(db, "Users")

    const loginUser = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
        } catch (err) {
            console.error(err)
        }
    }

    const logoutUser = async () => {
        try {
            await signOut(auth);

        } catch (error) {
            console.error(error)
        }
    }



    const getUsersList = async () => {
        const data = await getDocs(usersCollection);
        const filteredData = data.docs.map((doc) => (doc.data()))
        console.log(filteredData)
    }

    const addUser = async () => {
        await addDoc(usersCollection, { email: email, password: password })
    }

    console.log(auth.currentUser)


    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "center" }}>
            <input type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
            <button onClick={loginUser}>User Authentication Register</button>
            <button onClick={logoutUser}>Log out</button>
            <div>
                <button onClick={getUsersList}>Get Data</button>
                <button onClick={addUser}>Add Data</button>
            </div>
        </div>
    )
}

export default Login