import UserForm from '../src/components/UserForm'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'

function Form() {
    return (
        <>
            <Header />
            <UserForm title='Cadastre-se em nosso site!' />
            <Footer />
        </>
    )
}

export default Form
