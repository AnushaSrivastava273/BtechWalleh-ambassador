import { Megaphone, CalendarDays, Info } from "lucide-react";
import React from "react";

const announcements = [
  {
    id: 1,
    title: "Orientation Session on 16th June",
    date: "June 14, 2025",
    content:
      "Join us for a live Zoom session to understand your role, perks, and referral system. Time: 5 PM IST.",
  },
  {
    id: 2,
    title: "Refer & Win Goodies 🎁",
    date: "June 13, 2025",
    content:
      "Top 10 ambassadors with the most referrals by June 20 will win exclusive BTech Walleh merchandise.",
  },
  {
    id: 3,
    title: "Task 1: Share Posters",
    date: "June 12, 2025",
    content:
      "Download the official event poster and share it on your college WhatsApp and Instagram groups. Submit proof by June 15.",
  },
];

const Announcements = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4 min-h-[85vh]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-700 mb-2 animate-fade-in-up">
            📢 Latest Announcements
          </h2>
          <p className="text-gray-600 text-lg animate-fade-in">
            Stay updated with the latest tasks, sessions, and competitions.
          </p>
        </div>

        <div className="space-y-6">
          {announcements.map((a, idx) => (
            <div
              key={a.id}
              className="bg-white border-l-8 border-sky-500 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 flex gap-4 items-start animate-fade-in-up"
              style={{ animationDelay: `${idx * 100}ms`, animationFillMode: "both" }}
            >
              <div className="p-3 rounded-full bg-sky-100 text-sky-600">
                <Megaphone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-900">{a.title}</h3>
                <div className="flex items-center text-sm text-gray-500 mb-2 mt-1">
                  <CalendarDays className="h-4 w-4 mr-1" />
                  {a.date}
                </div>
                <p className="text-gray-700 leading-relaxed">{a.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Announcements;
