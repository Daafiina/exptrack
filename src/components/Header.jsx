import { Wallet, Wallet2, Wallet2Icon } from "lucide-react";
import React from "react";

export default function Header() {
  return (
    <header className="flex items-center justify-between max-w-7xl mx-auto p-4 mb-6">
      {/* Wallet Icon */}
      <div className="flex items-center space-x-3">
        <div
          className="p-2 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl
                shadow-lg"
        >
          <Wallet2Icon className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-white/85">MoneyFlow</h1>
      </div>
      {/* Login button */}
      {/* <button className='px-4 p-2 bg-blue-400 text-white font-serif rounded-2xl shadow-lg 
        hover:bg-blue-700 transtion-all duration-300'>
            Login
        </button> */}
    </header>
  );
}
