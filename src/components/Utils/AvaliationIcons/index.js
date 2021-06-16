import styled from 'styled-components'
import {ImStarFull, ImStarEmpty, ImStarHalf} from 'react-icons/im'

const IconsContainer = styled.div`
    display: flex;
`

const AvaliationIcons = ({avaliation}) => {

    const renderIcon = (position) => {
        if(avaliation + 0.25 >= position) {
            return <ImStarFull />
        }
        if(avaliation > position - 0.75) {
            return <ImStarHalf />
        }
        return <ImStarEmpty />
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