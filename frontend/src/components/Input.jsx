import React from "react";

export default function Input() {
  return (
    <div class="hero pt-10">
      <div class="text-center">
        <input
          type="text"
          placeholder="Type here: "
          className="input-lg rounded-3xl input-bordered w-full"
        />

        <div className="max-w-xl">
          <p class="py-8">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class="btn btn-primary">Learn More</button>
        </div>
      </div>
    </div>
  );
}
