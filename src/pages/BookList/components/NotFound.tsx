import styled from "styled-components"
import Error from "../../../components/Error"
import { TbMoodEmpty } from "react-icons/tb";



const StyledIcon = styled(TbMoodEmpty)`
    color:${props => props.theme.primary};
    font-size:48px;
`

const NotFound = () => {

    return <Error icon={<StyledIcon/>} text="No Results Found"/>
}

export default NotFound;