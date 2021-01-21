import './Input.module.css'

const Input = ({ label, type, name, value, onChange }) => {
    const onInputChange = (value) => {
        const matches = value.match(/([-])?([0-9]*)/g)

        if (matches) {
            onChange(matches[0])
        }
    }

    return (
        <label>
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={(e) => onInputChange(e.target.value)}
            />
        </label>
    )
}

export default Input