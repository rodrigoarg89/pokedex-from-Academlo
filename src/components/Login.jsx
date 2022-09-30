import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeName } from '../store/slices/userName.slice';

const Login = () => {

    const dispatch = useDispatch();
    const [ userName, setUserName ] = useState('');

    const navigate = useNavigate();



    const dispatchUserName = () => {
        dispatch(changeName(userName));
        navigate('/pokedex')
    }

    return (
        <div className='login'>
            <div className='poke-port'>
                {/* <img src="https://i.pinimg.com/originals/23/0c/68/230c68295a086b46a3bd01d03bef7719.gif" alt="" /> */}
            </div>
            <div >
                <img className='poke-logo'src="http://i.imgur.com/iPvcyJv.png" alt="logo" />
            </div>

            <div className='input-initial'>
                <input 
                    className='input-log'
                    type="text"
                    value={userName}
                    onChange={e => setUserName(e.target.value)} />
                <button className='btn-log' onClick={dispatchUserName}><i class="fa-solid fa-paper-plane"></i></button>

            </div>
            <div className='title'>
                {/* <h1>Hi Trainer!!!</h1> */}
                <h4 className='blink'>Please, enter your name to access the site!</h4>
            </div>
        </div>
    );
};

export default Login;