import { ThumbsDownIcon, ThumbsUpIcon } from 'lucide-react';

const userComments = [
  {
    username: 'Saketh Pabolu',
    message: 'I love mining!',
    upvote: 5,
    downvote: 5,
  },
  ,
  {
    username: 'Matthew Luo',
    message: 'I hate mining and indigenous people!!',
  },
];

export default function CommentCards() {
  return (
    <>
      {userComments.map((content, index) => (
        <div
          className="card bg-neutral text-neutral-content w-96 my-4"
          key={index}
        >
          <div className="card-body items-center text-center">
            <h2 className="card-title">{content.username}!</h2>
            <p>{content.message}</p>
            <div className="card-actions justify-end mt-3">
              <button className="btn btn-primary">
                <ThumbsUpIcon />
              </button>
              <button className="btn btn-ghost">
                <ThumbsDownIcon />
              </button>
            </div>
            <input
              type="text"
              placeholder="Comment: "
              className="input input-bordered input-md w-full max-w-xs mx-auto"
            />
          </div>
        </div>
      ))}
    </>
  );
}
