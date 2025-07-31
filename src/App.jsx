
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import { Outlet } from 'react-router-dom'
import { Spin } from 'antd';
import { useContext } from 'react';
import { AuthContext } from './components/context/auth.context';


const App = () => {
  const { setUser, isAppLoading } = useContext(AuthContext);



  return (
    <>
      {isAppLoading === true ?
        <Spin />
        :
        <>
          <Header />
          <Outlet />
          <Footer />
        </>

      }


    </>
  )
}

export default App
