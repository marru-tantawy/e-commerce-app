import React from 'react'

export default function MainorNav({locate ,MainText , MainCaption , icon , linear_from , linear_to } : {locate : string , MainText : string , MainCaption : string , icon : React.ReactNode , linear_from : string , linear_to : string}) {
  const linear_f = linear_from ;
  const linear_t = linear_to ; 
  
  return (
    <>
    <div className='h-[240px] w-full my-7 text-[white] '  style={{
        background: `linear-gradient(to bottom, ${linear_f}, ${linear_t})`,
      }}>
      <div className='mx-7 my-5 flex flex-col gap-3 justify-center'>
        <div className='my-5'>Home / {locate}</div>
        <div className='flex gap-2 items-center text-2xl'>
            <div className='rounded-sm p-2 text-3xl ' style={{backgroundColor : `${linear_t}`}}> 
                {icon}
            </div>
            <div className='flex flex-col gap-1' >
                <p>{MainText}</p>
                <span className='text-sm'>{MainCaption}</span>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}
