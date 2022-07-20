import './App.css'
import { Routes, Route } from 'react-router-dom'
import About from './page/About'
import BookCart from './components/BookCart'
import Error404 from './page/Error404'
import GeneralCart from './components/GeneralCart'

function App() {
  return (
    <div className="1">
      <div className="App">
        <Routes>
          <Route path="/" element={<BookCart />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Error404 />} />
          <Route path="generalCart" element={<GeneralCart />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
