import React from 'react'

const Form = () => {
  return (
    <div className='Form'>
        <h3>Contact Me</h3>
        <form className="form-container">
            <div className="f-name">
                <h3>Name</h3>
                <input type="text" className="firstName" placeholder='First Name'/>
            </div>
            <div className="e-mail">
                <h3>Email</h3>
                <input type="text" className="email" placeholder='email'/>
            </div>
            <div className="message">
                <h3>Message</h3>
                <textarea name="textarea" id="" cols="30" rows="10"></textarea>
            </div>
            <button className="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form;