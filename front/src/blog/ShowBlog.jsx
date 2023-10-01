import { useEffect, useState } from "react"
import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const URI = 'http://localhost:8000/blogs/'

const CompShowBlogs = () => {
 const [blogs, setBlogs] = useState([])

 useEffect(() =>{
    getBlogs()
 }, [])

////para mostrar todos
const getBlogs = async () =>{
   const res = await axios.get(URI)
   setBlogs(res.data)

}
// ELIMINAR

const deleteBlogs = async (id) =>{
   const del = await axios.delete(`${URI}${id}`)
   getBlogs()
   

}

return(<>

<div className="container">
   <div className="row">
      <div className="col">
         <Link to = '/create' className="btn btn-primary mt-2 mb-5">Crear nuevo</Link>
         <table className="table">
            <thead className="table-primary">
               <tr>
                  <th>Nombre Común</th>
                  <th>Nombre Científico</th>
                  <th>Acciones</th>
               </tr>
            </thead>
            <tbody>
               {blogs.map((blog)=> (
                  <tr key= {blog.id}>
                     <td>{blog.title}</td>
                     <td>{blog.content}</td>
                     <td>
                        <Link to= {`/edit/${blog.id}`} className="btn btn-info"> <i className="fas fa-edit"></i></Link>
                        <button className="btn- btn-danger" onClick={()=>{deleteBlogs(blog.id)}}><i className="fas fa-trash-alt"></i></button>
                     </td>
                  </tr>
               ))

               }
            </tbody>
         </table>
      </div>
   </div>
   <Link to= {`/`} className="btn btn-info"> Volver al principio</Link>

</div>
</>
)
}







export default CompShowBlogs