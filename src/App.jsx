import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
import Login from "./View/Login"
import Questions from "./View/Questions"
import Timer from "./View/Timer"

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/questions" element={<Questions/>} ></Route>
        <Route path="/timer" element={<Timer/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
