
import React, { useEffect, useState } from 'react';

function Dashboard() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetch('https://smart-feedback-server.onrender.com/feedbacks')
      .then(res => res.json())
      .then(data => setFeedbacks(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Feedback Dashboard</h2>
      {feedbacks.map((fb, idx) => (
        <div key={idx}>
          <p><strong>Feedback:</strong> {fb.text}</p>
          <p><strong>Sentiment:</strong> {fb.sentiment}</p>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
    