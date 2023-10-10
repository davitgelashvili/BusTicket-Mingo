
import { useTimer } from 'react-timer-hook';
import { deleteCookie } from 'cookies-next';
import { useEffect } from 'react';

const seconds = 10
const expiryTimestamp = new Date(Date.now() + seconds * 1000)

const Timer = () => {
    const {
        seconds,
        minutes,
        } = useTimer({ 
                expiryTimestamp,
                onExpire: () => {
                    deleteCookie('mytickets')
                    console.warn('onExpire called') 
                }
            })

    // const newTimeStamp = new Date(Date.now() + 300 * 1000)

    useEffect(()=>{
      if(minutes == 0 && seconds == 0) {
        
      }
    }, [minutes, seconds])

    return (
        <div style={{textAlign: 'center'}}>      
          <div style={{fontSize: '100px'}}>
            <span>{String(minutes).padStart(2, "0")}</span>:
            <span>{String(seconds).padStart(2, "0")}</span>
          </div>
        </div>
    );

}

export default Timer