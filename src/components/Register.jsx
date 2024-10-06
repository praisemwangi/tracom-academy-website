import React, { useState } from 'react';
import './FormStyles.css'; 

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        dateOfBirth: ''
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const validateForm = () => {
        const newErrors = {};
        if (!formData.fullName) newErrors.fullName = "Full Name is required.";
        if (!formData.email) newErrors.email = "Email is required.";
        if (!formData.password) newErrors.password = "Password is required.";
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords must match.";
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors({});
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setLoading(true);
        // Simulate a form submission
        setTimeout(() => {
            alert('Registration Successful!');
            setLoading(false);
            setFormData({
                fullName: '',
                email: '',
                password: '',
                confirmPassword: '',
                phoneNumber: '',
                dateOfBirth: ''
            });
        }, 2000);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <h2>Register</h2>
            <div>
                <label htmlFor="fullName">Full Name:</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
                {errors.fullName && <span className="error">{errors.fullName}</span>}
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
                {errors.password && <span className="error">{errors.password}</span>}
            </div>
            <div>
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
                {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
            </div>
            <div>
                <label htmlFor="phoneNumber">Phone Number (optional):</label>
                <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="dateOfBirth">Date of Birth (optional):</label>
                <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
            </div>
            <button type="submit" disabled={loading}>
                {loading ? "Registering..." : "Register"}
            </button>
        </form>
    );
};

export default RegistrationForm;
