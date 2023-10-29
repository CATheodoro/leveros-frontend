import React, { useState, useEffect } from 'react';
import './RequestStatus.css'

export function RequestStatus(){

    const [list, setList] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8080/pedidos/resumoStatus')
           .then((response) => response.json())
           .then((data) => {
              console.log(data);
              setList(data);
              setLoading(false);
           });
     }, []);

    return(
        <div className='request-status'>
            <div className='title-request-status'>Status dos Pedidos</div>
            <div className='list-request-status'>
                {loading ? (<p>Carregando...</p>) : (
                    <div>
                        <table className='table-request-status'>
                            <tbody>
                                <tr>
                                    <th>Processando</th>
                                    <th>Pendente</th>
                                    <th>Aprovado</th>
                                    <th>Cancelado</th>
                                    <th>Total</th>
                                </tr>
                            </tbody>
                            <thead>
                                <tr>
                                    <td style={{ color: '#FFCE00' }}>{list.QTDSTATUSPROCESSANDO}</td>
                                    <td style={{ color: '#2993CE' }}>{list.QTDSTATUSPENDENTE}</td>
                                    <td style={{ color: '#005A64' }}>{list.QTDSTATUSAPROVADO}</td>
                                    <td style={{ color: '#C73939' }}>{list.QTDSTATUSCANCELADO}</td>
                                    <td>{list.QTDTOTALPEDIDOS}</td>
                                </tr>
                            </thead>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}