import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'; // Form state management

export default function Contact() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm(); 

  const onSubmit = (data) => {
    console.log('Submitted Contact Form Data:', data);
    // Redirects user back to Home Page on submission
    navigate('/');
  };

  return (
    <div className="page-container contact-page">
      <h2>Contact Me</h2>

      {/* Actual Contact Panel Information */}
      <div className="contact-panel">
        <p><strong>Location:</strong> Hamilton, ON</p>
        <p><strong>Phone:</strong> (226) 552-3542</p>
        <p><strong>Email:</strong> kjames50@my.centennialcollege.ca</p>
        <p><strong>LinkedIn:</strong> linkedin.com/in/kaelyn-james</p>
      </div>

      {/* Interactive Contact Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
        <div className="form-group">
          <label>First Name:</label>
          <input {...register("firstName", { required: true })} />
          {errors.firstName && <span className="error">First Name is required</span>}
        </div>

        <div className="form-group">
          <label>Last Name:</label>
          <input {...register("lastName", { required: true })} />
          {errors.lastName && <span className="error">Last Name is required</span>}
        </div>

        <div className="form-group">
          <label>Contact Number:</label>
          <input type="tel" {...register("contactNumber", { required: true })} />
          {errors.contactNumber && <span className="error">Contact number is required</span>}
        </div>

        <div className="form-group">
          <label>Email Address:</label>
          <input type="email" {...register("email", { required: true })} />
          {errors.email && <span className="error">Valid email address is required</span>}
        </div>

        <div className="form-group">
          <label>Message:</label>
          <textarea {...register("message", { required: true })} />
          {errors.message && <span className="error">Message is required</span>}
        </div>

        <button type="submit" className="btn">Send Message</button>
      </form>
    </div>
  );
}