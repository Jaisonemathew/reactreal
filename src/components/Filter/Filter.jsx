import React from 'react'

function Filter() {
  return (
    <div className='filter'>
    <h1>Search results for<b>London</b></h1>
    <div className="top">
      <div className='item'>
    <label htmlFor='city'>Location</label>
    <input type="text" id="city" name="city" placeholder='City Location'/>

      </div>
    

    </div>
    </div>
  )
}

export default Filter