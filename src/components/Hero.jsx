import React from "react";
import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-around items-center w-full mb-10 pt-3">
        <img src={logo} alt="Logo" className="w-28 object-contain" />

        <a
          href="/"
          className="font-sans-serif font-extrabold text-7xl text-fuchsia-800"
        >
          SUMMS
        </a>

        <button
          type="button"
          onClick={() => window.open("https://github.com/lauramariastan")}
          className="git_btn"
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with
        <br className="max-md:hidden" />
        <span className="fuchsia_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="description">
        Simplify your research with this app, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
