import { Container } from 'react-bootstrap'
import { AuthProvider } from "./user-auth/contexts/AuthContexts";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import SignUp from "./user-auth/SignUp"
import LogIn from "./user-auth/LogIn"

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}>

      <div className='w-100' style={{ maxWidth: "400px" }}>
        HEY COACH
        <Router>
          <AuthProvider>
            <Routes>
              <Route exact path='/' element={<Dashboard />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/login' element={<LogIn />} />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App;