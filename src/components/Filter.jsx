import React from 'react'

const Filter = (props) => {
  function handleFilter(title){
    props.setCategory(title);
  }
  return (
    <div  className='flex justify-center gap-2 py-4 flex-wrap'>
        {
            props.filterData.map((f)=>{
                return <button key={f.id} className={`bg-purple-400 py-2 px-3 text-white rounded-md font-semibold border-white ${ props.category===f.title?'border-2':'border-0'} transition-all duration-300 hover:bg-purple-300`} onClick={()=>handleFilter(f.title)}>{f.title}</button>
            })
        }
    </div>
  )
}

export default Filter
