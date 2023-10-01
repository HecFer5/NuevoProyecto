import axios from 'axios'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const URI = 'http://localhost:8000/blogs/'

const CompCreateBlog = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const navigate = useNavigate()    
    
    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {title: title, content:content})
        navigate('/muestra')
    }   

    return (
        <div>
           <h3>Ingresar nuevo registro</h3>
           <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Title</label>
                    <input
                        value={title}
                        onChange={ (e)=> setTitle(e.target.value)} 
                        type="text"
                        className='form-control'
                    />
                 </div>   
                 <div className='mb-3'>
                     <label className='form-label'>Title</label>
                    <textarea
                        value={content}
                        onChange={ (e)=> setContent(e.target.value)} 
                        type="text"
                        className='form-control'
                    />                 
                 </div>  
                 <button type='submit' className='btn btn-primary'>Store</button>                  
           </form>
           <hr />
    <Link to= {'/'} className="btn btn-info"> Volver al principio</Link>

        </div>
    )
}

export default CompCreateBlog