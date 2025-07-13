import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import HeroPage from './components/HeroPage.jsx'
import DetailPage from './components/DetailPage.jsx'

function App() {
  return (
    <Router>
      <div className='container'>
        <Routes>
          <Route path="/" element={<HeroPage />} />
          <Route path="/detail/:color" element={<DetailPage />} />
          <Route path="/detail" element={<Navigate to="/detail/green" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
