import { ThumbsDownIcon, ThumbsUpIcon } from "lucide-react";

export default function Card({
  username,
  message,
  upvote = 0,
  downvote = 0,
  className = "",
  showInput = false,
}) {
  return (
    <div className={`card w-96 m-0.2 ${className}`}>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{username}</h2>
        <p>{message}</p>
        <div className="card-actions justify-between mt-3">
          <button className="btn btn-primary">
            <ThumbsUpIcon /> {upvote}
          </button>
          <button className="btn btn-ghost">
            <ThumbsDownIcon /> {downvote}
          </button>
        </div>
        {showInput && (
          <input
            type="text"
            placeholder="Comment: "
            className="input input-bordered input-md w-full max-w-xs mt-2"
          />
        )}
        {/* <input
          type="text"
          placeholder="Comment: "
          className="input input-bordered input-md w-full max-w-xs mt-2"
        /> */}
      </div>
    </div>
  );
}
