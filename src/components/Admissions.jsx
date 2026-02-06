import React from 'react';

const Admissions = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Application Submitted! (Demo)');
    };

    return (
        <div className="container page-content">
            <h1>Admissions</h1>
            <div className="admissions-layout">
                <div className="admissions-info">
                    <section>
                        <h2>Admission Process</h2>
                        <ol>
                            <li>Submit the online application form.</li>
                            <li>Schedule an entrance test/interview.</li>
                            <li>Review fees structure and submit documents.</li>
                            <li>Confirm admission with fee payment.</li>
                        </ol>
                    </section>
                    <section>
                        <h2>Fee Structure</h2>
                        <table className="fee-table">
                            <thead>
                                <tr>
                                    <th>Grade</th>
                                    <th>Annual Fee</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Kindergarten</td>
                                    <td>Rs. ----</td>
                                </tr>
                                <tr>
                                    <td>Grades 1-5</td>
                                    <td>Rs.-----</td>
                                </tr>
                                <tr>
                                    <td>Grades 6-10</td>
                                    <td>Rs. ----</td>
                                </tr>
                                <tr>
                                    <td>Grades 11-12</td>
                                    <td>Rs. ----</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                </div>
                <div className="admissions-form-container glass">
                    <h2>Apply Now</h2>
                    <form className="admissions-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Student Name</label>
                            <input type="text" id="name" required placeholder="Enter student's full name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="grade">Grade Applying For</label>
                            <select id="grade">
                                <option>Kindergarten</option>
                                <option>Grade 1</option>
                                <option>Grade 6</option>
                                <option>Grade 9</option>
                                <option>Grade 11</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="parent">Parent/Guardian Name</label>
                            <input type="text" id="parent" required placeholder="Enter parent's name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" required placeholder="For correspondence" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="tel" id="phone" required placeholder="Enter phone number" />
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Submit Application</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Admissions;
