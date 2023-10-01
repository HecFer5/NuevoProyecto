import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'


const URI = 'http://localhost:8000/blogs/'

const CompEditBlog = () => {
  const [title, setNombre] = useState('')
  const [content, setCientifico] = useState('')
  const navigate = useNavigate()
  const {id} = useParams()

  const update = async (e) => {
    e.preventDefault()
    await axios.put(URI + id, { title: title, content: content })
    navigate('/muestra')
  }

  useEffect(() => {
    getBlogById()

  },[])

  const getBlogById = async ()=>{
    const res = await axios.get(URI+id)
    setNombre(res.data.title)
    setCientifico(res.data.content)
  }

  return (
    <div>
    <h3>editar</h3>
    <form onSubmit={update}>
         <div className='mb-3'>
             <label className='form-label'> Nombre común</label>
             <input
                 value={title}
                 onChange={ (e)=> setNombre(e.target.value)} 
                 type="text"
                 className='form-control'
             />
          </div>   
          <div className='mb-3'>
              <label className='form-label'>Nombre Científico</label>
             <textarea
                 value={content}
                 onChange={ (e)=> setCientifico(e.target.value)} 
                 type="text"
                 className='form-control'
             />                 
          </div>  
          <button type='submit' className='btn btn-primary'>Store</button>                  
    </form>
    <hr />
    <Link to= {`/`} className="btn btn-info"> Volver al principio</Link>

 </div>
  )
}

export default CompEditBlog