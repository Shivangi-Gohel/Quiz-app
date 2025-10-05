import React from "react";
import { useNavigate } from "react-router-dom";

const Choice = () => {
  const navigate = useNavigate();

  const subjects = [
    { name: "Javascript", img: "https://tse1.mm.bing.net/th/id/OIP.CVthD14qZjPjr1eLeCaeBQHaIZ?pid=Api&P=0&h=180", path: "/quiz/js" },
    { name: "Nodejs", img: "https://tse2.mm.bing.net/th/id/OIP.xQJlilCdJ7U2ebPvc8DYLwHaIJ?pid=Api&P=0&h=180", path: "/quiz/node" },
    { name: "HTML", img: "https://tse3.mm.bing.net/th/id/OIP.eTgg667XGd11kvh3qtoWAwHaHa?pid=Api&P=0&h=180", path: "/quiz/html" },
    { name: "CSS", img: "https://tse2.mm.bing.net/th/id/OIP.Sexi_kReICvUQFQJ05RfrgAAAA?pid=Api&P=0&h=180", path: "/quiz/css" },
    { name: "React", img: "https://tse1.mm.bing.net/th/id/OIP.C9w8BWXIehPGPc1dj-989wHaGq?pid=Api&P=0&h=180", path: "/quiz/react" },
  ];

  return (
    <div className="mt-10 text-center px-4">
      <h1 className="text-3xl sm:text-4xl font-bold text-amber-100">Select Your Choice</h1>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {subjects.map((sub, index) => (
          <div
            key={index}
            onClick={() => navigate(sub.path)}
            className="flex flex-col items-center border border-yellow-400 rounded-2xl p-3 text-amber-100 cursor-pointer hover:scale-105 transition-transform duration-200 shadow-md"
          >
            <img
              src={sub.img}
              alt={sub.name}
              className="h-36 w-36 object-cover rounded-2xl"
            />
            <div className="mt-2 font-semibold">{sub.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Choice;
