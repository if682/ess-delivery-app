import './styles.css'
const Input = ({children,...props}) => {
    return(
        <div className='Input-Wrapper'>
            <label className='LabelInput'>{children}: </label>
            <input
                className='InputBox'
                {...props}
            />
        </div>
    );
};
export default Input;