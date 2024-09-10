import React from 'react';
import Card from '@/components/Card';

const userFeedback = [
  {
    username: 'High-Usage of Water in the Morceni Mines',
    message:
      'Labore deserunt occaecat Lorem pariatur exercitation. Ex aliqua esse voluptate ut occaecat cupidatat ea sint esse et.',
    upvote: 44,
    downvote: 9,
  },
  {
    username: 'Pollution In My Reservation From Leakages of Mining Tailings',
    message:
      'Exercitation sunt veniam fugiat incididunt irure dolore proident elit dolor exercitation exercitation cillum veniam ipsum.',
    upvote: 28,
    downvote: 3,
  },
  {
    username: 'Pollution In My Reservation From Leakages of Mining Tailings',
    message:
      'Exercitation sunt veniam fugiat incididunt irure dolore proident elit dolor exercitation exercitation cillum veniam ipsum.',
    upvote: 28,
    downvote: 3,
  },
  {
    username: 'Pollution In My Reservation From Leakages of Mining Tailings',
    message:
      'Exercitation sunt veniam fugiat incididunt irure dolore proident elit dolor exercitation exercitation cillum veniam ipsum.',
    upvote: 28,
    downvote: 3,
  },
  {
    username: 'Pollution In My Reservation From Leakages of Mining Tailings',
    message:
      'Exercitation sunt veniam fugiat incididunt irure dolore proident elit dolor exercitation exercitation cillum veniam ipsum.',
    upvote: 28,
    downvote: 3,
  },
  {
    username: 'Pollution In My Reservation From Leakages of Mining Tailings',
    message:
      'Exercitation sunt veniam fugiat incididunt irure dolore proident elit dolor exercitation exercitation cillum veniam ipsum.',
    upvote: 28,
    downvote: 3,
  },

  // Add more items if needed
];

export default function Solutions() {
  return (
    <>
      <h3 className="text-3xl font-semibold py-6">Top Solutions This Week</h3>
      <div className="w-full max-w-screen-xl overflow-x-auto">
        <div className="flex space-x-4">
          {userFeedback.map((comment, index) => (
            <Card
              key={index}
              username={comment.username}
              message={comment.message}
              upvote={comment.upvote}
              downvote={comment.downvote}
              className="bg-neutral text-neutral-content" // Card specific styles
              showInput={false}
            />
          ))}
        </div>
      </div>
    </>
  );
}
