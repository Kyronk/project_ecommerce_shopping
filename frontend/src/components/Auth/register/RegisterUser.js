
import React from 'react';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../Context/AuthContext';

const RegisterUser = () => {

    const [loginForm, setLoginForm] = useState({
        username: '',
        password: ''

    })

    const onChangeInput = event => {
        setLoginForm({
            ...loginForm,
        })
    }

    return (
        <>
            <div> hello Chào mừng bạn đã đến! hãy RegisterUser</div>
            <form>
                {/* <input
                    placeholder='first name'
                />
                <br />
                <input
                    placeholder='last name'
                />
                <br /> */}
                <input
                    type='text'
                    placeholder='username'
                    name='username'
                />
                <br />
                <input
                    type='password'
                    placeholder='password'
                    name='password'
                />
                <br />
                <input
                    type="password"
                    placeholder='return password'
                />
                <br />
                {/* <input
                    placeholder='email'
                />
                <br /> */}


                <button
                    type='submit'
                    >Đằng kí</button>
            </form>
            <div>
                <p>
                    Bạn đã có tài khoảng rồi ? hãy đăng nhập ngay!
                </p>
                <Link to="/login">
                    <button> Login here</button>
                </Link>

            </div>
        </>

    )
}

export default RegisterUser;