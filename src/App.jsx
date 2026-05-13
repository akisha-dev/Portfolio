import {Routes, Route } from "react-router-dom";
import{Home} from './pages/home'
import{Projects} from './pages/projects'
import{Contact} from './pages/contact'
import{About} from './pages/about'
import { useState } from "react"
import { BootScreen } from "./components/BootScreen"




function App(){
    const [booted, setBooted] = useState(() => {
        return sessionStorage.getItem('booted') === 'true'
    })

    if (!booted) return (
        <BootScreen onComplete={() => {
            sessionStorage.setItem('booted', 'true')
            setBooted(true)
        }} />
    )
        return (
    <Routes>
      <Route index
      element={<Home/>}>
      </Route>
       <Route path="about"
      element={<About/>}>
      </Route>
       <Route path="Projects"
      element={<Projects/>}>
      </Route>
       <Route path="Contact"
      element={<Contact/>}>
      </Route>

    </Routes>
    
  )
}
export default App