import React from 'react'
import { HashLoader } from 'react-spinners'

function page() {
  return (
    <div className='h-screen flex justify-center pt-52 bg-colorPrimary'>
           <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center" viewBox="0 0 256 256">
           <HashLoader size={100} color="#73858f" />
           
            </div>
    </div>

  )
}

export default page