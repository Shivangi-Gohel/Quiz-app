import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";


const Home = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { setUser } = useContext(UserContext);

  const hadlesubmit = (e) => {
    e.preventDefault();
    setUser({ name, email });
    navigate("/choice");
  };
  return (
    <UserContext.Provider value={{ name, email }}>
      <div className="text-amber-100 mt-10 px-4 sm:px-6 md:px-12 lg:px-20">
        <img
          src="https://tse3.mm.bing.net/th/id/OIP.AaT6bvQshC9362KGOHqCEAHaHa?pid=Api&P=0&h=180"
          alt=""
          className="rounded-[50%] mx-auto w-35 h-35 md:w-50 md:h-50"
        />
        <div className="font-bold text-2xl sm:text-3xl mt-6 text-amber-100">
          Welcome!... User
        </div>

        <form
          className="flex flex-col mx-auto mt-10 w-50 sm:w-70 md:w-90"
          onSubmit={hadlesubmit}
        >
          <div className="flex flex-col">
            <label htmlFor="" className="text-left">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="enter your name"
              className="border-2 border-yellow-400 rounded-lg p-1 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
          </div>
          <div className="flex flex-col mt-6">
            <label htmlFor="" className="text-left">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="enter your email"
              className="border-2 border-yellow-400 rounded-lg p-1 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
          </div>
          <button
            type="submit"
            className="mt-10 bg-yellow-400 px-8 sm:px-10 py-1 rounded-lg text-black font-bold"
          >
            Let's start
          </button>
        </form>
      </div>
    </UserContext.Provider>
  );
};

export default Home;
