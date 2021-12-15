import React, {useEffect, useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {auth, signInWithEmailAndPassword, signInWithGoogle} from '../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import '../styles/styles.css'

function Signin() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [user, loading, error] = useAuthState(auth)
    const history = useHistory()

    useEffect(() => {
        if (loading) {
            // maybe trigger a loading screen
            return
        }
        if (user) history.replace("/menu")

    }, [user, loading])

    return (
        <div className="signin">
            <div className="signin_container">
                Email Address
                <input
                    type="text"
                    className="signin_textBox"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail Address"
                />
                Password
                <input
                    type="password"
                    className="signin_textBox"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button
                    className="signin_btn"
                    onClick={() => signInWithEmailAndPassword(email, password)}
                >
                    Login
                </button>
                <button className="signin_btn signin_google" onClick={signInWithGoogle}>
                    Login with Google
                </button>
                <div>
                    Forgat Password? <Link to="/reset">Click here to reset password</Link>
                </div>
                <div>
                    Don't have an account? <Link to="/signup">Sign up here</Link>
                </div>
            </div>
        </div>
    )
}

export default Signin
