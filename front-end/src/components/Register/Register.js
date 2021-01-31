import React, {useState} from 'react';
import { useAuth, AuthProvider } from '../../contexts/AuthContext';
import './Register.css';

const Register = (props) => {
    const [_username, setUsername] = useState('');
    const [_email, setEmail] = useState('');
    const [_password, setPassword] = useState('');
    const [error, setError] = useState('');
    cosnt [loading, setLoading] = useState(false);
    const { register } = useAuth();

    const onUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const onEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const onPasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleRegister = async (event) => {
        event.preventDefault();

        try {
            setError('');
            setLoading(true);
            await register(_email, _password);
        } catch (err) {
            setError('Failed to create an account');
        }
        setLoading(false);

        /*try {
            const response = await fetch('http://localhost:5000/register', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    username: _username,
                    email: _email,
                    password: _password,
                })
            });

            if (response.ok) {
                console.log("User registered successfully");
                props.onRouteChange('signin');
            } else {
                console.log('Email entered already exists');   
                setUsername('');
                setEmail('');
                setPassword('');
            }
        } catch (err) {
            console.log(err);
            console.log('An error occurred registering');
            setUsername('');
            setEmail('');
            setPassword('');
        }*/
    }

    return (
        <AuthProvider>
            <div class="register">
                <div class="register-form-container">
                    <div class="register-form-card">
                        <h1>Create An Account</h1>
                        <form>
                            <div className="register-form-body">
                                <input
                                    type="text"
                                    placeholder="Enter a username" 
                                    value={_username}
                                    name="username"
                                    required
                                    className="register-form-input"
                                    onChange={onUsernameChange}
                                />
                                <input
                                    type="email"
                                    placeholder="Enter an email"
                                    value={_email}
                                    name="email"
                                    required
                                    className="register-form-input"
                                    onChange={onEmailChange}
                                />
                                <input
                                    type="password"
                                    placeholder="Enter a Password"
                                    value={_password}
                                    name="password"
                                    required
                                    className="register-form-input"
                                    onChange={onPasswordChange}
                                />
                                <button
                                    variant="primary"
                                    type="submit"
                                    className="register-form-button"
                                    onClick={handleRegister}
                                    disabled={loading}
                                >
                                    Create Account
                                </button>
                                <p
                                    className="signin-link"
                                    onClick={() => props.onRouteChange('signin')}
                                >
                                    Already have an account? Sign In
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="info-container">
                    
                </div>
            </div>
        </AuthProvider>
    );
}

export default Register;