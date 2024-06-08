import { lazy, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { themeChange } from 'theme-change';
import checkAuth from './stores/auth';

const Login = lazy(() => import('./pages/Login'))
const Layout = lazy(() => import('./containers/Layout'))

const token = checkAuth();

function App() {
  useEffect(() => {
    themeChange(false)
  }, [])

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/app/*" element={<Layout />} />
          <Route path="*" element={<Navigate to={token ? "/app" : "/login"} replace />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
