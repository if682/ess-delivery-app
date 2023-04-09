import './InputText.css'

export const InputText = (props) => {
  return (
    <input
                    onChange={(event) => props.setInput(event.target.value)}
                    type={props.type}
                    placeholder={props.placeholder}
                    className='input-text'
                    />
  )
}







