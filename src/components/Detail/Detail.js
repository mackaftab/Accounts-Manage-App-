import React, { useState } from 'react';
import './Detail.css'
import { Link } from 'react-router-dom';

const Detail = () => {
  // Initial user details state
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    // Add more details as needed
  });

  // State for form fields
  const [formFields, setFormFields] = useState({
    firstName: '',
    lastName: '',
    email: '',
    // Add more fields as needed
  });

  // Function to handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  // Function to handle form submission (update user details)
  const handleUpdateDetails = (e) => {
    e.preventDefault();
    // Update user details with formFields
    setUserDetails({ ...userDetails, ...formFields });
    // You may want to send an API request to update the details on the server
    // For simplicity, we're updating the state directly in this example
  };

  return (
    <div className='detail'>
      <h1>User Account Details</h1>
      <div>
        <h2>Current Details</h2>
        <p>First Name: {userDetails.firstName}</p>
        <p>Last Name: {userDetails.lastName}</p>
        <p>Email: {userDetails.email}</p>
        {/* Display more details as needed */}
      </div>
      <form onSubmit={handleUpdateDetails}>
        <h2>Update Details</h2>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formFields.firstName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formFields.lastName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formFields.email}
            onChange={handleInputChange}
          />
        </label>
        <br />
        {/* Add more input fields for other details as needed */}
        <br />
        <button className="btn btn-outline-primary" type="submit">Update Details</button>
      </form>
      <br /><br />
      <Link to={'/'}>
      <button className="btn btn-outline-success" style={{width:"80%"}}>Back Home</button>
      </Link>
    </div>
  );
};

export default Detail;
