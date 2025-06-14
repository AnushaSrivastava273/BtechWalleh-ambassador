import React from "react";
import { Users, Trophy, Calendar, CheckCircle, School } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Connect & Grow",
    description: "Join a community of ambitious tech students and expand your network.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Trophy,
    title: "Earn Recognition",
    description: "Get exclusive certificates and shout-outs for your contributions.",
    gradient: "from-yellow-500 to-red-500",
  },
  {
    icon: Calendar,
    title: "Organize Events",
    description: "Plan workshops, hackathons, and seminars at your campus.",
    gradient: "from-sky-500 to-indigo-500",
  },
];

const reasons = [
  "Stand out in placement interviews with leadership experience",
  "Get exclusive mentorship from tech industry experts",
  "Receive merchandise and rewards for top performance",
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-white via-blue-50 to-orange-50 px-4 py-20">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center mb-25">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-orange-500">
          Become a Campus Ambassador with Btech Walleh
        </h1>
        <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto">
          Inspire your peers, host exciting events, and grow your leadership journey with real-world impact.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 mb-25 mt-10">
        {benefits.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex flex-col items-center text-center gap-4 bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <div
                className={`w-16 h-16 min-w-[4rem] rounded-full flex items-center justify-center bg-gradient-to-tr ${item.gradient}`}
              >
                <Icon className="text-white w-7 h-7" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Why Join Us Section */}
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 px-4 md:px-8 py-10 mt-20">
        {/* Text Column */}
        <div className="md:w-1/2">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">
    Why Join Our Program?
  </span>
</h2>
          <ul className="space-y-4">
            {reasons.map((reason, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle className="text-green-500 mt-1" />
                <p className="text-gray-700 text-lg">{reason}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Card Column */}
        <div className="md:w-1/2">
          <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md mx-auto">
            <h3 className="text-xl font-bold mb-6 text-gray-800 text-center">
              Our Growing Impact
            </h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Users className="text-sky-500 w-6 h-6" />
                <p className="text-gray-700 text-lg font-medium">
                  500+ Active Ambassadors
                </p>
              </div>
              <div className="flex items-center gap-4">
                <School className="text-purple-500 w-6 h-6" />
                <p className="text-gray-700 text-lg font-medium">
                  200+ Colleges Across India
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Calendar className="text-orange-500 w-6 h-6" />
                <p className="text-gray-700 text-lg font-medium">
                  100+ Events Conducted
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
