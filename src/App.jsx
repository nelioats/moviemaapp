import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Projetos from './pages/Projetos'
import NotFound from './pages/NotFound'
import Master from './pages/components/Master'
import ProjetoDescricao from './pages/ProjetoDescricao'

function App() {
 
  return (
    <>
      <Routes>
        
        <Route element={<Master />}>
          <Route index element={<Home />} />
          <Route path='/projetos' element={<Projetos />} />
          <Route path='/projeto/:project_slug' element={<ProjetoDescricao />} />

          <Route path='*' element={<NotFound />} />
        </Route>

       
      </Routes>
    </>
  )
}

export default App
