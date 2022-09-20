import './button.css'

export const Button = ({label}) => {
    return <button className="btn">{label}</button>
}

Button.defaultProps = {
    label: 'Clique aqui'
}