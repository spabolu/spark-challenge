// src/components/FeedbackPage.jsx
'use client';

import { useEffect, useState } from 'react';
import ArticleCards from './ArticleCards';

const ArticlePage = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch('/api/postsArticles'); 
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        setArticles(data);
      } catch (error) {
        console.error('Error fetching feedbacks:', error);
        setError('Failed to load feedbacks.');
      }
    };
    fetchArticles();
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      <ArticleCards articleData={articles} />
    </div>
  );
};

export default ArticlePage;
