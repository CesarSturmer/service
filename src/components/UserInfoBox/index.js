import {UserInfoContainer, DataContainer, Text, ButtonsContainer, Button} from './style'
import PhotoBox from '../Utils/PhotoBox'

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
