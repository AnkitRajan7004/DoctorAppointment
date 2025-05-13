import React from "react";

const Dashboard = () => {
    return (
        <div className="dashboard-container p-6">
            <h1 className="text-3xl font-bold text-center mb-6">Dashboard</h1>
            <div className="dashboard-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <section className="stats bg-gray-100 p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold">Overview</h2>
                    <p className="text-gray-700">Key statistics and data can go here.</p>
                </section>
                <section className="recent-activity bg-gray-100 p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold">Recent Activity</h2>
                    <p className="text-gray-700">Display recent logs, notifications, or updates here.</p>
                </section>
                <section className="user-info bg-gray-100 p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold">User Information</h2>
                    <p className="text-gray-700">Details about the user can go here.</p>
                </section>
            </div>
        </div>
    );
};

export default Dashboard;
