import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DashBoard from "./DashBoard";

const Quiz = () => {
  const [data, setData] = useState(null);
  const { topic } = useParams();
  const [id, setId] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://quiz-app-1a9v.onrender.com/quiz/${topic}`);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleClick = (option) => {
    setSelectedOption(option);
    if (option === data[id].answer) {
      setScore(score + 1);
    }
    setTimeout(() => {
      setId(id + 1);
      setSelectedOption(null);
    }, 1000);
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  const currentQuestion = data[id];

  if (id >= data.length) {
    return (
      <DashBoard score={score} total={data.length} />
    );
  }

  return (
    <>
      <div className="mx-auto mt-8 sm:mt-30 px-4 sm:px-6 md:px-12 lg:px-20">
        <p className="text-3xl text-amber-100 font-bold text-center mt-3">
          {id + 1}. {currentQuestion.question}
        </p>
        <div className="mt-15 grid grid-cols-1 gap-6 sm:grid-cols-2 mx-auto max-w-4xl">
          {currentQuestion.options.map((option, index) => {
            let bgColor = "bg-yellow-400";
            if (selectedOption) {
              if (option === currentQuestion.answer) {
                bgColor = "bg-green-500";
              } else if (option === selectedOption) {
                bgColor = "bg-red-500";
              }
            }
            return (
              <button
                key={index}
                className={`text-black mx-10 px-12 py-2 rounded-2xl ${bgColor}`}
                onClick={() => handleClick(option)}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex mx-auto justify-between">
        <button className="bottom-6 left-20 fixed bg-yellow-400 rounded-lg px-4 sm:px-10 py-1 font-bold" onClick={() => setId((prev) => prev > 0 ? prev-1 : prev)}>Prev</button>
        <button className="bottom-6 right-20 fixed bg-yellow-400 rounded-lg px-4 sm:px-10 py-1 font-bold" onClick={() => setId((prev) => prev < data.length ? prev+1 : prev)}>Next</button>
      </div>
    </>
  );
};

export default Quiz;
