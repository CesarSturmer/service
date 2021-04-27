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
  id,
  name,
  phone,
}) {
  return (
    <ul>
      <li>CPF: {cpf}</li>
      <li>email: {email}</li>
      <li>
        endereço:
        <ul>
          <li>bairro: {neighborhood}</li>
          <li>cep: {cep}</li>
          <li>Cidade: {city}</li>
          <li>Estado: {state}</li>
          <li>Complemento: {complement}</li>
          <li>Logradouro: {street}</li>
          <li>Número: {number}</li>
        </ul>
      </li>
      <li>Id: {id}</li>
      <li>Nome: {name}</li>
      <li>Telefone: {phone}</li>
    </ul>
  );
}

export default UserInfoBox
