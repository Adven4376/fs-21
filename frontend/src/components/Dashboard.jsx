/*import React, { useEffect, useState } from 'react';
import './Dashboard.css';

function Dashboard() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/') // Adjust URL as per your backend API
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        return response.json();
      })
      .then(data => setUserData(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {userData && (
        <div>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          {/* Render other user data as needed */
//         </div>
//       )}
//     </div>
//   );
// }

// export default Dashboard; */

import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <h2>Dashboard</h2>
            <nav>
                <ul>
                    <li>
                        <Link to="/lectures">Lectures</Link>
                    </li>
                    <li>
                        <Link to="/progress">Progress</Link>
                    </li>
                    <li>
                        <Link to="/assignments">Assignments</Link>
                    </li>
                    <li>
                        <Link to="/login">Sign Out</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Dashboard;

