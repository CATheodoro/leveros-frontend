import React, { useState, useEffect } from 'react';
import './TotalSales.css'

export function TotalSales(){

    const [list, setList] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8080/pedidos/totalVendas')
           .then((response) => response.json())
           .then((data) => {
              console.log(data);
              setList(data);
              setLoading(false);
           });
     }, []);


    return(
        <div className='total-sales'>
            <div className='title-total-sales'>Total de Vendas</div>
            <div className='price'>
                {loading ? (<p>Carregando...</p>) : (
                    <div>R${list.totalSales.toFixed(2).toString().replace(".", ",")}</div>
                )}
            </div>
        </div>
    );
}