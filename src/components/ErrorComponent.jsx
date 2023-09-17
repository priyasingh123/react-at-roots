import { useRouteError } from 'react-router-dom'


const ErrorComponent = () => {

    //useRouterError hooks from react-router-dom
    const err = useRouteError()
    console.log (err)
    return (
        <div>
            <h1>Oops something went wrong!!!</h1>
            <h3>{err.statusText}</h3>
        </div>
    )
} 

export default ErrorComponent