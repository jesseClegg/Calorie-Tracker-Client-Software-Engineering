import { Container } from 'react-bootstrap'
import { AuthProvider } from "./user-auth/contexts/AuthContexts";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Landing from './Landing'
import Dashboard from './Dashboard'
import SignUp from "./user-auth/SignUp"
import LogIn from "./user-auth/LogIn"

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