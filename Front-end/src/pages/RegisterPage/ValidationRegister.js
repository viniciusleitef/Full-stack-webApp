class ValidationRegister {

    firstName(firstName) {
        if(!firstName){
            return {valid: false, error: "Preencha o campo First Name"}
        }
        return {valid: true, error: ""}
    }

    lastName(lastName) {
        if(!lastName){
            return {valid: false, error: "Preencha o campo Last Name"}
        }
        return {valid: true, error: ""}
    }

    email(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!email){
            return {valid: false, error: "Preencha o campo Email"}
        }
        if(regex.test(email)){
            return {valid: true, error: ""}
        }else{
            return {valid: false, error: "Email em formato inválido"}
        }
    }

    cel(cel){
        cel = cel.replace(/\s/g, '')
        const regex = /^(\(\d{2}\)\d{9}|\(\d{2}\)\d{5}-\d{4}|\d{11}|\d{7}-\d{4})$/;

        if(!cel){
            return {valid: false, error: "Preencha o campo Cel"}
        }
        if(regex.test(cel)){
            return {valid: true, error: ""}
        }else{
            return {valid: false, error: "Cel em formato inválido"}
        }

        return {valid: true, error: ""}
    }

    password(password){
        if(!password){
            return {valid: false, error: "Preencha o campo Password"}
        }
        return {valid: true, error: ""}
    }

    confirmPassword(confirmPassword, password){
        if(!confirmPassword){
            return {valid: false, error: "Preencha o campo Confirm Password"}
        }
        if(confirmPassword !== password){
            return {valid: false, error: "Você digitou senhas diferentes"}
        }
        return {valid: true, error: ""}
    }

    gender(gender){
        if(!gender){
            return {valid: false, error: "Preencha o campo Gender"}
        }
        return {valid: true, error: ""}
    }
}

export default ValidationRegister