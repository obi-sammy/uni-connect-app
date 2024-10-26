import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const handleLogin = () => {
        const data = {
            userName,
            password
        }
        axios
         .post('http://localhost:1999/login', data)
         .then(() => {
            navigate('/feed')
         }).catch((error => {
            console.log(error)
         }))
    } 

    return (
        <div className='landing-page-container'>
            <header className="landing-page-header">
                <nav className='landing-page-nav'>
                    <div className="logo-container">
                        <h2 className="logo-container__text">uni-connect</h2>
                    </div>

                    <div className="button-container">
                        <a href="/signup">Sign Up</a>
                    </div>
                </nav>
            </header>

            <main>
                <section className="login-section">
                    <div className="login-section__text-container">
                        <h2>Welcome to <span>uni-connect</span>, where you meet and network with your peers</h2>
                    </div>

                    <div className="login-section__form-container">
                        {/* { locals.messages.errors && 
                        messages.errors.forEach( el => {<div className="alert alert-danger"> {el.msg} </div>} )
                        }
                        {locals.messages.info &&
                        messages.info.forEach( el => {<div className="alert alert-info">{el.msg}</div>} )
                        } */}
                        <form>
                            <div className="login-form-email-container">
                                <label htmlFor="exampleInputEmail1" className="login-form-email-label"></label>
                                <input
                                    type="email"
                                    className="login-form-email-input"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    name="email"
                                    placeholder="Email"
                                    value={userName}
                                    onChange={(e) => {setUserName(e.target.value)}}
                                />
                            </div>

                            <div className="login-form-password-container">
                                <label htmlFor="exampleInputPassword1" className="login-form-password-label"></label>
                                <input
                                    type="password"
                                    className="login-form-password-input"
                                    id="exampleInputPassword1"
                                    name="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => {setPassword(e.target.value)}}
                                />
                            </div>
                            <a href="/forgot">Forgot password?</a>
                            <button type="submit" className="sign-in-button" onSubmit={handleLogin}>Sign in</button>
                        </form>
                    </div>
                </section>

                <section className="image-section">
                    <img src="/img/6596292.jpg" alt="illustration of students interacting" />
                </section>
            </main>
        </div>
    )
}

export default LandingPage
