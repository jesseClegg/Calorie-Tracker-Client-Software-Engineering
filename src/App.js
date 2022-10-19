import { Container } from 'react-bootstrap'
import { AuthProvider } from "./components/user-auth/contexts/AuthContexts";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import SignUp from "./pages/SignUp"
import LogIn from "./pages/LogIn"

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<LogIn />} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App;