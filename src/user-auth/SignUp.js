import React, { useRef, useState } from 'react'
import { Alert, Form, Button, Card, Container } from 'react-bootstrap'
import { useAuth } from './contexts/AuthContexts'
import { Link, useNavigate } from 'react-router-dom'

export default function SignUp() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmationRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
            return setError('Passwords do not match')
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            navigate('/dash')
        } catch {
            setError('Failed to create an account')
        }
        setLoading(false)
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3">
                <div className="container">

                    <Link className='navbar-brand text-primary' to='/'>Hey Coach</Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navmenu">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className='nav-link' to='/signup'>Sign Up</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link text-info' to='/login'>Log In</Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>

            <section className='bg-dark py-5'>
                <Container className='mt-5' style={{ maxWidth: "600px" }}>
                    <Card>
                        <Card.Body>
                            <h2 className='text-center mb-4'>Sign Up</h2>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id='email'>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type='email' ref={emailRef} required></Form.Control>
                                </Form.Group>
                                <Form.Group id='password'>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type='password' ref={passwordRef} required></Form.Control>
                                </Form.Group>
                                <Form.Group id='password-confirm'>
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type='password' ref={passwordConfirmationRef} required></Form.Control>
                                </Form.Group>
                                <Button disabled={loading} className='w-100 mt-2' type='submit'>
                                    Sign Up
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                    <div className='w-100 text-center mt-2 text-light'>
                        Already have an account? <Link to='/login'>Log In</Link>
                    </div>
                </Container>
            </section>

            <section className="bg-dark text-secondary pb-5">
                <div className="container">
                    <div className="row py-3">
                        <div className="col-3">
                            <h5>Works Cited</h5>
                        </div>
                        <div className="col-3">
                            <h5>More Resources</h5>
                        </div>
                        <div className="col-3">
                            <h5>Tools</h5>
                        </div>
                        <div className="col-3">
                            <h5>Legal</h5>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}