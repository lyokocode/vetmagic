"use client"
import React from 'react'
import styles from "./login.module.scss"
import { useEffect, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import axios from 'axios';

const Login = () => {
    const [view, setView] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/api/auth/login', {
                email,
                password
            });

            if (response.statusText !== 'OK') {

                throw new Error('Login failed');
            }

            // // Handle successful login here, e.g., redirect to dashboard
            // // window.location.href = '/dashboard';
            console.log(response.statusText == 'OK')
        } catch (error) {
            console.error('Login error:', error.message);
            // Handle login error here, e.g., display error message to user
        }
    };

    return (
        <div className={styles.formWrapper}>
            <form className={styles.loginForm} onSubmit={handleLogin}>
                <div className={styles.logo}>
                    {"<Aelita />"}
                </div>
                <div className={styles.formItem}>
                    <input
                        type="text"
                        className={styles.inputForm}
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="current-email"

                    />
                </div>
                <div className={styles.formItem}>
                    <input
                        type={view ? "text" : "password"}
                        className={styles.inputForm}
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                    />
                    <div
                        onClick={() => setView(!view)}
                        className={styles.passwordView}
                    >
                        {view ? <AiFillEyeInvisible /> : <AiFillEye />}
                    </div>
                </div>
                <div className={styles.formItem}>
                    <button
                        type="submit"
                        className={styles.loginBtn}
                        value="Log In"
                    >
                        Log In
                    </button>
                    <input />
                    <div className={styles.clear} ></div>
                </div >
            </form >
        </div >
    )
}

export default Login