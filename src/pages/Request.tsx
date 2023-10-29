import './Request.css'

import logoNegative from '../assets/logoNegative.png'
import { HeaderButton } from '../styles/Button';
import { useNavigate } from 'react-router-dom';
import { RequestStatus } from '../components/RequestStatus';
import { TotalSales } from '../components/TotalSales';
import { RequestsComponents } from '../components/RequestsComponents';
import { useEffect, useState } from 'react';
import { RequestInterface } from '../types/RequestInterface';

export function Request(){
    const navigate = useNavigate();
    const handleOnClick = () => navigate('/login');

        const [list, setList] = useState(null);
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            fetch('http://localhost:8080/pedidos')
            .then((response) => response.json())
            .then((data) => {
                if(data.content) {
                    console.log(data.content);
                    setList(data.content);
                    
                } else {
                    alert("Erro"+data.error)
                }
                setLoading(false);
            });
        }, []);

      
    return(
        <div className='container'>
            <div className='header'>
                <img className='logo-negative-image' src={logoNegative}/>
                <div className='header-text'>MONITORAMENTO DE PEDIDOS</div>
                <HeaderButton onClick={handleOnClick}>SAIR</HeaderButton>
            </div>
            <div className='componentes'>
                <div className='status-price'>
                    <RequestStatus/>
                    <TotalSales/>
                </div>

                <div className='card'>
                    {loading ? ( <p>Carregando...</p>) : (
                        list.map((data : RequestInterface) => (
                            <RequestsComponents key={data.id} data={data} />
                        )
                    ))}
                </div>
            </div>
            </div>


    );
}