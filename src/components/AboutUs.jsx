import React, {useEffect} from 'react'

const AboutUs = () => {

  useEffect(() => {
    let timer = setInterval(()=>{
      console.log ('interval')
    }, 1000)

    return ()=> {
      clearInterval(timer)
    }
  }, [])



  return (
    <div>
      <h1>About Us</h1>
    </div>
  )
}

export default AboutUs
