import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login"
import Todos from "./pages/Todos"

// function Home () {
//   return <h1>Home Component</h1>
// }
// function Login () {
//   return <h1>Login Component</h1>
// }

// function Todos () {
//   return <h1>Todos Component</h1>
// }


function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
