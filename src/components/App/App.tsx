import Navbar from '../Navbar/Navbar'
import About from '../Page1/About'
import Todos from '../Page2/Todos'
import Contacts from '../Page3/Contacts'
import { Routes, Route } from 'react-router-dom'
import NotFound from '../NotFound/NotFound'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/todos' element={<Todos />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
