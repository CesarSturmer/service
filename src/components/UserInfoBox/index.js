import styled from 'styled-components'
import PhotoBox from '../Utils/PhotoBox'

const UserInfoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 2rem 0;
`

const DataContainer = styled.div`
  max-width: 21rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  &:first-child {
    margin-right: 9rem;
  }
`

const Text = styled.p`
  margin: 1rem 0;
`

function UserInfoBox({
  avaliation,
  imageSrc,
  email,
  cpf,
  cep,
  city,
  state,
  street,
  number,
  name,
  phone,
}) {
  return (
    <PhotoBox avaliation={avaliation} name={name} imageSrc={imageSrc}>
      <UserInfoContainer>
        <DataContainer>
          <Text>Email</Text>
          <Text>{email}</Text>
          <Text>CPF</Text>
          <Text>{cpf}</Text>
          <Text>Telefone</Text>
          <Text>{phone}</Text>
        </DataContainer>
        <DataContainer>
          <Text>CEP</Text>
          <Text>{cep}</Text>
          <Text>Local</Text>
          <Text>{state},{city},{street}, {number}</Text>
        </DataContainer>
      </UserInfoContainer>
    </PhotoBox>
  );
}

export default UserInfoBox
