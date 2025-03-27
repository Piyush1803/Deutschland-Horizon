import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const countryCodes = [
  { code: "+1", country: "USA" },
  { code: "+91", country: "India" },
  { code: "+44", country: "UK" },
  { code: "+49", country: "Germany" },
  { code: "+61", country: "Australia" },
  { code: "+33", country: "France" },
  { code: "+81", country: "Japan" },
  { code: "+86", country: "China" },
  { code: "+971", country: "UAE" },
  { code: "+7", country: "Russia" },
];

const Login = () => {
  const [state, setState] = useState("Sign Up");
  const [fullName, setFullName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [userName, setUserName] = useState("");
  const [gender, setGender] = useState(1);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setError("");
  
    try {
      const endpoint = state === "Sign Up" ? "/api/auth/register" : "/api/auth/login";
      const fullPhoneNumber = `${countryCode} ${phoneNo}`.trim();
  
      // ✅ Proper validation for Sign Up
      if (
        !userName || 
        !password || 
        (state === "Sign Up" && (!fullName || !phoneNo.trim()))
      ) {
        setError("All fields are required.");
        return;
      }
  
      let payload;
      if (state === "Sign Up") {
        payload = {
          full_name: fullName,
          phone_no: fullPhoneNumber,
          user_name: userName,
          gender: parseInt(gender, 10),
          password,
        };
      } else {
        payload = {
          user_name: userName,
          password,
        };
      }
  
      console.log("Payload before sending:", payload);
  
      const response = await axios.post(`http://localhost:8080${endpoint}`, payload);
  
      if (state === "Sign Up") {
        alert("Account created successfully! Please log in.");
        setState("Login");
  
        // ✅ Reset form only after successful Sign Up
        setFullName("");
        setPhoneNo("");
        setCountryCode("+91");
        setGender(1);
        setUserName("");
        setPassword("");
      }
  
      if (state === "Login") {
        localStorage.setItem("token", response.data.token);
        navigate("/my-profile");
  
        // ✅ Reset login fields after successful login
        setUserName("");
        setPassword("");
      }
    } catch (err) {
      setError("Error occurred! " + (err.response?.data?.message || "Please try again."));
    }
  };
  


  return (
    <form className="min-h-[80vh] flex items-center" onSubmit={onSubmitHandler}>
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-2xl font-semibold">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </p>
        <p>Please {state === "Sign Up" ? "sign up" : "log in"} to book an appointment.</p>

        {error && <p className="text-red-500">{error}</p>}

        {state === "Sign Up" && (
          <>
            <div className="w-full">
              <p>Full Name</p>
              <input
                className="border border-zinc-300 rounded w-full p-2 mt-1"
                type="text"
                onChange={(e) => setFullName(e.target.value)}
                value={fullName}
                autoComplete="off"
                required
              />
            </div>

            <div className="w-full">
              <p>Phone Number</p>
              <div className="flex">
                <select
                  className="border border-zinc-300 rounded-l p-2 w-[70px]"
                  onChange={(e) => setCountryCode(e.target.value)}
                  value={countryCode}
                  required
                >
                  {countryCodes.map((item) => (
                    <option key={item.code} value={item.code}>
                      {item.country} ({item.code})
                    </option>
                  ))}
                </select>
                <input
                  className="border border-zinc-300 rounded-r w-full p-2"
                  type="number"
                  onChange={(e) => setPhoneNo(e.target.value)}
                  value={phoneNo}
                  autoComplete="off"
                  required
                />
              </div>
            </div>

            <div className="w-full">
              <p>Gender</p>
              <select
                className="border border-zinc-300 rounded w-full p-2 mt-1"
                onChange={(e) => setGender(e.target.value)}
                value={gender}
                required
              >
                <option value={1}>Male</option>
                <option value={2}>Female</option>
                <option value={3}>Other</option>
              </select>
            </div>
          </>
        )}

        <div className="w-full">
          <p>Username</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            autoComplete="off"
            required
          />
        </div>

        <div className="w-full">
          <p>Password</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            autoComplete="new-password"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-purple-400 text-white w-full py-2 rounded-md text-base hover:bg-purple-500 transition"
        >
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>

        {state === "Sign Up" ? (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => setState("Login")}
              className="text-purple-400 underline cursor-pointer"
            >
              Login here
            </span>
          </p>
        ) : (
          <p>
            Create a new account?{" "}
            <span
              onClick={() => setState("Sign Up")}
              className="text-purple-400 underline cursor-pointer"
            >
              Click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
