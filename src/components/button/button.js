import './button.css'

const sayHello = () => {
    console.log('Deu certo irmão')
}

export const Button = ({label}) => {
    return <button className="btn" onClick={sayHello} >{label}</button>
}

Button.defaultProps = {
    label: 'Clique aqui'
}