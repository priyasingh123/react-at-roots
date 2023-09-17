import {useState, useEffect} from 'react'

const useOnlineStatus = () => {

    const [onlineStatus, setOnlineStatus] = useState(true)
    //try to check of online and return status
    useEffect(()=>{
        window.addEventListener('offline', ()=> {
            setOnlineStatus(false)
        })

        window.addEventListener('online', ()=> {
            setOnlineStatus(true)
        })

        return () => {
            window.removeEventListener('offline', ()=> {
                setOnlineStatus(false)
            })
    
            window.removeEventListener('online', ()=> {
                setOnlineStatus(true)
            })
        }
    }, [])


    return onlineStatus
}

export default useOnlineStatus