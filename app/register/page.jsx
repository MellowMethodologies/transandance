import React from 'react';
import './register.css';
import Image  from 'next/image';

function register(){
  // You'll likely add state for email, password, etc. with useState here

  return (
    <section>
        <form>
            <h5>Register</h5>
            <div className="inputbox">
                <ion-icon name="mail-outline"></ion-icon>
                <input type="username" required />
                <label label="">usename</label>
            </div>
            <div className="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input type="email" required />
                <label label="">E-mail Address</label>
            </div>
            <div className="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input type="password" required />
                <label label="">Password</label>
            </div>
            <div className="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input type="password" required />
                <label label="">Password</label>
            </div>
            <button>Log in</button>
            <div className="or-line">
                <hr />
                    <span>or</span>
                <hr />
            </div>
            <div className="Register-options">
                <div className="auth">
                    <Image src='/42_Logo 1.svg' className="intra" alt="42 intra" width={200} height={200}/>
                </div>
                <div className='space'>
                </div>
                <div className="auth">
                    <Image src='/google.png' className="google" alt="Google Icon" width={200} height={200}/>
                </div>                
            </div>
            <div className="Register">
                <p>already have an account?<a href="#">Sign In</a></p>
            </div>
        </form>
    </section>
  );
}

export default register;