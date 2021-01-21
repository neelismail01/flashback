import React, {useState} from 'react';
import './Signin.css';

const Signin = (props) => {
    const [_username, setUsername] = useState('');
    const [_password, setPassword] = useState('');

    const onUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const onPasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSignin = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/signin', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    username: _username,
                    password: _password,
                })
            });

            if (response.ok) {
                const json = await response.json();
                props.onRouteChange('home');
                props.onSuccessfulSignIn(json.username);
                console.log('User successfully signed in');
            } else {
                console.log('Unable to sign in user');
                setUsername('');
                setPassword('');
            }
        } catch (err) {
            console.log('An error occurred signing in');
            console.log(err);
            setUsername('');
            setPassword('');
        }
    }

    return (
        <div class="signin-form-container">
            <div class="signin-form-card">
                <h1>Welcome Back</h1>
                <form>
                    <div className="signin-form-body">
                        <input
                            type="text"
                            placeholder="Username"
                            value={_username}
                            name="username"
                            required
                            className="signin-form-input"
                            onChange={onUsernameChange}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={_password}
                            name="password"
                            required
                            className="signin-form-input"
                            onChange={onPasswordChange}
                        />
                        <button
                            variant="primary"
                            type="submit"
                            className="signin-form-button"
                            onClick={handleSignin}
                        >
                            Sign In
                        </button>
                        <p
                            className="register-link"
                            onClick={() => props.onRouteChange('register')}
                        >
                            Don't have an account? Sign up
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signin;