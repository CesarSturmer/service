import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

const NavigationButton = styled.a`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 30rem;
  height: 10rem;
`

export default function Home() {
  return (
    <>
      <Title>My page</Title>
      <NavigationButton href='/login'>Go to Login</NavigationButton>
      <NavigationButton href='/userForm'>Go to User Form</NavigationButton>
    </>
  )
}
