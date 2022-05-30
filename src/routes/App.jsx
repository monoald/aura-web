import { Routes, Route } from 'react-router-dom';
import Home from '@pages/Home'
import Projects from '@pages/Projects';
import Layout from '@containers/Layout';
import '@styles/Global.css'
import useDetectSectionPage from '@hooks/useDetectSectionPage';

const App = () => {
  
  useDetectSectionPage()

  return (
      <Layout>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/projects' element={<Projects/>} />
        </Routes>
      </Layout>
  )
}

export default App