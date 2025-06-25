const API_BASE_URL = 'http://localhost:3000/auth';

export const register = async (email, password) => {
    const response = await fetch(`${API_BASE_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });
    if (!response.ok) {
        throw new Error('Registration failed');
    }
    return response.json();
};

export const login = async (email, password) => {
    const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });
    if (!response.ok) {
        throw new Error('Login failed');
    }
    return response.json();
};

export const logout = async () => {
    await fetch(`${API_BASE_URL}/logout`, { method: 'POST', credentials: 'include' });
};

export const forgotPassword = async (email) => {
    const response = await fetch(`${API_BASE_URL}/forgot-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
    });
    if (!response.ok) {
        throw new Error('Failed to send reset email');
    }
    return response.json();
};

export const verifyEmail = async (token) => {
    const response = await fetch(`${API_BASE_URL}/verify-email/${token}`);
    if (!response.ok) {
        throw new Error('Email verification failed');
    }
    return response.json();
};

export const googleLogin = () => {
    window.location.href = `${API_BASE_URL}/google`;
};
