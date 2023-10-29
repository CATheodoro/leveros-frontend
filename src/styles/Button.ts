import { styled } from 'styled-components'

export const StyledButton = styled.button`
    background:  #002D32;
    border-radius: 4px;
    border: none;
    color: #FFFFFF;
    box-shadow: 2px 2px grey;
    font-size: 25px;

    width: 161px;
    height: 60px;

    &:hover {
        background-color: #005A64;
    }
`

export const ShowdButton = styled.button`
    margin-left: -80px;
    background:  #002D32;
    border-radius: 4px;
    border: none;
    color: #FFFFFF;

    width: 67px;
    height: 29px;

    &:hover {
        background-color: #005A64;
    }
`

export const HeaderButton = styled.button`
    background:  #73B1B2;
    border-radius: 4px;
    border: none;
    color: #FFFFFF;

    width: 90px;
    height: 30px;

    &:hover {
        background-color: #005A64;
    }
`

export const AccessButton = styled.button`
    background: none;
    border-radius: 4px;
    border: 1px solid #73B1B2;
    color: #73B1B2;
    font-size: 12px;

    width: 75px;
    height: 30px;

    &:hover {
        background-color: #005A64;
    }
`