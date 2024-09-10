import Card from "@/components/Card";

export default function FeedbackCards() {
  const userFeedback = [
    {
      username: "Saketh Pabolu",
      message: "I love mining!",
      upvote: 5,
      downvote: 5,
    },
    {
      username: "Matthew Luo",
      message: "I hate mining and indigenous people!!",
      upvote: 0,
      downvote: 0,
    },
  ];

  return (
    <>
      <h3 className="text-3xl font-semibold py-6">
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
          />
        ))}
      </div>
    </>
  );
}
