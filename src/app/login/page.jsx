//create a 
import Image from "next/image";
import "./style.css";

export default function Home() {
  return (
    <section>

        <form>
            <h1>Login</h1>
            <div className="inputbox">
                <input type="email" required />
                <label label="">Email</label>
            </div>
            <div className="inputbox">
                <input type="password" required />
                <label label="">Password</label>
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
                <div className='space'>

                </div>
                <div className="auth">
                    <Image src='/google.png' className="google" alt="Google Icon" width={200} height={200}/>
                </div>                
            </div>
            <div className="register">
                <p>Don't have a account ?<a href="#">Sign Up</a></p>
            </div>
        </form>
    </section>
  );
}
