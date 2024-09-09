import React from "react";

export default function Input() {
  return (
    <div class="hero pt-10">
      <div class="text-center">
        <div className="max-w-xl">
          <p class="card-title py-2">Speak Your Mind!</p>
          <input
            type="text"
            placeholder="Type here: "
            className="input-lg rounded-3xl input-bordered w-full max-w-xs"
          />
        </div>

        <div className="max-w-xl">
          <p class="card-title py-3 justify-center mt-10 mb-5">
            Read what others are saying
          </p>
        </div>
      </div>
    </div>
  );
}
