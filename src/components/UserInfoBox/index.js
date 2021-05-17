import styled from 'styled-components'

const UserBox = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.title};
  width: 50rem;
  height: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem auto;
  border-radius: ${({ theme }) => theme.borderRadius.default};
`;

const UserPhoto = styled.img`
  background-color: ${({ theme }) => theme.colors.title};
  width: 20%;
  height: 10rem;
  border-radius: ${({ theme }) => theme.borderRadius.max};
  position: relative;
  top: -5rem;
`

const UserInfoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: -6rem;
`

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
`

function UserInfoBox({
  cpf,
  email,
  neighborhood,
  cep,
  city,
  state,
  complement,
  street,
  number,
  name,
  phone,
}) {
  return (
    <UserBox>
      <UserPhoto src='https://media-exp1.licdn.com/dms/image/C5603AQGukIMfUDJRpg/profile-displayphoto-shrink_400_400/0/1595376049871?e=1625702400&v=beta&t=IFIxV-PB6zDs9Fix0UvegxtNTVxP9HBFHJ_K7CZDSow' />
      <UserInfoContainer>
        <DataContainer>
          <h2>Dados pessoais:</h2>
          <p>{name}</p>
          <p>Email: {email}</p>
          <p>CPF: {cpf}</p>
          <p>Telefone: {phone}</p>
        </DataContainer>
        <DataContainer>
          <h2>Endereço:</h2>
          <p>{city}, {state}</p>
          <p>{street}, {number}</p>
          <p>{complement}</p>
        </DataContainer>
      </UserInfoContainer>
    </UserBox>
  );
}

export default UserInfoBox
