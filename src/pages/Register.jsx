import { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    college: "",
    phone: "",
    linkedin: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save to localStorage
    localStorage.setItem("ambassadorRegistration", JSON.stringify(formData));
    setSubmitted(true);
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-white px-4">
      <div className="max-w-xl w-full bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
          Campus Ambassador Registration
        </h2>

        {submitted ? (
          <div className="text-center text-green-600 text-lg font-medium">
            ✅ Registration Successful!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-1 font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                required
                onChange={handleChange}
                value={formData.name}
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                onChange={handleChange}
                value={formData.email}
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">College Name</label>
              <input
                type="text"
                name="college"
                required
                onChange={handleChange}
                value={formData.college}
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Phone Number</label>
              <input
                type="tel"
                name="phone"
                required
                onChange={handleChange}
                value={formData.phone}
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">LinkedIn Profile</label>
              <input
                type="url"
                name="linkedin"
                required
                onChange={handleChange}
                value={formData.linkedin}
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
