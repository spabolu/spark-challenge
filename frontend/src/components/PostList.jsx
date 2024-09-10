'use client';
// src/components/PostList.jsx
import { useEffect, useState } from 'react';

const PostList = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch feedback data when the component mounts
    const fetchFeedbacks = async () => {
      try {
        const res = await fetch('api/posts');
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        setFeedbacks(data);
      } catch (error) {
        console.error('Error fetching feedbacks:', error);
        setError('Failed to load feedbacks.');
      }
    };

    fetchFeedbacks();
  }, []);

  return (
    <div>
      <h1>Feedbacks</h1>
      {error && <p>{error}</p>}
      <ul>
        {feedbacks.map((feedback, index) => (
          <li key={index}>{feedback.feedback}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
