
export default function (props) {
    return (
        <div style = {props.style}>
            <p className = 'field-title'>{props.title}</p>
            {
            props.addon ?
            <div class="input-group">
                <span class="input-group-addon">{props.addon}</span>
                <input 
                    type = {props.inputType}
                    placeholder = {props.placeholder || ""}
                    name = {props.name}
                    onChange = {props.onChange}
                    className = 'form-control'
                    value = {props.value}
                />
            </div>
            :
            <input 
                type = {props.inputType}
                placeholder = {props.placeholder || ""}
                name = {props.name}
                onChange = {props.onChange}
                className = 'form-control'
                value = {props.value}
            />
            }
        </div>
    )
}