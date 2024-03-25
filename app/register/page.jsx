import React from 'react'
import './register.css'
import Image  from 'next/image'
const register = () => {
  return (
    <section>
        <form>
            <h5>Sign Up</h5>
            <div className="inputbox">
                <ion-icon name="mail-outline"></ion-icon>
                <input type="Username" required/>
                <label for="">Username</label>
            </div>
            <div className="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input type="email" required/>
                <label for="">email</label>
            </div>
            <div className="inputbox">
                <ion-icon name="mail-outline"></ion-icon>
                <input type="password" required/>
                <label for="">password</label>
            </div>
            <div className="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input type="password" required/>
                <label for="">Retype Password</label>
            </div>
            <button>Log in</button>
            <div className="or-line">
                <hr />
                    <span>or</span>
                <hr />
            </div>
            <div className="login-options">
                <div className="auth">
                    <Image src='/42_Logo 1.svg' className="intra" alt="42 intra" width={200} height={200}/>
                </div>
                <div className="space"></div>
                <div className="auth">
                    <Image src='/google.png' className="google" alt="Google Icon" width={200} height={200}/>
                </div>                 
            </div>
            <div className="login">
                <p>Have an account ?<a href="/login">Sign In</a></p>
            </div>
        </form>
    </section>
  )
}

export default register