import Card from "@/components/Card";

export default function FeedbackCards() {
  const userFeedback = [
    {
      username: "Lena Grey",
      message:
        "The dust and noise are unbearable, but the jobs help our town survive.",
      upvote: 15,
      downvote: 3,
    },
    {
      username: "Aiden Redbird",
      message:
        "Mining near our reservation threatens our water and sacred lands.",
      upvote: 25,
      downvote: 1,
    },
    {
      username: "Carlos Romero",
      message:
        "Working at the mine pays well, but the health risks are worrying.",
      upvote: 12,
      downvote: 4,
    },
    {
      username: "Emma Foster",
      message:
        "Our community feels left out in decisions that affect our environment.",
      upvote: 18,
      downvote: 2,
    },
    {
      username: "Maya Littlefoot",
      message:
        "Cultural sites are at risk, and we aren’t being heard by companies.",
      upvote: 20,
      downvote: 0,
    },
  ];

  return (
    <>
      <h3 className="text-3xl font-semibold my-5">
        See what the community is saying
      </h3>

      <div className="flex flex-wrap justify-center gap-4">
        {userFeedback.map((comment, index) => (
          <Card
            key={index}
            username={comment.username}
            message={comment.message}
            upvote={comment.upvote}
            downvote={comment.downvote}
            className="bg-neutral text-neutral-content"
            showInput={true}
          />
        ))}
      </div>
    </>
  );
}
