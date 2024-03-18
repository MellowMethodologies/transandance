import React from 'react';
import './login.css';
import google from '../assets/google.svg';
import intra from '../assets/42_Logo.svg';

function login(){
  // You'll likely add state for email, password, etc. with useState here

  return (
    <section>
        <form>
            <h1>Login</h1>
            <div class="inputbox">
                <ion-icon name="mail-outline"></ion-icon>
                <input type="email" required />
                <label for="">Email</label>
            </div>
            <div class="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input type="password" required />
                <label for="">Password</label>
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
                <p>Don't have a account ?<a href="#">Sign Up</a></p>
            </div>
        </form>
    </section>
  );
}

export default login;