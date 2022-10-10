import React, { useRef } from 'react'
import { Form, Button, Card, Container } from 'react-bootstrap'
import { useAuth } from './contexts/AuthContexts'

export default function SignUp() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmationRef = useRef()
    const { signup } = useAuth()

    function handleSubmit(e) {
        e.preventDefault()

        signup(emailRef.current.value, passwordRef.current.value)
    }

    return (
        <>
            <Container className='mt-5' style={{ maxWidth: "600px" }}>
                <Card>
                    <Card.Body>
                        <h2 className='text-center mb-4'>Sign Up</h2>
                        <Form>
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
                            <Button className='w-100 mt-2' type='submit'>Submit</Button>
                        </Form>
                    </Card.Body>
                </Card>
                <div className='w-100 text-center mt-2'>
                    Already have an account? Log In
                </div>
            </Container>
        </>
    )
}