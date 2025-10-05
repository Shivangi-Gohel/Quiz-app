import React, {useContext} from 'react'
import { UserContext } from '../UserContext';

const DashBoard = ({score, total}) => {
  const {user} = useContext(UserContext);
  return (
    <div className=' px-4 sm:px-6 md:px-12 lg:px-20 text-amber-100 text-center'>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="Trophy"
          className="w-32 h-32 mx-auto mt-20"
        />
        <div className='font-bold text-xl mt-2 sm:text-2xl text-amber-100'>{user.name}</div>
      <div className='font-bold text-3xl mt-15'>Quiz Finished!!!</div>
      <div className='font-bold text-2xl mt-10'>Your Score is {score} out of {total}</div>
      <button className='mt-10 bg-yellow-400 px-10 py-1 rounded-lg text-black font-bold' onClick={() => window.location.reload()}>Play Again</button>
    </div>
  )
}

export default DashBoard
