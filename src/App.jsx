import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Greetings from './pages/Greetings'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Greetings />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
