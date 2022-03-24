import React, {useEffect, useState} from 'react'
import {useAuthState} from 'react-firebase-hooks/auth'
import {Link, useHistory} from 'react-router-dom'
import {
    adminRegisterWithEmailAndPassword,
    auth,
    registerWithEmailAndPassword,
} from '../firebase'
import '../styles/styles.css'

function AdminSignup() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [checkPassword, setCheckPassword] = useState("")
    const [name, setName] = useState("")
    const [admin, loading, error] = useAuthState(auth)
    const history = useHistory()

    const register = () => {
        if (!name) alert("Please enter name")
        if (password !== checkPassword) alert("Passwords do not match")
        adminRegisterWithEmailAndPassword(name, password, email).then(r => console.log(admin))
    };
    useEffect(() => {
        if (loading) return
        if (admin) history.replace("/adminaccount")
    }, [admin, loading])

    return (
        <div className="adminsignup">
            <div className="adminsignup_container">                
                <div className='adminsignup_box'>
                    <h2> Create Admin Account </h2>
                    <h1>All items marked with a * are required</h1>
                    <div className='admin_deatils'>
                        <div className='admin_credentials'>
                            <div className='adminfill_in'>
                                Enter Employee Name * {}
                                <input
                                    type="text"
                                    className="adminsignup_textBox"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Full Name"
                                />
                            </div>
                            <div className='adminfill_in'>
                                Enter Password *
                                <input
                                    type="password"
                                    className="adminsignup_textBox"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Password"
                                />
                            </div>

                            <div className='adminfill_in'>
                                Re-enter Password *
                                <input
                                    type="password"
                                    className="adminsignup_textBox"
                                    value={checkPassword}
                                    onChange={(e) => setCheckPassword(e.target.value)}
                                    placeholder="Re-enter Password"
                                />
                            </div>
                        </div>
                        <div className='adminuser_details'>
                            <div className='adminfill_in'> 
                                Enter Email Address *
                                <input
                                    type="text"
                                    className="adminsignup_textBox"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="E-mail Address"
                                />
                            </div>
                            <div className='adminfillin_dropdown'>
                                <div className='dropdown'>
                                    Select Employee Role *
                                    <select className="employee_roles">
                                        <option value="select">Select Employee Role</option>
                                        <option value="owner">Business Owner</option>
                                        <option value="manager">Manager</option>
                                        <option value="associate">Associate</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className="adminsignup_btn" onClick={register}>
                            Create Account
                        </button>
                    </div>
                    <div>
                        Already have an account? <Link to="/adminsignin">Sign in here</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminSignup
