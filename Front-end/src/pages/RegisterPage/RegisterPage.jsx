import "./RegisterPage.css"
import ValidationError from './ValidationRegister.js';
import { Link } from "react-router-dom";
import {useState} from "react"
import axios from "axios"
import { useApi } from "../../hooks/useApi";

export const RegisterPage = ()=>{
    const validationError = new ValidationError()
    const penis = "penis"
    
    const api = useApi()
    const [validateError, setValidateError] = useState(
        {
            firstName: '',
            lastName: '',
            email: '',
            cel: '',
            password: '',
            confirmPassword: '',
            gender: ''
        }
    )

    const [dadosFormulario, setDadosFormulario] = useState(
        {
            firstName: '',
            lastName: '',
            email: '',
            cel: '',
            password: '',
            confirmPassword: '',
            gender: ''    
        }
    )

    const addingData = (event)=>{
        const {name, value} = event.target
        console.log(name, value)
        setDadosFormulario({...dadosFormulario, [name]: value})
    }

    const verifyData = (event)=>{
        event.preventDefault()
        const verifyFields = 
        {
            firstName: {valid: false, error: ""},
            lastName: {valid: false, error: ""},
            email: {valid: false, error: ""},
            cel: {valid: false, error: ""},
            password: {valid: false, error: ""},
            confirmPassword: {valid: false, error: ""},
            gender: {valid: false, error: ""}
        }

        
        verifyFields.firstName = validationError.firstName(dadosFormulario.firstName)
        verifyFields.lastName = validationError.lastName(dadosFormulario.lastName)
        verifyFields.email = validationError.email(dadosFormulario.email)
        verifyFields.cel = validationError.cel(dadosFormulario.cel)
        verifyFields.password = validationError.password(dadosFormulario.password)
        verifyFields.confirmPassword = validationError.confirmPassword(dadosFormulario.confirmPassword, dadosFormulario.password)
        verifyFields.gender = validationError.gender(dadosFormulario.gender)

        console.log(verifyFields)
        //Verifica se todos os Fields de verifyFields são true
        const allFieldsValid = Object.values(verifyFields).every(field => field.valid)
        
        if (!allFieldsValid){
            setValidateError({
                firstName: verifyFields.firstName.error,
                lastName: verifyFields.lastName.error,
                email: verifyFields.email.error,
                cel: verifyFields.cel.error,
                password: verifyFields.password.error,
                confirmPassword: verifyFields.confirmPassword.error,
                gender: verifyFields.gender.error
            });
        }else{
            return sendData()
        }
    }

    const sendData = async ()=>{
        try {
            const response = await api.register(dadosFormulario)
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
            <form onSubmit={verifyData} className="register-box">
                <div className="header-register">
                    <h1>Sign in</h1>
                    <Link to="/login" className="link-reset btn-register-login">Login</Link>
                </div>

                <div className="register-campos">
                    <div className="campo-register">
                        <label htmlFor="">First Name
                            <input onChange={addingData} type="text" name="firstName" placeholder="Digite seu primeiro nome" className="input-register"/>
                        <p className="validateError">{validateError.firstName}</p>
                        </label>

                        <label htmlFor="">Last Name
                            <input onChange={addingData} type="text" name="lastName" placeholder="Digite seu sobrenome" className="input-register"/>
                            <p className="validateError">{validateError.lastName}</p>
                        </label>
                    </div>

                    <div className="campo-register">
                        <label htmlFor="">E-mail
                            <input onChange={addingData} type="text" name="email" placeholder="Digite seu e-mail" className="input-register"/>
                            <p className="validateError">{validateError.email}</p>
                        </label>

                        <label htmlFor="">Cel
                            <input onChange={addingData} type="tel" name="cel" placeholder="(xx) xxxx-xxxx" className="input-register"/>
                            <p className="validateError">{validateError.cel}</p>
                        </label>
                    </div>

                    <div className="campo-register">
                        <label htmlFor="">Password
                            <input onChange={addingData} type="password" name="password" placeholder="Password" className="input-register"/>
                            <p className="validateError">{validateError.password}</p>
                        </label>

                        <label htmlFor="">Confirm your Password
                            <input onChange={addingData} type="password" name="confirmPassword" placeholder="Confirm your Password" className="input-register" />
                            <p className="validateError">{validateError.confirmPassword}</p>
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
                        <p className="validateError">{validateError.gender}</p>
                </div>

                <div className="botao-enviar">
                    <button type="submit" className="btn-register">Register</button>
                </div>
            </form>
        </div>
    )
}