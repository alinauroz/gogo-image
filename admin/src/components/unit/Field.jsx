
export default function (props) {
    return (
        <div>
            <p>{props.title}</p>
            <input 
                type = {props.inputType}
                value = {props.value || ""}
                placeholder = {props.placeholder || ""}
                name = {props.name}
                onChange = {props.onChange}
            />
        </div>
    )
}