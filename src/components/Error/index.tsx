import styled from "styled-components";
import { H2 } from "../Typography";
import { FC } from "react";



const ErrorWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`;

const IconWrapper = styled.div`
    margin:10px;
    text-align:center;
`
interface IError {
    icon?: React.ReactNode;
    text:string
}

const Error:FC<IError> = ({icon, text}) => {

return (
    <ErrorWrapper>
        {icon ? <IconWrapper>{icon}</IconWrapper> :<> </> }
        <H2>{text}</H2>
    </ErrorWrapper>
)

}

export default Error;