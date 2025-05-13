import React from "react";

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <h1>Dashboard</h1>
            <div className="dashboard-content">
                {/* Overview Section */}
                <section className="stats">
                    <h2>Overview</h2>
                    <p>Key statistics and data can go here.</p>
                    <div className="overview-stats">
                        <p><strong>Total Appointments:</strong> 25</p>
                        <p><strong>Total Doctors:</strong> 10</p>
                        <p><strong>Pending Requests:</strong> 3</p>
                    </div>
                </section>

                {/* Recent Activity Section */}
                <section className="recent-activity">
                    <h2>Recent Activity</h2>
                    <ul>
                        <li>Booked an appointment with Dr. Smith on 12 May 2025</li>
                        <li>Updated profile details on 10 May 2025</li>
                        <li>Requested a consultation with Dr. Johnson on 8 May 2025</li>
                    </ul>
                </section>

                {/* User Information Section */}
                <section className="user-info">
                    <h2>User Information</h2>
                    <p>Name: John Doe</p>
                    <p>Email: john.doe@example.com</p>
                    <p>Membership Status: Active</p>
                </section>
            </div>
        </div>
    );
};

export default Dashboard;
