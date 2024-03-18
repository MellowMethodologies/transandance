import React from 'react'
import './register.css'
import intra from '../assets/42_Logo.svg'
import google from '../assets/google.svg'

const register = () => {
  return (
    <section>
        <form>
            <h1>Sign Up</h1>
            <div class="inputbox">
                <ion-icon name="mail-outline"></ion-icon>
                <input type="Username" required/>
                <label for="">Username</label>
            </div>
            <div class="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input type="email" required/>
                <label for="">email</label>
            </div>
            <div class="inputbox">
                <ion-icon name="mail-outline"></ion-icon>
                <input type="password" required/>
                <label for="">password</label>
            </div>
            <div class="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input type="password" required/>
                <label for="">Retype Password</label>
            </div>
            <button>Log in</button>
            <div class="or-line">
                <hr />
                    <span>or</span>
                <hr />
            </div>
            <div class="login-options">
                <div class="auth">
                    <img src={intra} class="intra" alt="42 intra" />
                </div>
                <div class="auth">
                    <img src={google} class="google" alt="Google Icon" />
                </div>                
            </div>
            <div class="register">
                <p>Have an account ?<a href="/login">Sign In</a></p>
            </div>
        </form>
    </section>
  )
}

export default register