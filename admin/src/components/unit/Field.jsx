
export default function (props) {
    return (
        <div style = {props.style}>
            <p className = 'field-title'>{props.title}</p>
            <input 
                type = {props.inputType}
                placeholder = {props.placeholder || ""}
                name = {props.name}
                onChange = {props.onChange}
                className = 'form-control'
            />
        </div>
    )
}