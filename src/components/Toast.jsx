import { AlertCircle, Check, X } from "lucide-react";
import React from "react";

export default function Toast({ Toast, RemoveToast }) {
  return (
    <div className="fixed top-5 right-5 z-50 space-y-2">
      {/* Map Method Logic */}
      {Toast.map((t) => {
        return (
          <div
            key={t.id}
            className={`flex items-center p-4 rounded-lg shadow-lg backdrop-blur-sm
            border transform transition-all duration-300 easy-in-out ${
              Toast.type === "succes"
                ? "bg-green-800/80 border-green-700 text-green-100"
                : t.type === "error"
                ? "bg-red-900/80 border-red-700 text-red-100"
                : "bg-yellow-900/80 border-yellow-700 text-yellow-100"
            } `}
          >
            {/* Conditional Rendering*/}
            {Toast.type === "success" && (
              <Check className="w-5 h-5 mr-2 flex-shrink-0" />
            )}

            {t.type === "error" && (
              <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
            )}

            {t.type === "info" && (
              <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
            )}

            <span className="mr-2">{t.message}</span>
            <button
              className="ml-auto text-gray-300 hover:text-white transition-colors"
              onClick={() => RemoveToast(t.id)}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
}
