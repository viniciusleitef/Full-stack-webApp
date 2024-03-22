import "./RegisterPage.css"
import { Link } from "react-router-dom";
import {useState} from "react"
import axios from "axios"

export const RegisterPage = ()=>{

    const [dadosFormulario, setDadosFormulario] = useState(
        {
            firstName: '',
            lastName: '',
            email: '',
            cel: 0,
            password: '',
            gender: ''    
        }
    )

    

    const addingData = (event)=>{
        const {name, value} = event.target
        setDadosFormulario({...dadosFormulario, [name]: value})
    }

    const sendData = async (event)=>{
        event.preventDefault()

        try {
            const response = await axios.post("http://127.0.0.1:8000/user", dadosFormulario)
            if (response.status === 200){
                alert("cadastro realizado com sucesso")
                //redirecionar usuário para página de sucesso
            }else{
                console.error("Falha ao cadastrar usuário")
            }
        } catch (error) {
            console.error('Erro ao enviar requisição:', error);
        }

    }

    return(
        <div className="main-login">
            <form onSubmit={sendData} className="register-box">
                <div className="header-register">
                    <h1>Sign in</h1>
                    <Link to="/login" className="link-reset btn-register-login">Login</Link>
                </div>

                <div className="register-campos">
                    <div className="campo-register">
                        <label htmlFor="">First Name
                            <input onChange={addingData} type="text" name="firstName" placeholder="Digite seu primeiro nome" className="input-register"/>
                        </label>

                        <label htmlFor="">Last Name
                            <input onChange={addingData} type="text" name="lastName" placeholder="Digite seu sobrenome" className="input-register"/>
                        </label>
                    </div>

                    <div className="campo-register">
                        <label htmlFor="">E-mail
                            <input onChange={addingData} type="text" name="email" placeholder="Digite seu e-mail" className="input-register"/>
                        </label>

                        <label htmlFor="">Cel
                            <input onChange={addingData} type="tel" name="cel" placeholder="(xx) xxxx-xxxx" className="input-register"/>
                        </label>
                    </div>

                    <div className="campo-register">
                        <label htmlFor="">Password
                            <input onChange={addingData} type="password" name="password" placeholder="Password" className="input-register"/>
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
                            <input onChange={addingData} value="male" type="radio" name="gender" id="male"/>
                            <label htmlFor="male">Male</label>
                        </div>

                        <div className="gender-input">
                            <input onChange={addingData} value="female" type="radio" name="gender" id="female"/>
                            <label htmlFor="female">Female</label>
                        </div>

                        <div className="gender-input">
                            <input onChange={addingData}  value="other" type="radio" name="gender" id="other"/>
                            <label htmlFor="other">Other</label>
                        </div>
                    </div>
                </div>

                <div className="botao-enviar">
                    <button type="submit" className="btn-register">Register</button>
                </div>
            </form>
        </div>
    )
}