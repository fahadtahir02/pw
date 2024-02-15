import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="pt-0 px-5 ">
        <ol className="text-center pt-4 px-2 flex justify-start">
          <li className="px-3">Welcome</li>
          <li className="px-3">Full-Stack Projects</li>
          <li className="px-3">Machine Learning Projects</li>

        </ol>

      </div>
      <div className="text-center pt-32 px-10 ">
        <h1 className="text-4xl  "> Welcome to my <span className="text-blue-600">Portfolio</span> Website </h1>
        <div className="pt-20 px-32">
          <p> This website will tell you more about me as a person as well as my hobbies and development experience. I plan on fine tuning an llm that will allow you all to better converse with me. </p>
        </div>
        <div>
          <h2> Project 1</h2>
        </div>
      </div>
    </main>
  );
}
