import React, {useEffect, useState} from 'react'
import '../styles/styles.css'
import {Link, useHistory} from 'react-router-dom'
import {useAuthState} from "react-firebase-hooks/auth";
import {auth, db} from "../firebase";

function AdminAccount() {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const[role, setRole] = useState("")
    const [admin, loading, error] = useAuthState(auth)
    const history = useHistory()

    const fetchAdmin = async () => {
        try{
            const query = await db
                .collection("Admin")
                .where("uid", "==", admin?.uid)
                .get();
            const data = await query.docs[0].data();
            setName(data.name);
            setEmail(data.email);


        }catch (error){
            console.error(error);
            alert("An error has occurred while fetching the user's data")
        }
    };

    useEffect(() => {
        if(loading) return;
        if(!admin) return history.replace("/");
        fetchAdmin();

    }, [admin, loading]);

    return (
        <div className='admin'>
            <div className='admin_container'>
                <h1> Admin Account</h1>
                <div className='admin_acc'>
                    <div className='name_email'>
                        <div className='adminame'>
                            Employee Name:
                            <input
                                type="text"
                                value={name}
                                placeholder={admin.name}
                                />

                        </div>
                        <div className='adminemail'>
                            Email Address:
                            <input
                                type="text"
                                value={email}
                                placeholder={email}
                            />

                        </div>
                    </div>
                    <div className='role_pswrd'>
                        <div className='role'>
                            Employee Role: {}
                        </div>
                        <div className='pswrd'>
                            Password:
                        </div>
                    </div>
                </div>
                <button className='update_btn'>
                    <Link to="/updateaccountinfo" style={{ textDecoration: 'none' }} > Update Account Information </Link>
                </button>                
            </div>
        </div>
    )
}

export default AdminAccount