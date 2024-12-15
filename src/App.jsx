'use client'
import { BrowserRouter,Routes,Route } from 'react-router'
import Home from './pages/Home'
import Event from './pages/Event'
import Team from './pages/Team'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/events" element={<Event/>} />
        <Route path="/team" element={<Team/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
