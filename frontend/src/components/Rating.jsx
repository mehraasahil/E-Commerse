import React from 'react'

function Rating({value,text,color}) {
  return (
    <div className='rating'>    {/* Taking data as props from product.jsx value,text,color  and css added in index.css*/}
        <span>
            <i style={{color}} className={
                value>=1
                ? 'fas fa-star'
                : value >= 0.5
                ?'fas fa-star-half-alt'
                :  'far fa-star'
            }>
                
            </i>
        </span>
        <span>
            <i style={{color}} className={
                value>=2
                ? 'fas fa-star'
                : value >= 0.5
                ?'fas fa-star-half-alt'
                :  'far fa-star'
            }>
                
            </i>
        </span>
        <span>
            <i style={{color}} className={
                value>=3
                ? 'fas fa-star'
                : value >= 0.5
                ?'fas fa-star-half-alt'
                :  'far fa-star'
            }>
                
            </i>
        </span>
        <span>
            <i style={{color}} className={
                value>=4
                ? 'fas fa-star'
                : value >= 0.5
                ?'fas fa-star-half-alt'
                :  'far fa-star'
            }>
                
            </i>
        </span>
        <span>
            <i style={{color}} className={
                value>=5
                ? 'fas fa-star'
                : value >= 0.5
                ?'fas fa-star-half-alt'
                :  'far fa-star'
            }>
                
            </i>
        </span>
      <span>{text && text}</span>  {/* if the reviewmean text exist save in text other show empty*/}
    </div>
  )
}

export default Rating
