import { lazy, useEffect } from 'react';
import './App.css';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { themeChange } from 'theme-change';
import checkAuth from './app/auth';

const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))
const Layout = lazy(() => import('./containers/Layout'))

const token = checkAuth();

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
          <Route path="/signup" element={<Register />} />
          <Route path="/app/*" element={<Layout />} />
          <Route path="*" element={<Navigate to={token ? "/app/calendar" : "/login"} replace />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
