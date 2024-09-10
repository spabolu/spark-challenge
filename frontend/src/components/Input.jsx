import { SendHorizonal } from "lucide-react";

export default function Input() {
  return (
    <div className="w-full max-w-2xl mt-9">
      <h3 className="text-xl font-semibold">Express yourself</h3>
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Search" />
        <button className="hover:opacity-70 opacity-80">
          <SendHorizonal />
        </button>
      </label>
    </div>
  );
}
