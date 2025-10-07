import {
  EuroIcon,
  TrendingUp,
  TrendingDown,
  Tag,
  Calendar,
  Edit2,
  Trash2,
} from "lucide-react";
import React from "react";

export default function ExpensesList({
  filteredExpenses,
  handleEdit,
  handleDelete,
}) {
  return (
    <div className="p-6 max-h-96 overflow-y-auto">
      {filteredExpenses.length === 0 ? (
        <div className="text-center py-14">
          <div className="p-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl inline-block mb-6">
            <EuroIcon className="w-6 h-6 text-pink-400" />
          </div>
          <p className="text-gray-300 text-lg mb-2">No entries found</p>
          <p className="text-gray-500">
            Start by adding your first transaction
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredExpenses.map((exp) => (
            <div
              key={exp.id}
              className="flex items-center justify-between p-4 bg-gray-800/30 rounded-2xl border border-gray-700/50 hover:bg-gray-800/50 hover:border-gray-600/50 transition-all duration-200"
            >
              <div className="flex items-center space-x-4">
                <div
                  className={`p-3 rounded-2xl ${
                    exp.type === "income"
                      ? "bg-emerald-500/20 text-emerald-400"
                      : "bg-red-500/20 text-red-300"
                  }`}
                >
                  {exp.type === "income" ? (
                    <TrendingUp className="w-5 h-5" />
                  ) : (
                    <TrendingDown className="w-6 h-6" />
                  )}
                </div>
                <div>
                  <p className="font-semibold text-white text-lg">
                    {exp.description || "No description"}
                  </p>
                  <div className="flex items-center space-x-6 text-sm text-gray-400 mt-1">
                    <span className="flex items-center">
                      <Tag className="w-4 h-4 mr-2" />
                      {exp.category || "Uncategorized"}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.date
                        ? new Date(exp.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })
                        : "No date"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span
                  className={`font-bold text-white text-xl ${
                    exp.type === "income" ? "text-emerald-400" : "text-red-400"
                  }`}
                >
                  {exp.type === "income" ? "+ € " : "- € "}
                  {exp.amount != null ? exp.amount.toFixed(2) : "0.00"}
                </span>
                <div className="flex space-x-2">
                  <button
                    className="p-3 text-gray-400 hover:text-blue-400 hover:bg-blue-500/20 rounded-xl transition-all duration-200"
                    onClick={() => handleEdit(exp)}
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    className="p-3 text-gray-400 hover:text-red-400 hover:bg-red-500/20 rounded-xl transition-all duration-200"
                    onClick={() => handleDelete(exp.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
