import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@pages/Home'
import Projects from '@pages/Projects';
import Layout from '@containers/Layout';
import '@styles/Global.css'

const App = () => {
  return (
    // <>
    //   <Home />
    // </>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/projects' element={<Projects/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App