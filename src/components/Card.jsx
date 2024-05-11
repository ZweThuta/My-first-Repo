import React from 'react'

const Card = (props) => {
  return (
    <div className={`${props.css} bg`} > {props.children}
    </div>
  )
}

export default Card