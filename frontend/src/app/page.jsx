import Solutions from "@/components/Solutions";
import Input from "@/components/Input";
import FeedbackCards from "@/components/FeedbackCards";

export default function Home() {
  return (
    <>
      <div className="grid items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
        <Solutions />
        <Input />
        <FeedbackCards />
      </div>
    </>
  );
}
