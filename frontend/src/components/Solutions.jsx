import React from "react";
import Card from "@/components/Card";

export default function Solutions() {
  return (
    <>
      <p>Solutions Component</p>
      <Card
        username="Saketh Pabolu"
        message="I love mining!"
        upvote={5}
        downvote={5}
        className="bg-neutral text-neutral-content"
        showInput={false}
      />
    </>
  );
}
