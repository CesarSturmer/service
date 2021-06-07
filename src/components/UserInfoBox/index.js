import styled from 'styled-components'
import PhotoBox from '../Utils/PhotoBox'

const UserInfoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

const DataContainer = styled.div`
  max-width: 15rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-left: 5rem;
`

const Text = styled.p`
  margin: 1rem 0;
`

const ButtonsContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
`

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.title};
  border: 1px solid ${({ theme }) => theme.colors.backgroundWhite};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  padding: 0.5rem 2rem;
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
  editUser,
  changePassword
}) {
  return (
    <PhotoBox edit avaliation={avaliation} name={name} imageSrc={imageSrc}>
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
      <ButtonsContainer>
        <Button onClick={changePassword}>Alterar senha</Button>
        <Button onClick={editUser}>Alterar dados</Button>
      </ButtonsContainer>
    </PhotoBox>
  );
}

export default UserInfoBox
