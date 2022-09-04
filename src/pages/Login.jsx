import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cart from "../assets/movingcart.gif";
//loading gif
import loader from "../assets/loading.gif";
//import axios a library for making http/s request
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //to simulat loading effect , by knowing when the request starts and ends
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    // prevent page from reloading
    event.preventDefault();
    //set is setIsLoading to true
    setIsLoading(true);
    //check if email and password has value and password length greater than 6
    if (email && password && password.length > 6) {
      // use es6 try catch to handle request success and error
      try {
        // apiurl = https://reqres.in/api/login
        const api_url = "https://reqres.in/api/login";
        // if your object name and value has same naming, u can type just the value name and js would infer the name
        const req = await axios.post(`${api_url}`, {
          email,
          password,
        });

        alert("login successful");
        sessionStorage.setItem("token", req.data.token);
        // console.log(req);
        navigate("/dashboard");
      } catch (err) {
        console.log(err);
        alert(err.response.data.error);
      }
    } else {
      alert(
        "pls fill all input fields and make sure your password length is greater 6"
      );
    }

    setTimeout(() => setIsLoading(false), 200);
  };

  return (
    <div className="h-screen w-screen">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="col-span-1 bg-blue-400 h-[30vh] md:h-screen w-full flex justify-center items-center">
          <img src={Cart} />
        </div>
        <div className="col-span-1 bg-white flex flex-col justify-center items-center">
          <form
            className="shadow h-fit md:h-[60%] w-full md:w-[90%] px-3 pb-3 pt-5 rounded"
            onSubmit={handleSubmit}
          >
            <h1 className="font-bold text-3xl mb-4 text-center">login</h1>
            {/* to set value of the input field, and use onChange to track when value is updated */}
            <input
              type="text"
              className="border border-[.1rem] border-gray-200 h-12 w-full mb-4 rounded text-center"
              placeholder="Enter Email"
              value={email}
              onChange={(text) => setEmail(text.target.value)}
              required
            />
            {/* to set value of the input field, and use onChange to track when value is updated */}
            <input
              type="password"
              className="border border-[.1rem] border-gray-200 h-12 w-full mb-4 rounded text-center"
              placeholder="Enter Password"
              value={password}
              onChange={(text) => setPassword(text.target.value)}
              required
            />
            {isLoading ? (
              <img src={loader} />
            ) : (
              <button className="h-12 w-[50%] bg-blue-400 rounded text-white mx-[25%]">
                Login
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
