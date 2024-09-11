import Card from "@/components/Card";

export default function ArticleCards({ articleData = [] }) {
  return (
    <>
      <h3 className="text-3xl text-center font-semibold my-5">
        Articles Cards Here
      </h3>

      <div className="flex flex-wrap justify-center gap-4">
        {articleData.map((article, index) => (
          <Card
            key={index}
            username={article.Link}
            message={article.Summary}
            className="bg-neutral text-neutral-content"
            showInput={false}
          />
        ))}
      </div>
    </>
  );
}

