import React from "react";

export default function AboutCard({ Icon, Title, Subtitle }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:bg-red-300">
      <div className="flex items-center justify-center mb-4 text-blue-600">
        <Icon size={32} />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{Title}</h3>
      <p className="text-gray-600 text-sm">{Subtitle}</p>
    </div>
  );
}
