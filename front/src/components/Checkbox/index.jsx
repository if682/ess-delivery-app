import { useState } from "react";
import './styles.css'
const Checkbox = ({ children, checked,...props}) => {
    const defaultChecked = checked ? checked : false;
    const [isChecked, setIsChecked] = useState(defaultChecked);
    return (
        <label className="Checkbox">
            <div className="Checkbox-Box">
               <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => setIsChecked((prev) => !prev)}
                    {...props}
                /> 
            </div>        
            <span className="Checkbox-Label">{children}</span>
        </label>
    );
  };
  export default Checkbox;