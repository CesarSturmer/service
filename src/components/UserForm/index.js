import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { TextField, MenuItem } from '@material-ui/core';
import api from '../../../pages/api';
import { useRouter } from 'next/router';
import FormValidations from '../../contexts/FormValidations';
import useError from '../../hooks/useError';
import FormContainer from '../Utils/FormContainer';
import Select from '../Utils/Select';

const TwoInputsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (min-width: 768px) and (max-width: 1024px) {
    flex-direction: column;
  }
  @media (min-width: 480px) and (max-width: 767px) {
    flex-direction: column;
  }
  @media (max-width: 479px) {
    flex-direction: column;
  }
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
`;

const OptionButton = styled.button`
  width: 13rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.title};
  padding: 0.5rem;
  margin: 1rem 0;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  border: none;
`;

function UserForm(props) {
  const router = useRouter();
  const [cities, setCities] = useState([]);
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPassworError, setConfirmPasswordError] = useState({
    error: false,
    text: '',
  });
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cep, setCep] = useState('');
  const [cepError, setCepError] = useState({ error: false, text: '' });
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [serviceProvider, setServiceProvider] = useState(false);
  const [complement, setComplement] = useState('');
  const validations = useContext(FormValidations);
  const [error, fieldValidator, canSend] = useError(validations);

  if (typeof window !== 'undefined') {
    const token = sessionStorage.getItem('validated_token');
    api.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  }

  useEffect(() => {
    const getCities = async () => {
      await api.get('cidades').then((res) => setCities(res.data));
    };
    getCities();
    if (props.data) {
      setName(props.data.nomeCompleto);
      setCpf(props.data.cpf);
      setEmail(props.data.email);
      setPhone(props.data.telefone);
      setCep(props.data.endereco.cep);
      setNeighborhood(props.data.endereco.bairro);
      setStreet(props.data.endereco.logradouro);
      setNumber(props.data.endereco.numero);
      setComplement(props.data.endereco.complemento);
      setCity(props.data.endereco.cidade.id);
      setComplement(props.data.endereco.complemento);
      console.log(props.data);
    }
  }, []);

  const cepValidator = async () => {
    await axios
      .get(`https://viacep.com.br/ws/${cep}/json`)
      .then((res) => {
        setStreet(res.data.logradouro);
        setNeighborhood(res.data.bairro);
        setCepError({ error: false, text: '' });
      })
      .catch(() => setCepError({ error: true, text: 'CEP inválido!' }));
  };

  const confirmPasswordValidator = () => {
    password === confirmPassword
      ? setConfirmPasswordError({ error: false, text: '' })
      : setConfirmPasswordError({ error: true, text: 'Senhas diferentes!' });
  };

  const postUser = async () => {
    await api
      .post('usuario', {
        cpf: cpf,
        email: email,
        endereco: {
          bairro: neighborhood,
          cep: cep,
          cidade: {
            id: city,
          },
          complemento: complement,
          logradouro: street,
          numero: number,
        },
        isPrestador: serviceProvider,
        nomeCompleto: name,
        senha: password,
        telefone: phone,
      })
      .then(() => alert('usuario cadastrado com sucesso'))
      .catch(() => alert('Falha ao cadastrar usuário!'));
  };

  const editUser = async () => {
    await api
      .put('usuario', {
        email: email,
        endereco: {
          bairro: neighborhood,
          cep: cep,
          cidade: {
            id: city,
          },
          complemento: complement,
          logradouro: street,
          numero: number,
        },
        nomeCompleto: name,
        telefone: phone,
      })
      .then(() => {
        alert('usuário editado com sucesso');
        router.reload();
      })
      .catch(() => alert('falha ao editar'));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (canSend()) {
      if (props.edit) {
        editUser();
      } else {
        postUser();
      }
    }
  };

  return (
    <FormContainer
      title={props.title}
      onSubmit={onSubmit}
      buttonText={props.edit ? 'Editar' : 'Cadastrar'}
      helperText={props.edit ? false : 'Já possui uma conta?'}
      linkText="Clique aqui para acessa-la"
      to="/login"
      back={props.back}
    >
      <TextField
        value={name}
        onChange={(e) => setName(e.target.value)}
        label="Nome completo"
        variant="outlined"
        size="small"
        type="text"
        margin="normal"
        fullWidth
        required
      />
      <TwoInputsContainer>
        <TextField
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          onBlur={fieldValidator}
          error={error.phone.error}
          helperText={error.phone.text}
          label="Telefone"
          name="phone"
          variant="outlined"
          size="small"
          type="number"
          margin="normal"
          required
        />
        <TextField
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          onBlur={fieldValidator}
          error={error.cpf.error}
          helperText={error.cpf.text}
          label="CPF"
          name="cpf"
          variant="outlined"
          size="small"
          type="number"
          margin="normal"
          required
        />
      </TwoInputsContainer>
      <TextField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        label="Email"
        variant="outlined"
        size="small"
        type="email"
        margin="normal"
        fullWidth
        required
      />
      {!props.edit && (
        <TwoInputsContainer>
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={fieldValidator}
            error={error.password.error}
            helperText={error.password.text}
            label="Senha"
            name="password"
            variant="outlined"
            size="small"
            type="password"
            margin="normal"
            required
          />
          <TextField
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onBlur={confirmPasswordValidator}
            error={confirmPassworError.error}
            helperText={confirmPassworError.text}
            label="Confirma senha"
            name="password"
            variant="outlined"
            size="small"
            type="password"
            margin="normal"
            required
          />
        </TwoInputsContainer>
      )}
      <TwoInputsContainer>
        <TextField
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          onBlur={cepValidator}
          error={cepError.error}
          helperText={cepError.text}
          label="CEP"
          variant="outlined"
          size="small"
          type="number"
          margin="normal"
          required
        />
        <Select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          label="Cidade"
        >
          {cities.map((city) => {
            return (
              <MenuItem key={city.id} value={city.id}>
                {city.nome}
              </MenuItem>
            );
          })}
        </Select>
      </TwoInputsContainer>
      <TextField
        value={neighborhood}
        onChange={(e) => setNeighborhood(e.target.value)}
        label="Bairro"
        variant="outlined"
        size="small"
        type="text"
        margin="normal"
        fullWidth
        required
      />
      <TwoInputsContainer>
        <TextField
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          label="Rua"
          variant="outlined"
          size="small"
          type="text"
          margin="normal"
          required
        />
        <TextField
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          label="Número"
          variant="outlined"
          size="small"
          type="number"
          margin="normal"
          required
        />
      </TwoInputsContainer>
      <TextField
        value={complement}
        onChange={(e) => setComplement(e.target.value)}
        label="Complemento"
        variant="outlined"
        size="small"
        type="text"
        margin="normal"
        fullWidth
      />
      {!props.edit && (
        <>
          <Text>Como você deseja se cadastrar?</Text>
          <TwoInputsContainer>
            <OptionButton
              type="button"
              onClick={() => setServiceProvider(false)}              
            >
              Contratante
            </OptionButton>
            <OptionButton
              type="button"
              onClick={() => setServiceProvider(true)}
            >
              Prestador de serviços
            </OptionButton>
          </TwoInputsContainer>
        </>
      )}
    </FormContainer>
  );
}

export default UserForm;
