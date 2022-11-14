import LoginUser from "../Auth/Login/LoginUser";
import RegisterUser from "../Auth/register/RegisterUser";


const Auth = ({authRoute}) => {

    return(
        <>
            Shop
            {authRoute === "login" && <LoginUser />}
            {authRoute === "register" && <RegisterUser />}
        </>
    )
}

export default Auth;