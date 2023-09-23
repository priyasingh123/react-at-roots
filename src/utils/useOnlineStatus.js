import {useState, useEffect} from 'react'

const useOnlineStatus = () => {

    const [onlineStatus, setOnlineStatus] = useState(true)
    //try to check of online and return status

    const handleOffline = () => {
        setOnlineStatus(false);
      };
    
      const handleOnline = () => {
        setOnlineStatus(true);
      };

    useEffect(()=>{
        //offline and online are events 
        window.addEventListener('offline', handleOffline)
        window.addEventListener('online', handleOnline)

        return () => {
            window.removeEventListener('offline', handleOffline)
            window.removeEventListener('online', handleOnline)
        }
    }, [])

    return onlineStatus
}

export default useOnlineStatus