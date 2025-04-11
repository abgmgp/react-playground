import 'bootstrap-icons/font/bootstrap-icons.css';
import { useEffect, useState } from 'react';

const ChangeBackground = () => {
    const value = "Click to change color";
    const [isPurple, setIsPurple] = useState(false);

    useEffect(() => {
      document.body.style.backgroundColor = isPurple ? '#000000' : '#242424';
    }, [isPurple]);

    const ChangeBackgroundFunction = () => {
      setIsPurple(!isPurple);
    }

    return (
      <div>
          <button className='bi bi-palette' style={{backgroundColor: '#333333'}} onClick={ChangeBackgroundFunction}>
          </button>
      </div>
    )
}



export default ChangeBackground;