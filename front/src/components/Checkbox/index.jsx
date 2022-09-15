import { useState } from "react";
import './styles.css'
const Checkbox = ({ label, checked}) => {
    const defaultChecked = checked ? checked : true;
    const [isChecked, setIsChecked] = useState(defaultChecked);
    return (
        <label className="checkbox-wrapper">
            <div className="checkbox">
               <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => setIsChecked((prev) => !prev)}
                /> 
            </div>        
            <span className="label">{label}</span>
        </label>
    );
  };
  export default Checkbox;