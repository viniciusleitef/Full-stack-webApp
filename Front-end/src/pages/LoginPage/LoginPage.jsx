import "./LoginPage.css"
import { Link } from "react-router-dom";

export const LoginPage = ()=>{
    return(
        <div className="main-login">
            <div className="box-login">
                <h1>Login</h1>

                <form action="" className="login-form">
                    <div className="input-perso">
                        <input type="text" placeholder="Username"/>
                        <i>icon</i>
                    </div>

                    <div className="input-perso">
                        <input type="password" placeholder="Password"/>
                        <i>icon</i>
                    </div>

                    <div className="aux">
                        <label htmlFor="">
                            <input type="checkbox"/> Remember me
                        </label>

                        <Link to="/" className="link-reset">Forgot Password</Link>
                    </div>

                    <div className="btn-box">
                        <button className="login">Login</button>
                    </div>

                    <h3>Don't have an account? <Link to="/register" className="link-register link-reset">Register</Link></h3>
                </form>
            </div>
        </div>
    )
}
