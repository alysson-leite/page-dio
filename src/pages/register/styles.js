import styled from 'styled-components'

export const RegisterContainer = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Wrapper = styled.div`
    max-width: 300px;
    margin-left: 10px;
`

export const Column = styled.div`
    flex: 1;
`

export const TitleRegister = styled.h2`
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 350px;
    margin-right: 10px;
    margin-bottom: 10px;
    line-height: 44px;

    color: #FFFFFF;
`

export const SubTitle = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    width: 350px;
    margin-bottom: 35px;
    line-height: 22px;
    
    color: #FFFFFF;
`

export const TextContent = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    width: 350px;
    margin: 25px 0;
    line-height: 22px;
    
    color: #FFFFFF;
 `

export const AlreadyHaveAcount = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    width: 420px;
    margin-bottom: 20px;
    line-height: 22px;
    
    color: #FFFFFF;
`

export const LoginHighLight = styled.span`
    color: #23DD7A;
    transition: .3s;

    &:hover {
        cursor: pointer;
        opacity: 0.9;
        text-decoration: underline;
    }
`



