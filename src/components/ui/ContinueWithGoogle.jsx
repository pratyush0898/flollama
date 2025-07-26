import React from 'react'

const ContinueWithGoogle = ({ className = "", ...props }) => {
  return (
    <div className={`google-button ${className}`} {...props}>
      <img src="/google-logo.svg" alt="google logo" />
      <span className='body-lg'>Continue with Google</span>
    </div>
  )
}

export default ContinueWithGoogle