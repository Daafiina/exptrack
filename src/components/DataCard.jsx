import {
  DollarSign,
  EuroIcon,
  TrendingDown,
  TrendingUpIcon,
} from "lucide-react";
import React from "react";

export default function DataCard({ totalIncome, totalExpenses, balance }) {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 ">
        <div
          className="bg-gradient-to-r from-green-900/20 to-emerald-600/10
            backdrop-blur-sm rounded-3xl p-6 border border-emerald-500/10 shadow-xl
            transform transition-all duration-300 hover:scale-105 hover:shadow-emerald-500/10 0 hover:-translate-y-2"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-emerald-300 text-sm font-medium uppercase tracking-wide">
                Total Income
              </p>
              <p className="text-3xl font-bold text-emerald-400 mt-2">
                {totalIncome.toFixed(2)} €
              </p>
            </div>
            <div className="p-4 bg-emerald-500/20 rounded-2xl">
              <TrendingUpIcon className="w-6 h-6 text-emerald-400" />
            </div>
          </div>
        </div>
        <div
          className="bg-gradient-to-r from-red-500/30 to-red-600/10
            backdrop-blur-sm rounded-3xl p-8 border border-red-500/20 shadow-xl
            transform transition-all duration-300 hover:scale-105 hover:shadow-red-500/30 hover:-translate-y-2"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-red-300 text-sm font-medium uppercase tracking-wide">
                Total Expenses
              </p>
              <p className="text-3xl font-bold text-red-400 mt-2">
                {totalExpenses.toFixed(2)} €
              </p>
            </div>
            <div className="p-4 bg-red-500/20 rounded-2xl">
              <TrendingDown className="w-6 h-6 text-red-400" />
            </div>
          </div>
          {/* Using logic to render the conditional */}
        </div>
        <div
          className={`bg-gradient-to-r from-indigo-900/20 to-indigo-600/10
            backdrop-blur-sm rounded-3xl p-8 borderborder-indigo-500/10 shadow-xl
            transfrom transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/30 hover:-translate-y-2`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p
                className={`text-indigo-400 text-sm font-medium uppercase tracking-wide`}
              >
                Net Balance
              </p>
              <p className={`text-3xl font-bold text-indigo-500 mt-2`}>
                {Math.abs(balance).toFixed(2)} €
              </p>
            </div>
            <div className={`p-4 bg-indigo-500/20 rounded-2xl`}>
              <EuroIcon className="w-6 h-6 text-indigo-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
