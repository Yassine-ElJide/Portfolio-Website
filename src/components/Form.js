import React from 'react'

export const Form = () => {
  return (
    <form className="form">
      <div className="form-control">
        <label>Full Name*</label>
        <input type="text"/>
      </div>
      <div className="form-control">
        <label>Email*</label>
        <input type="email"/>
      </div>
      <div className="form-control">
        <label>Subject</label>
        <input type="text"/>
      </div>
      <div className="form-control">
        <label>message*</label>
        <textarea></textarea>
      </div>
    </form>
  )
}
