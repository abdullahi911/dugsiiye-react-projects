import React, { useState } from "react";

const Developerform = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    experience: "",
    skills: [],
    agreement: false,
    notifications: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "skills") {
      let updatedSkills = [...formData.skills];

      if (checked) {
        updatedSkills.push(value);
      } else {
        updatedSkills = updatedSkills.filter((skill) => skill !== value);
      }

      setFormData({ ...formData, skills: updatedSkills });
      return;
    }

    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let newErrors = {};


    const nameRegex = /^[A-Za-z\s]{2,30}$/;

    if (!formData.name) {
      newErrors.name = "Name is required";
    } else if (!nameRegex.test(formData.name)) {
      newErrors.name = "Name must be letters only (2-30 characters)";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }


    if (!formData.role) {
      newErrors.role = "Please select a role";
    }

    if (!formData.experience) {
      newErrors.experience = "Experience is required";
    } else if (formData.experience < 5 || formData.experience > 50) {
      newErrors.experience = "Experience must be between 5 and 50";
    }


    if (formData.skills.length === 0) {
      newErrors.skills = "Select at least one skill";
    }


    if (!formData.agreement) {
      newErrors.agreement = "You must agree to the terms";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    console.log(formData);
    alert("Application submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-8 rounded-xl shadow-lg space-y-5"
      >
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Developer Application Form
        </h1>

      
        <div>
          {errors.name && (
            <p className="text-red-500 text-sm mb-1">{errors.name}</p>
          )}
          <input
            type="text"
            name="name"
            placeholder="Full name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
          />
        </div>

 
        <div>
          {errors.email && (
            <p className="text-red-500 text-sm mb-1">{errors.email}</p>
          )}
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
          />
        </div>


        <div>
          {errors.role && (
            <p className="text-red-500 text-sm mb-1">{errors.role}</p>
          )}
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select role</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="fullstack">Fullstack</option>
          </select>
        </div>


        <div>
          {errors.experience && (
            <p className="text-red-500 text-sm mb-1">{errors.experience}</p>
          )}
          <input
            type="number"
            name="experience"
            placeholder="Years of experience"
            value={formData.experience}
            onChange={handleChange}
            className="w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500"
          />
        </div>


        <div>
          <p className="font-medium">Skills</p>

          {errors.skills && (
            <p className="text-red-500 text-sm mb-2">{errors.skills}</p>
          )}

          <div className="flex gap-4">
            {["javascript", "react", "nodejs", "python"].map((skill) => (
              <label key={skill} className="flex items-center gap-1">
                <input
                  type="checkbox"
                  name="skills"
                  value={skill}
                  checked={formData.skills.includes(skill)}
                  onChange={handleChange}
                />
                {skill}
              </label>
            ))}
          </div>
        </div>

        <div>
          {errors.agreement && (
            <p className="text-red-500 text-sm mb-1">{errors.agreement}</p>
          )}

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="agreement"
              checked={formData.agreement}
              onChange={handleChange}
            />
            I agree to the terms and conditions
          </label>
        </div>

        {}
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="notifications"
            checked={formData.notifications}
            onChange={handleChange}
          />
          Receive notifications about opportunities
        </label>

        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default Developerform;