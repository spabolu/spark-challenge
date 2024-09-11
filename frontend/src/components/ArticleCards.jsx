import WideCard from "@/components/WideCard";

export default function ArticleCards({ articleData = [] }) {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-4">
        {articleData.map((article, index) => (
          <>
            <a href={article.Link} target="_blank">
              <WideCard
                key={index}
                username={article.Link}
                message={article.Summary}
                className="bg-neutral text-neutral-content"
                showInput={false}
              />
            </a>
          </>
        ))}
      </div>
    </>
  );
}
