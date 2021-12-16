import React, {useEffect, useState} from 'react'
import '../styles/styles.css'
import {auth, db} from "../firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import {useHistory} from "react-router-dom";


function Profile() {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [stateUs, setStateUs] = useState("")
    const [zip, setZip] = useState("")
    const [user, loading, error] = useAuthState(auth)
    const [userId, setUserId] = useState("")
    const history = useHistory()
    const [menu, setMenu] = useState([])
    const [currentUser, setUser] = useState({})

    const getUserData = async () => {
        try{
            const res = db.collection('users').where(db.FieldPath.documentId(), '==', user.uid).get()
            const data = await res.get()
            setTimeout(3000)
            if (!data.exists) {
                console.log('No such document!');
            } else {
                console.log('Document data:', data.data());
                setUser(data)
            }
        }catch (e) {
            console.log(e)
        }

    }

    function onAuthStateChange() {
        auth.onAuthStateChanged(user => {
            if (user) {
                console.log("The user is logged in")
                return user.uid
            } else {
                console.log("The user is not logged in");
            }
        });
    }

    const users = async () => {
        const newItems = []
        const res = db.collection("users")
        const data = await res.get()
        data.docs.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            newItems.push(doc.data())
        })
        setMenu(menu.concat(newItems))
    }

    useEffect(() => {
        users()
        console.log(user.uid)
        console.log(menu)
    }, []);

    useEffect(() =>{
        getUserData()
        console.log()
    })
    function trial(array) {
        for (let i = 0; i <array.length; i++) {
            if (array[i].uid === userId) {
                setUser(array[i].uid)
            }
        }
    }
    trial(menu)

    // useEffect(() => {
    //    let myId =  onAuthStateChange()
    //     // let userID = auth.currentUser.uid;
    //
    //     let user = doGetUserProfile(userId, ()=> console.log("MASDA"))
    //     console.log(user)
    //     // console.log(myId)
    //     // setUserId(myId)
    //     // console.log(userId)
    //     // getUserData()
    // }, []);

    return (
        <div className="container">
            <div className="Flex">
                <div className="Flex1">
                    <div className="signup">
                        <div>
                            <div>
                                Name
                                <input
                                    type="text"
                                    className="signup_textBox"
                                    value={name}
                                    placeholder={user.name}
                                />
                            </div>
                            <div> Email Address
                                <input
                                    type="text"
                                    className="signup_textBox"
                                    value={email}
                                    placeholder={email}
                                /></div>
                            Delivery Address
                            <div>
                                Address
                                <input
                                    type="text"
                                    className="signup_textBox"
                                    value={address}
                                    placeholder={address}
                                />
                            </div>

                            <div> City
                                <input
                                    type="text"
                                    className="signup_textBox"
                                    value={city}
                                    placeholder={city}
                                /></div>
                            <div>
                                State
                                <input
                                    type="text"
                                    className="signup_textBox"
                                    value={stateUs}
                                    placeholder={stateUs}
                                />
                            </div>
                            <div>
                                Zip Code
                                <input
                                    type="zip"
                                    className="signup_textBox"
                                    value={zip}
                                    placeholder={zip}
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
