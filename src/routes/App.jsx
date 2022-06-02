import { Routes, Route } from 'react-router-dom';
import Home from '@pages/Home'
import Projects from '@pages/Projects';
import HomeLoans from '@pages/HomeLoans';
import AboutUs from '@pages/AboutUs';
import WorkWithUs from '@pages/WorkWithUs';
import Contact from '@pages/Contact';
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
          <Route exact path='/home-loans' element={<HomeLoans/>} />
          <Route exact path='/about-us' element={<AboutUs/>} />
          <Route exact path='/work-with-us' element={<WorkWithUs/>} />
          <Route exact path='/contact' element={<Contact/>} />
        </Routes>
      </Layout>
  )
}

export default App