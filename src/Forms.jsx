import React, { useState } from "react";

const Forms = () => {
  const [username, setUsername] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [checkbox, setCheckbox] = useState(false);
  const [select, setSelect] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();

    console.log(username);

    if (!checkbox) {
      alert("Please check the checkbox");
      return;
    }

    if (select === "") {
      alert("Please select an option");
      return;
    }

    console.log(checkbox);
    console.log(select);
  };

  const handlechange = (e) => {
    setUsername({ ...username, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      
      <form
        onSubmit={handlesubmit}
        className="bg-red-100-tu p-8 rounded-2xl shadow-lg w-full max-w-md space-y-5"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          User Registration
        </h2>

        {/* Name */}
        <input
          type="text"
          name="name"
          value={username.name}
          onChange={handlechange}
          placeholder="Enter name"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          value={username.email}
          onChange={handlechange}
          placeholder="Enter email"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          value={username.password}
          onChange={handlechange}
          placeholder="Enter password"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Checkbox */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={checkbox}
            onChange={(e) => setCheckbox(e.target.checked)}
            className="w-4 h-4 accent-blue-600"
          />
          <label className="text-gray-600 text-sm">
            I agree to the terms
          </label>
        </div>

        {/* Select */}
        <select
          value={select}
          onChange={(e) => setSelect(e.target.value)}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Forms;