import React from "react";
import "./styles.css"
const ErrorMessage = ({children,maxTimer,...props}) => {
    const [counter, setCounter] = React.useState(maxTimer);
    
    //const [showError, setShowError] = useState(true);
    React.useEffect(() => {
      const timer =
        counter > 0 && setInterval(() => setCounter(counter - .001), 1);
      return () => clearInterval(timer);
    }, [counter]);

    const barStyles = {
        width: `${(counter/maxTimer)*100}%`
    }

    return (
      <>
        {counter>0?
            <div className="ErrorMessage-Wrapper" counter = {counter} {...props}>
                    <div className="Error">
                        <div className="ErrorCircle"></div>
                        <div className="ErrorMessage">{children}</div>
                    </div>
                    <div className="ErrorBar"  style={barStyles}></div>
                    
            </div>
            :""}
      </>
      
    );
  };
  export default ErrorMessage;