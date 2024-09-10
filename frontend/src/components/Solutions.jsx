import React from "react";
import Card from "@/components/Card";

const userFeedback = [
  {
    username: 'Environmental Pollution',
    message:
      'Implement stricter environmental regulations and monitoring to prevent pollution, and invest in clean-up efforts to restore damaged ecosystems.',
    upvote: 44,
    downvote: 9,
  },
  {
    username: 'Environmental Pollution',
    message:
      'Implement stricter environmental regulations and monitoring to prevent pollution, and invest in clean-up efforts to restore damaged ecosystems.',
    upvote: 44,
    downvote: 9,
  },
  {
    username: 'Environmental Pollution',
    message:
      'Implement stricter environmental regulations and monitoring to prevent pollution, and invest in clean-up efforts to restore damaged ecosystems.',
    upvote: 44,
    downvote: 9,
  },
  {
    username: 'Environmental Pollution',
    message:
      'Implement stricter environmental regulations and monitoring to prevent pollution, and invest in clean-up efforts to restore damaged ecosystems.',
    upvote: 44,
    downvote: 9,
  },
  {
    username: 'Environmental Pollution',
    message:
      'Implement stricter environmental regulations and monitoring to prevent pollution, and invest in clean-up efforts to restore damaged ecosystems.',
    upvote: 44,
    downvote: 9,
  },
];

export default function Solutions() {
  return (
    <>
      <h3 className="text-3xl font-semibold py-6">Top Solutions This Week</h3>
      <div className="max-w-7xl overflow-x-auto no-scrollbar text-center">
        <div className="flex space-x-4">
          {userFeedback.map((comment, index) => (
            <div key={index}>
              <Card
                username={comment.username}
                message={comment.message}
                upvote={comment.upvote}
                downvote={comment.downvote}
                className="bg-neutral text-neutral-content" // Card specific styles
                showInput={false}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
