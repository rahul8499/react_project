import './App.css'
import Navbar from './components/Navbar'
import Formtext from './components/Formtext'
import About from './components/About'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  // props  function
  //  const func = ()=>{
  //   console.log("hello rahul")
  //  }
  return (
    <>
      {/* routes******** */}
      <Router>
        <Navbar title="Text Converter" />
        <Routes>
          <Route path="/" element={<Formtext  heading="TextConverter Website" />}></Route>
          <Route path="/About" element={<About />}></Route>
        </Routes>
      </Router>

      {/* <Navbar title="Text Converter" />
  <div className="container">

  <Formtext heading="TextConverter Website" />
  </div>      */}
    </>
  )
}

export default App
