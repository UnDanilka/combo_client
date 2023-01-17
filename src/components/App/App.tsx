import Navbar from '../Navbar/Navbar'
import Main from '../Page1/Main'
import Todos from '../Page2/Todos'
import Contacts from '../Page3/Contacts'
import { Routes, Route } from 'react-router-dom'
import NotFound from '../NotFound/NotFound'

function App() {
  return (
    <div className='app'>
      <Navbar />
      <div className='app_pages'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/todos' element={<Todos />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
