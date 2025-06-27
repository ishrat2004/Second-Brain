import { Landing } from "./components/ui/Landing"
import Dashboard from "./pages/Dashboard"
import { Signin } from "./pages/Signin"
import { Signup } from "./pages/Signup"
import { BrowserRouter ,Routes,Route } from "react-router-dom"
const App = () => { 
  return <div> 
      <BrowserRouter> 
         <Routes> 
           <Route path="/" element={<Landing/>}/>
           <Route path="/signup" element={<Signup state_function={()=>{}}/>}/>
           <Route path="/signin" element={<Signin/>}/> 
           <Route path="/dashboard" element={<Dashboard/>}/>
         </Routes>
      </BrowserRouter>
  </div>
}

export default App