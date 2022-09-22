const showButtonLabel = (label) => {
    alert(`A label desse botão é '${label}'`)
}

export const Button = ({label, bgColor, color}) => {
    return (
        <button style={{backgroundColor: bgColor, color}} onClick={() => showButtonLabel(label)}>
            {label}
        </button>
    )
}