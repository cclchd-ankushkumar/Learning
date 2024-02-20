import React from 'react'

const CommonButton = ({content,width,px,py,bg,color,radius}) => {
  return (
    <button className={`${width} px-${px} py-${py} ${bg} ${color} ${radius}`} >{content}</button>
  )
}

export default CommonButton;
