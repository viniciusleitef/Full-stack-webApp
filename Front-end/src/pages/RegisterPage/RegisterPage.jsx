import "./RegisterPage.css"
import { Link } from "react-router-dom";

export const RegisterPage = ()=>{
    return(
        <div className="main-login">
            <form action="#" className="register-box">
                <div className="header-register">
                    <h1>Sing in</h1>
                    <Link to="/login" className="link-reset btn-register-login">Login</Link>
                </div>

                <div className="register-campos">
                    <div className="campo-register">
                        <label htmlFor="">First Name
                            <input type="text" placeholder="Digite seu primeiro nome" className="input-register"/>
                        </label>

                        <label htmlFor="">Last Name
                            <input type="text" placeholder="Digite seu sobrenome" className="input-register"/>
                        </label>
                    </div>

                    <div className="campo-register">
                        <label htmlFor="">E-mail
                            <input type="text" placeholder="Digite seu e-mail" className="input-register"/>
                        </label>

                        <label htmlFor="">Cel
                            <input type="tel" placeholder="(xx) xxxx-xxxx" className="input-register" pattern="(\([0-9]{2}\))\s([9]{1})?([0-9]{4})-([0-9]{4})"/>
                        </label>
                    </div>

                    <div className="campo-register">
                        <label htmlFor="">Password
                            <input type="password" placeholder="Password" className="input-register"/>
                        </label>

                        <label htmlFor="">Confirm your Password
                            <input type="password" placeholder="Confirm your Password" className="input-register" />
                        </label>
                    </div>
                </div>
                

                <div className="gender-box">
                    <h2>Gender</h2>
                    <div className="options-gender">
                        <div className="gender-input">
                            <input type="radio" name="gender" id="male"/>
                            <label htmlFor="male">Male</label>
                        </div>

                        <div className="gender-input">
                            <input type="radio" name="gender" id="female"/>
                            <label htmlFor="female">Female</label>
                        </div>

                        <div className="gender-input">
                            <input type="radio" name="gender" id="other"/>
                            <label htmlFor="other">Other</label>
                        </div>
                    </div>
                </div>

                <div className="botao-enviar">
                    <Link to="/" className="link-reset btn-register">Register</Link>
                </div>
            </form>
        </div>
    )
}