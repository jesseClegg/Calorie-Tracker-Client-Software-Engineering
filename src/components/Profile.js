import React from 'react'
import { useAuth } from '../user-auth/contexts/AuthContexts'

export default function Profile() {

    const { currentUser } = useAuth();
    return (
        <>
            <div>Profile page yo</div>
            <h3>Welcome {currentUser.email}</h3>
        </>
    )
}
