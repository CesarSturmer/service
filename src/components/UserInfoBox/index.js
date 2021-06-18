import {UserInfoContainer, DataContainer, Text, ButtonsContainer, Button} from './style'
import PhotoBox from '../Utils/PhotoBox'

function UserInfoBox({
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
  changePassword,
  openServiceForm,
  openServiceList,
  deleteAccount,
  serviceProvider
}) {
  return (
    <PhotoBox 
      deleteAccount={deleteAccount}
      openServiceList={openServiceList}
      openServiceForm={openServiceForm} 
      serviceProvider={serviceProvider}  
      name={name} 
      imageSrc={imageSrc}
      edit
    >
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
