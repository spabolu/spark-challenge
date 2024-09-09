import Input from "@/components/Input";
import CommentCards from "@/components/CommentCards";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center sm:items-start">
        <Input />
        <CommentCards />
      </main>
    </div>
  );
}
