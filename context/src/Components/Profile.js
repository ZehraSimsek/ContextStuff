import { useState } from 'react'

import {useUser} from '../Context/UserContext.js'

function Profile() {
    const { user, setUser } = useUser();

    const [loading, setLoading] = useState(false);

    const handleLogin = () => {
        setLoading(true);
        setTimeout(() => {
            setUser({
                id: 1,
                username: 'zsimsek',
                bio: 'lorem Ips incorrectly formatted'
            })
            setLoading(false);
        }, 1500);

    };

    const handleLogout = () => {
        setUser(null);
    };

    return (
        <>
            Profile
            <hr />
            {!user &&
                <button onClick={handleLogin}>{loading ? "Loading.." : "Login"}</button>
            }
            <br /><br />
            <code>{JSON.stringify(user)}</code>
            <br /><br />
            {user && <button onClick={handleLogout}>Log Out</button>}

        </>
    )
}

export default Profile