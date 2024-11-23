import React,{useState} from 'react'
import Card from './Card'

const Cards = ({courses,category}) => {
    const[likedCourses,setLikedCourses]=useState([]);
    const getCourses=() =>{
        if(category==="All"){
            let allCourses=[];
            Object.values(courses).forEach((courseCategory)=>{
                courseCategory.forEach((course)=>{
                    allCourses.push(course);
                });
            })        
            return allCourses;
        }
        else{
            return courses[category];
        }
    }
    
  return (
    <div className='w-6/12 mx-auto grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 gap-3'>
        {
            getCourses().map((course) => {
                return (
                    <Card key={course.id} {...course} setLikedCourses={setLikedCourses} likedCourses={likedCourses} />
                );
            })
        }   
    </div>
  )
}

export default Cards
  