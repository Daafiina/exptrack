import React from "react";

export default function FilterMenu({ filter, setFilter }) {
  return (
    <div className="p-6 border-b border-white/10">
      <div className="flex space-x-2 bg-gray-800/50 rounded-2xl p-2">
        {["all", "income", "expense"].map((filterT) => (
          <button
            key={filterT}
            onClick={() => setFilter(filterT)}
            className={`flex-1 py-3 px-6 rounded-xl text-sm font-semibold capitalize
                transition-all duration-200 ${
                  filter === filterT
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                }`}
          >
            {filterT === "all" ? "All Entries" : filterT}
          </button>
        ))}
      </div>
    </div>
  );
}
