import React from 'react';
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'

export default function Rating({rating, onClick ,style}) {
  return (
    <div style={{...style}}>
        {
            [...Array(5)].map((_, index)=>{
                return(
                    <span key={index} onClick={()=>onClick(index)}>
                        {
                            rating>index ?(<AiFillStar />) :(<AiOutlineStar />)
                        }
                    </span>
                )
            })
        }
    </div>
  )
}
