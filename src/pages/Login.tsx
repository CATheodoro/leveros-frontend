import { ShowdButton, StyledButton } from '../styles/Button'
import {useNavigate} from 'react-router-dom';

import logoPosColor from '../assets/logoPosColor.png'
import fundo from '../assets/fundo.png'
import logoNegative from '../assets/logoNegative.png'

import './Login.css'
import { useState } from 'react';

export function Login(){
    const navigate = useNavigate();
    const handleOnClick = () => navigate('/request');
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {setShowPassword(!showPassword);};

    return(
        <div className='login'>
            <img className='logo-negative-image' src={logoNegative}/>
            <div className='left-content'>
                <img className='fundo-image' src={fundo}/>
                <div className="overlay-image"/>
            </div>
            <div className='right-content'>
                <div className='right-content-top'>
                    <div className='box-login'>
                        <img className='logo-Pos-Color' src={logoPosColor}/>
                        <div className='subtitle'>Acesse o Painel de Monitoramento</div>
                    </div>
                    <div className='box-login'>
                        <div className='text'>Email:</div>
                        <input className='input' type="text" />
                    </div>
                    <div className='box-login'>
                        <div className='text'>Senha:</div>
                        <input className='input' type={showPassword ? 'text' : 'password'} />
                        <ShowdButton onClick={togglePasswordVisibility}>
                            Show
                        </ShowdButton>
                    </div>
                    <div className='box-login'>
                        <StyledButton onClick={handleOnClick}>Entrar</StyledButton>
                    </div>
                </div>
            </div>
        </div>
    );
}