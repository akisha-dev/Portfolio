import {Routes, Route } from "react-router-dom";
import{Home} from './pages/home'
import{Projects} from './pages/projects'
import{Contact} from './pages/contact'
import{About} from './pages/about'



function App(){
  return(
    <Routes>
      <Route index
      element={<Home/>}>
      </Route>
       <Route path="about"
      element={<About/>}>
      </Route>
       <Route path="projects"
      element={<Projects/>}>
      </Route>
       <Route path="contact"
      element={<Contact/>}>
      </Route>

    </Routes>
  )
}
export default App