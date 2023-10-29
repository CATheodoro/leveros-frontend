import './RequestsComponents.css'
import { RequestInterface } from '../types/RequestInterface';
import { AccessButton } from '../styles/Button';
  
  interface RequestsComponentProps {
    data: RequestInterface;
  }

const getColor = (status) => {
    if (status === 'PROCESSANDO') {
      return '#FFCE00';
    } else if (status === 'PENDENTE') {
      return '#2993CE';
    } else if (status === 'APROVADO') {
      return '#005A64';
    } else {
      return '#C73939';
    }
};

export function RequestsComponents({data} : RequestsComponentProps){

  const Color = getColor(data.status);

    return(
        <div className='requests-components'>
          <div className='list-request-components'>
            <div>Pedido </div>
            <div><AccessButton>ACESSAR</AccessButton></div>
          </div>
          <div className='list-components'>
            <div>Número</div>
            <div className='bold'>{data.number}</div>
          </div>
          <div className='list-components'>
            <div>Valor</div>
            <div className='bold'>{data.price}</div>
          </div>
          <div className='list-components'>
            <div>Status</div>
            <div className='bold' style={{ color: Color }}>{data.status}</div>
          </div>
        </div>
    );
}