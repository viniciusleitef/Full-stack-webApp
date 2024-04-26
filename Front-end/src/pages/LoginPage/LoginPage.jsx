import "./LoginPage.css"
import { Link, useNavigate } from "react-router-dom";
import {useState, useContext} from "react"
import { AuthContext } from "../../context/AuthContext";

export const LoginPage = ()=>{

    const {error} = useContext(AuthContext)
    const {login} = useContext(AuthContext)
    const navigate = useNavigate()

    const [dadosFormulario, setDadosFormulario] = useState(
        {
            email: '',
            password: ''
        }
    )

    const addingData = (event)=>{
        const {name, value} = event.target
        setDadosFormulario({...dadosFormulario, [name]: value})
    }

    const handleLogin = async (event) => {
        event.preventDefault()
    
        const isLogged =  await login(dadosFormulario)
        if(isLogged){
            navigate('/home')
        }
    }

    return(
        <div className="main-login">
            <div className="box-login">
                <h1>Login</h1>

                <form onSubmit={handleLogin} className="login-form">
                    <div className="input-perso">
                        <input onChange={addingData} type="text" name="email" placeholder="E-mail"/>
                        <i>icon</i>
                    </div>

                    <div className="input-perso">
                        <input onChange={addingData} type="password" name="password" placeholder="Password"/>
                        <i>icon</i>
                    </div>

                    <p className="errorMessage">{error}</p>

                    <div className="aux">
                        <label htmlFor="">
                            <input type="checkbox"/> Remember me
                        </label>

                        <Link to="/" className="link-reset">Forgot Password</Link>
                    </div>

                    <div className="btn-box">
                        <button type="submit" className="login">Login</button>
                    </div>

                    <h3>Don't have an account? <Link to="/register" className="link-register link-reset">Register</Link></h3>
                </form>
            </div>
        </div>
    )
}
