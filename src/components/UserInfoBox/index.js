import styled from 'styled-components'
import PhotoBox from '../Utils/PhotoBox'

const UserInfoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
`

function UserInfoBox({
  email,
  city,
  state,
  street,
  number,
  name,
  phone,
}) {
  return (
    <PhotoBox name={name}>
      <UserInfoContainer>
        <DataContainer>
          <p>Email: {email}</p>
          <p>Telefone: {phone}</p>
        </DataContainer>
        <DataContainer>
          <p>{city}, {state}</p>
          <p>{street}, {number}</p>
        </DataContainer>
      </UserInfoContainer>
    </PhotoBox>
  );
}

export default UserInfoBox
