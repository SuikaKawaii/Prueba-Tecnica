import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../components/Login'
import Menu from '../components/Menu'
import { Register } from '../components/Register'
import SendtoFirebase from '../components/SendtoFirebase'
import { SpinnerI } from '../styled/RouteSpinerStyled'
import PrivateRoute from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

const AppRoutes = () => {
  const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {

        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            if(user?.uid){
                setIsLoggedIn(true)
            }else{
                setIsLoggedIn(false)
            }
            setChecking(false)
        })
    
    }, [])
    
    
    if(checking){
        return(
          <SpinnerI animation="border" variant="secondary" />
        )
    }

  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={
                  <PublicRoute isAuth={isLoggedIn}>
                    <Login/>
                  </PublicRoute>
                }/>
                <Route path='/menu' element={
                  <PrivateRoute isAuth={isLoggedIn}>
                    <Menu/>
                  </PrivateRoute>
                }/>
                <Route path='/register' element={
                  <PublicRoute isAuth={isLoggedIn}>
                    <Register/>
                  </PublicRoute>
                }/>
                {/* <Route path='/send' element={<SendtoFirebase/>}/> */}
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AppRoutes