import { useState } from "react";
import './styles.css'
const Checkbox = ({ label, checked,...props}) => {
    const defaultChecked = checked ? checked : false;
    const [isChecked, setIsChecked] = useState(defaultChecked);
    return (
        <label className="Checkbox">
            <div className="Checkbox-Box">
               <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => setIsChecked((prev) => !prev)}
                /> 
            </div>        
            <span className="Checkbox-Label">{label}</span>
        </label>
    );
  };
  export default Checkbox;