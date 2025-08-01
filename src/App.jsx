
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import { Outlet } from 'react-router-dom'
import { Spin } from 'antd';
import { useContext, useEffect } from 'react';
import { AuthContext } from './components/context/auth.context';
import { getAccountAPI } from './services/api.service';


const App = () => {
  const { setUser, isAppLoading } = useContext(AuthContext);

  useEffect(() => {
    fetchUserInfo();
  }, [])


  const delay = (milSeconds) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, milSeconds)
    })
  }

  const fetchUserInfo = async () => {
    const res = await getAccountAPI();
    await delay(3000)
    if (res.data) {
      //success
      setUser(res.data.user)
      console.log("check user data : ", res.data)
    }
  }

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
