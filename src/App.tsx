import { lazy, useEffect } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { themeChange } from 'theme-change';
import { useAuthStore } from './stores/auth-store';

const Login = lazy(() => import('./pages/Login'))
const ForgotPasswod = lazy(() => import('./pages/ForgotPassword'))
const Layout = lazy(() => import('./containers/Layout'))

function App() {
  const authStatus = useAuthStore(state => state.status);
  useEffect(() => {
    themeChange(false)
  }, [])

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPasswod />} />
          <Route path="/app/*" element={<Layout />} />
          <Route path="*" element={<Navigate to={authStatus == 'authorized' ? "/app" : "/login"} replace />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
