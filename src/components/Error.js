import React from 'react'
import { useRouteError } from 'react-router-dom'
function Error() {
    const err=useRouteError();
  return (
    <div className='text-center'>
      <h2>Something Went Wrong</h2>
      <p className='lead text-danger'>{err.sattusText}</p>
    </div>
  )
}

export default Error
