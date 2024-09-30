import { H1 } from '../../../components/Typography';
import styled from 'styled-components';
import { IoArrowBack } from "react-icons/io5";
import { useLocation, useNavigate } from 'react-router-dom';
import paths from '../../../constants/paths';

const NavBarHolder = styled.div`
    display:flex;
    align-items:center;
    justfify-content:center;
`

const BackIcon = styled(H1)`
    color:${(props) => props.theme.primary};
    display:inline-block;
    margin-right:8px;
    line-height:0.75;
`

const NavBarTitle = styled(H1)` 
    text-transform:capitalize
`

const NavBar = ({ genre = "" }: { genre?: string }) => {
    const navigate = useNavigate();
    const onBackPressed = () => {
        if (window.history.length > 1) {
            navigate(-1); // Go back to the previous page
        } else {
            navigate(paths.home); // Redirect to home page if no history
        }
    }

    return <NavBarHolder>
        <BackIcon onClick={() => onBackPressed()}><IoArrowBack/></BackIcon>
        <NavBarTitle>{genre}</NavBarTitle>
    </NavBarHolder>
}


export default NavBar;