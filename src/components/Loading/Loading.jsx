import React from 'react'
import './style.css'

const Loading = () => {
  return (
    <div className='background-loading'>
        <div className='gif-loading'>
            <img src='/imgs/loading.gif' alt='loading'/>
        </div>
    </div>
  )
}

export default Loading