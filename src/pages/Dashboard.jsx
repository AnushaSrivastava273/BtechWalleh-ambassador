import { useEffect, useState } from "react";
import {
  UserPlus,
  Megaphone,
  Calendar,
  TrendingUp,
  ArrowRight,
  Clock,
  MapPin,
  Trophy
} from "lucide-react";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const savedData = localStorage.getItem("ambassadorRegistration");
    if (savedData) {
      const parsed = JSON.parse(savedData);
      if (!parsed.referralCode) {
        parsed.referralCode = "AMB" + Math.floor(100000 + Math.random() * 900000);
        localStorage.setItem("ambassadorRegistration", JSON.stringify(parsed));
      }
      setUserData(parsed);
    }
  }, []);

  const dashboardCards = [
    {
      title: "Registration",
      description: "Complete your ambassador profile and get verified",
      icon: UserPlus,
      progress: 75,
      action: "Complete Profile",
      bgGradient: "from-sky-400 to-sky-600"
    },
    {
      title: "Announcements",
      description: "Stay updated with latest program updates",
      icon: Megaphone,
      count: 5,
      action: "View All",
      bgGradient: "from-orange-400 to-orange-600"
    },
    {
      title: "Events",
      description: "Upcoming workshops and tech meetups",
      icon: Calendar,
      count: 3,
      action: "Browse Events",
      bgGradient: "from-green-400 to-green-600"
    },
    {
      title: "Performance",
      description: "Track your impact and achievements",
      icon: TrendingUp,
      score: "A+",
      action: "View Analytics",
      bgGradient: "from-purple-400 to-purple-600"
    }
  ];

  const recentEvents = [
    {
      title: "AI/ML Workshop",
      date: "Dec 15, 2024",
      time: "2:00 PM",
      location: "Virtual",
      attendees: 150
    },
    {
      title: "Campus Tech Fair",
      date: "Dec 20, 2024",
      time: "10:00 AM",
      location: "Main Auditorium",
      attendees: 300
    },
    {
      title: "Coding Bootcamp",
      date: "Dec 22, 2024",
      time: "9:00 AM",
      location: "Computer Lab",
      attendees: 80
    }
  ];

  if (!userData) {
    return (
      <div className="flex justify-center items-center h-[80vh] text-lg">
        No registration found. Please register first.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* User Info */}
        <div className="bg-white p-6 rounded-2xl shadow-lg mb-12">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Welcome, {userData.name}</h2>
          <div className="grid sm:grid-cols-2 gap-4 text-gray-800 text-base">
            <div><strong>Email:</strong> {userData.email}</div>
            <div><strong>College:</strong> {userData.college}</div>
            <div><strong>Phone:</strong> {userData.phone}</div>
            <div>
              <strong>LinkedIn:</strong>{" "}
              <a href={userData.linkedin} target="_blank" rel="noreferrer" className="text-blue-600 underline">
                View Profile
              </a>
            </div>
          </div>
          <div className="mt-4 text-green-700 font-semibold">
            🎁 Your Referral Code: <span className="text-blue-800">{userData.referralCode}</span>
          </div>
        </div>

        {/* Cards */}
       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
  {dashboardCards.map((card, index) => {
    const IconComponent = card.icon;
    return (
      <div
        key={index}
        className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden flex flex-col"
      >
        <div className={`bg-gradient-to-r ${card.bgGradient} p-6`}>
          <IconComponent className="h-8 w-8 text-white mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
          <p className="text-white/90 text-sm">{card.description}</p>
        </div>

        <div className="p-6 flex flex-col justify-between flex-grow">
          {/* Spacer Section for Progress / Count / Score */}
          <div className="mb-4 min-h-[64px]">
            {card.progress && (
              <>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-semibold text-gray-900">
                    {card.progress}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`bg-gradient-to-r ${card.bgGradient} h-2 rounded-full`}
                    style={{ width: `${card.progress}%` }}
                  ></div>
                </div>
              </>
            )}

            {card.count && (
              <div>
                <span className="text-3xl font-bold text-gray-900">
                  {card.count}
                </span>
                <span className="text-gray-600 ml-2">new items</span>
              </div>
            )}

            {card.score && (
              <div>
                <span className="text-3xl font-bold text-gray-900">
                  {card.score}
                </span>
                <span className="text-gray-600 ml-2">rating</span>
              </div>
            )}
          </div>

          {/* Action Button */}
          <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center group mt-auto">
            {card.action}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    );
  })}
</div>


        {/* Upcoming Events */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Upcoming Events</h3>
            <button className="text-sky-600 hover:text-sky-700 font-semibold flex items-center">
              View All
              <ArrowRight className="ml-1 h-4 w-4" />
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {recentEvents.map((event, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-6 hover:border-sky-300 hover:shadow-md transition-all">
                <h4 className="font-semibold text-gray-900 mb-3">{event.title}</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-sky-500" />
                    {event.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-orange-500" />
                    {event.time}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-green-500" />
                    {event.location}
                  </div>
                  <div className="flex items-center">
                    <Trophy className="h-4 w-4 mr-2 text-purple-500" />
                    {event.attendees} registered
                  </div>
                </div>
                <button className="mt-4 w-full bg-sky-50 hover:bg-sky-100 text-sky-700 font-medium py-2 px-4 rounded-lg transition">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
