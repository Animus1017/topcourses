import React from 'react'
import {TailSpin} from 'react-loader-spinner'
const Spinner = () => {
  return (
    <div className='flex justify-center items-center h-full flex-col gap-3'>
      <TailSpin
        visible={true}
        height="80"
        width="80"
        color="rgb(192 132 252 / var(--tw-bg-opacity))"
        ariaLabel="tail-spin-loading"
        wrapperStyle={{}}
        wrapperClass=""
        strokeWidth="5"
        radius="-2"
      />
      <p className='text-white font-semibold text-lg'>Loading....</p>
    </div>
  )
}

export default Spinner
