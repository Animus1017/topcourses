import React from 'react'
import { FcLike } from "react-icons/fc"
import { FcLikePlaceholder } from "react-icons/fc"
import {toast} from "react-toastify"
const Card = (data) => {
  let setLikedCourses=data.setLikedCourses;
  let likedCourses=data.likedCourses;
  
  function handleLike(event){
    if(likedCourses.includes(data.id)){
      setLikedCourses(likedCourses.filter((courseId)=>courseId!==data.id));
      toast.warning('Like Removed');
    }
    else{
      if(likedCourses.length===0){
        setLikedCourses([data.id]);
      }
      else{
        setLikedCourses((prev)=>[...prev,data.id]);
      }
      toast.success("Liked Successfully");
    }
  }
  return (
    <div className='bg-purple-400 rounded-md overflow-hidden relative'>
        <img src={data.image.url} alt={data.image.alt} />
      <div className='p-3 text-white'>
        <button className='absolute bg-white rounded-full m-auto p-2 right-2 top-[7.5rem]' onClick={handleLike}>
          {likedCourses.includes(data.id)?<FcLike fontSize='1.5rem'/>:<FcLikePlaceholder fontSize='1.5rem' />}
        </button>
        <h3 className='font-bold text-lg leading-6 pb-1'>{data.title}</h3>
        <p className='font-semibold'>{data.description.substr(0,100)}...</p>
      </div>
    </div>
  )
}

export default Card
