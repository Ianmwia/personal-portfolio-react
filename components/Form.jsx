import { useState } from "react";

function Form() {
    const [formData, setFormData] = useState({name:'', email:'', message: ''})
    
    // event handler
    function handleChange(e){
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    //handle submition
    function handleSubmit(e){
        e.preventDefault()
        setFormData({name:'', email: '', message: ''})

    }
    return(
        <>
        <div className="p-2 border rounded">
            <h2 className="font-bold mb-6">Sign Up</h2>
                <form onSubmit={handleSubmit} className='m-5 p-2 rounded-lg'>
                    <input className='block text-gray-700 mb-2 border rounded' type="text" name='fname' required placeholder="First Name" value={formData.name} onChange={handleChange}/><br />
                    <input className='block text-gray-700 mb-2 border rounded' type="email" name='email' required placeholder="Email" value={formData.email} onChange={handleChange}/> <br />
                    <input className='block text-gray-700 mb-2 border rounded' type="textarea" name='textarea' required placeholder="Write A message" value={formData.message} onChange={handleChange}/> <br />
                    <button className='bg-gray-700 text-white rounded-md p-2'type="submit">Sign Up</button>
                </form>
        </div>
        </>
    )
}
export default Form