import React from "react";
import { useNavigate } from "react-router-dom";

const Choice = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-10 text-center px-4">
      <h1 className="text-3xl sm:text-4xl text-center text-amber-100 font-bold">Select Your Choice</h1>
      <div className="mt-10 mx-auto w-[500px]">
        <div className="flex gap-10">
          <div className="flex flex-col border-1 border-yellow-400 rounded-2xl p-2 text-amber-100" onClick={() => navigate('/quiz/js')}>
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.CVthD14qZjPjr1eLeCaeBQHaIZ?pid=Api&P=0&h=180"
              alt="" className="h-36 w-30 rounded-2xl"
            />
            <div>Javascript</div>
          </div>
          <div className="flex flex-col border-1 border-yellow-400 rounded-2xl p-2 text-amber-100" onClick={() => navigate('/quiz/node')}>
            <img
              src="https://tse2.mm.bing.net/th/id/OIP.xQJlilCdJ7U2ebPvc8DYLwHaIJ?pid=Api&P=0&h=180"
              alt="" className="h-36 w-30 rounded-2xl"
            />
            <div>Nodejs</div>
          </div>
          <div className="flex flex-col border-1 border-yellow-400 rounded-2xl p-2 text-amber-100" onClick={() => navigate('/quiz/html')}>
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.eTgg667XGd11kvh3qtoWAwHaHa?pid=Api&P=0&h=180"
              alt="" className="h-36 w-30 rounded-2xl"
            />
            <div>HTML</div>
          </div>
        </div>
        <div className="flex mt-10 gap-10">
          <div className="flex flex-col border-1 border-yellow-400 rounded-2xl p-2 text-amber-100" onClick={() => navigate('/quiz/css')}>
            <img
              src="https://tse2.mm.bing.net/th/id/OIP.Sexi_kReICvUQFQJ05RfrgAAAA?pid=Api&P=0&h=180"
              alt="" className="h-36 w-30 rounded-2xl"
            />
            <div>CSS</div>
          </div>
          <div className="flex flex-col border-1 border-yellow-400 rounded-2xl p-2 text-amber-100" onClick={() => navigate('/quiz/react')}>
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.C9w8BWXIehPGPc1dj-989wHaGq?pid=Api&P=0&h=180"
              alt="" className="h-36 w-30 rounded-2xl"
            />
            <div>React</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choice;
