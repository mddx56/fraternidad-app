import { lazy, useEffect } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { themeChange } from 'theme-change'

//import checkAuth from './app/auth';
//import initializeApp from './app/init';

// Importing pages
const Login = lazy(() => import('./pages/Login'))
const Layout = lazy(() => import('./containers/Layout'))


// Initializing different libraries
//initializeApp()


// Check for login and initialize axios
//const token = checkAuth()


function App() {

  useEffect(() => {
    // 👆 daisy UI themes initialization
    themeChange(false)
  }, [])


  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/app/*" element={<Layout />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
