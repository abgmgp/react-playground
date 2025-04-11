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
      <div style={{marginTop: '20px' }}>
          <button onClick={ChangeBackgroundFunction}>
            {value}
          </button>
      </div>
    )
}



export default ChangeBackground;