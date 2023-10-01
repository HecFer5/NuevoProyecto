import './App.css'
import { Route, Routes } from 'react-router-dom'
import CompShowBlogs from './blog/ShowBlog'
import CompCreateBlog from './blog/CreateBlogs'
import CompEditBlog from './blog/EditBlog'
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {


  return (
    <div className="App">
     
      <Routes>
        
        <Route path='/' element={<CompShowBlogs />} />
        <Route path='/create' element={<CompCreateBlog />} />
        <Route path='/edit/:id' element={<CompEditBlog />} />
      </Routes>

    </div>
  )
}

export default App
