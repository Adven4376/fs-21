import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [course, setCourse] = useState('Select Course');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:8000/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                    course,
                }),
            });
            if (response.ok) {
                setSuccess('Registration successful! Redirecting to dashboard...');
                setError('');
                setTimeout(() => navigate('/dashboard'), 2000); // Redirect to dashboard after 2 seconds
            } else {
                const data = await response.json();
                setError(data.error || 'Registration failed');
                setSuccess('');
            }
        } catch (err) {
            setError('Registration failed');
            setSuccess('');
        }
    };

    return (
        <div className="container">
            <h2>Register</h2>
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <label htmlFor="course">Course</label>
                <select
                    id="course"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                >
                    <option value="Python">Python</option>
                    <option value="C">C</option>
                    <option value="Java">Java</option>
                    <option value="JavaScript">JavaScript</option>
                </select>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
