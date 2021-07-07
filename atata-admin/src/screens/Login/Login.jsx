import './Login.css'
import TextLoop from "react-text-loop";
import Logo from '../../Logo.png'
import { useAuth } from '../../Authentication/Auth0';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useState } from 'react';

export default function Login() {
    let auth = useAuth()

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [clicked, setClicked] = useState(false)


    const onClick = (e) => {
        e.preventDefault();
        setClicked(true)
        auth.signin(email, password)
    }

    return (
        <div className='login-container'>
            <div className='text__slider'>
                <div className='logo__container'>
                    <img src={Logo} alt='logo'/>
                </div>
                <div className='loops'>
                    <TextLoop>
                        <p>One Big African <br/>Market</p>
                        <p>Connecting Nations</p>
                        <p>Bringing distant <br/>market closer</p>
                    </TextLoop>
                </div>
            </div>
            <div className='form__container'>
                <form>
                    <div className='form__heading'>
                        <p>Admin Login Page</p>
                        <span>This Page is only for Atata57.com authorized Administrators</span>
                    </div>

                    <div className='form-group'>
                        <label>Email</label>
                        <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Password</label>
                        <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)} />
                    </div>
                    <div className='button'>
                        <button onClick={onClick}>{clicked ?  <CircularProgress style={{color:'#fff', width: 20, height:20}} /> : 'login' }</button>
                    </div>
                </form>
            </div>
        </div>
    )
}