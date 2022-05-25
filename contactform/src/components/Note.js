import React from 'react'
import { MdDeleteForever } from 'react-icons/md'

const Note = () => {
  return <div className='note'>
      <span>Salam! This is my first note!</span>
      <div className='note-footer'>
          <small>1401/02/21</small>
          <MdDeleteForever className='delete-icon' size='1.5em' />
      </div>


  </div> 
   
}

export default Note