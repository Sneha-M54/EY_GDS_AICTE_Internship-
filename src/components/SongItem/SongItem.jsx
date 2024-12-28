import React, { useContext } from 'react'
import { PlayerContext } from '../../context/PlayerContext'

const SongItem = ({ name, 
  
  
  
  
  
  
  
  
  
  
  
  
  desc, id }) => {

  const { playWithId } = useContext(PlayerContext);

  return (
    <div  className=' min-w-[180px] hover:bg-[#ffffff26] p-2 px-3 rounded cursor-pointer'>
      <img className='rounded'alt="" />
      <p className=' font-bold mt-2 mb-1'>{name}</p>
      <p className=' text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}

export default SongItem