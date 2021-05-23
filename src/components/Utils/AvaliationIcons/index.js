import styled from 'styled-components'
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'

const IconsContainer = styled.div`
    display: flex;
`

const AvaliationIcons = ({avaliation}) => {

    const renderIcon = (position) => {
        if(avaliation >= position) {
            return <AiFillStar />
        } else {
            return <AiOutlineStar />
        }
    }

    return (
        <IconsContainer>
            {renderIcon(1)}
            {renderIcon(2)}
            {renderIcon(3)}
            {renderIcon(4)}
            {renderIcon(5)}
        </IconsContainer>
    )
}

export default AvaliationIcons