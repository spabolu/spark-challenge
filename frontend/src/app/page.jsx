import Solutions from "@/components/Solutions";
import Input from "@/components/Input";
import FeedbackCards from "@/components/FeedbackCards";
import PostList from '@/components/PostList';
import FeedbackPage from '@/components/FeedbackPage';
import SolutionPage from '@/components/SolutionPage';

export default function Home() {
  return (
    <>
      <div className="grid items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
        <SolutionPage />
        <Input />
        {/* <FeedbackCards /> */}
        {/* <PostList /> */}
        <FeedbackPage />
      </div>
    </>
  );
}
