import { AlertCircle, Plus, TrendingDown, TrendingUp } from "lucide-react";
import React, { useState } from "react";
import { expenseCategories } from "../util/categories";

export default function ExpenseInputForm({
  formData,
  setFormData,
  editingId,
  setIsEditingId,
  expenses,
  setExpenses,
  showToast,
}) {
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    }

    if (!formData.amount || parseFloat(formData.amount) <= 0) {
      newErrors.amount = "Amount must be greater than 0";
    }

    if (!formData.category) {
      newErrors.category = "Category is required";
    }

    if (!formData.date) {
      newErrors.date = "Date is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      showToast("Please fix the errors in the form", "error");
      return;
    }
    const expenseData = {
      ...formData,
      amount: parseFloat(formData.amount),
      id: editingId || Date.now(),
    };

    if (editingId) {
      setExpenses((prev) =>
        prev.map((exp) => (exp.id === editingId ? expenseData : exp))
      );
      setIsEditingId(null);
      showToast("Entry updated succesfully", "success");
    } else {
      setExpenses([...expenses, expenseData]);
      showToast(
        `${
          formData.type === "income" ? "income" : "Expense"
        } added successfully`,
        "success"
      );
    }
    setFormData({
      description: "",
      amount: "",
      category: "",
      date: "",
      type: "expense",
    });
    setErrors({});
  };

  const cancelEdit = () => {
    setIsEditingId(null);
    setFormData({
      description: "",
      amount: "",
      category: "",
      date: "",
      type: "expense",
    });
    setErrors({});
    showToast("Edit cancelled", "info");
  };

  return (
    <div
      className="bg-white/5 backdrop-blur-lg rounded-3xl px-6 py-3 max-w-2xl mx-auto
     border border-white/10 space-y-2"
    >
      <h2>
        <div className="text-base font-bold text-white mb-2 flex items-center">
          <div className="px-2 py-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl mr-3">
            <Plus className="w-3 h-3 text-white" />
          </div>
          {/* Conditional Rendering Text */}
          {editingId ? "editEntry" : "Add new Entry"}
        </div>
      </h2>
      <div className="space-y-4">
        <div>
          <label
            className="block text-gray-300 text-sm 
            font-semibold mb-3 uppercase tracking-wide"
          >
            Entry Type
          </label>
          <div className="flex space-x-2">
            <label
              className={`inline-flex items-center justify-center px-4 py-1 rounded-xl
                    border-2 coursor-pointer transition-all ${
                      formData.type === "expense"
                        ? "border-red-500 bg-red-500/10 text-red-500"
                        : "border-gray-600 bg-gray-800/50 text-gray-400 hover:border-gray-500"
                    }`}
            >
              <input
                type="radio"
                name="type"
                checked={formData.type === "expense"}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    type: e.target.value,
                    category: "",
                  });
                  setErrors({});
                }}
                className="sr-only"
                value="expense"
              />
              <TrendingDown className="w-4 h-4 mr-1" />
              <span className="font-medium">Expense</span>
            </label>
            <label
              className={`inline-flex items-center justify-center  px-6 py-1 rounded-2xl
                    border-2 coursor-pointer transition-all
                    ${
                      formData.type === "income"
                        ? "border-green-500 bg-green-500/20 text-green-300"
                        : "border-gray-600 bg-gray-800/50 text-gray-400 hover:border-gray-500"
                    }`}
            >
              <input
                type="radio"
                name="type"
                className="sr-only"
                checked={formData.type === "income"}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    type: e.target.value,
                    category: "",
                  });
                  setErrors({});
                }}
                value="income"
              />
              <TrendingUp className="w-5 h-5 mr-2" />
              <span className="font-medium">Income</span>
            </label>
          </div>
        </div>
        <div>
          <label
            className="block text-gray-300 text-xs 
            font-semibold mb-2 uppercase tracking-wide"
          >
            Description
          </label>
          <input
            type="text"
            value={formData.description}
            onChange={(e) => {
              setFormData({ ...formData, description: e.target.value });
              if (errors.description) setErrors({ ...errors, description: "" });
            }}
            placeholder=" whats this for"
            className={`w-full px-3 py-1.5 text-sm bg-gray-800/50 border-2 rounded-2xl text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500
                    focus:border-purple-500 transition-all ${
                      errors.description
                        ? "border-red-400"
                        : "border-gray-600 focus:border-purple-500"
                    }`}
          />
          {/* Conditonadl rendering */}
          {errors.description && (
            <p className="text-red-400 text-sm flex items-center">
              <AlertCircle className="w-3 h-3 mt-1 mr-1" />
              {errors.description}
            </p>
          )}
        </div>
        <div>
          <label
            className="block text-gray-300 text-xs 
            font-semibold mb-2 uppercase tracking-wide"
          >
            Amount
          </label>
          <div className="relative">
            <input
              type="number"
              value={formData.amount}
              step="0.01"
              onChange={(e) => {
                setFormData({ ...formData, amount: e.target.value });
                if (errors.amount) setErrors({ ...errors, amount: "" });
              }}
              className={`w-full pr-10 pl-3 py-1.5 text-sm 
                     bg-gray-800/50 border-2 rounded-2xl text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500
                    focus:border-purple-500 transition-all ${
                      errors.amount
                        ? "border-red-400"
                        : "border-gray-600 focus:border-purple-500"
                    }`}
              placeholder="0.00"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg">
              €
            </span>
          </div>
          {/* Conditional rendering */}
          {errors.amount && (
            <p className="text-red-400 text-sm flex items-center">
              <AlertCircle className="w-3 h-3 mt-1 mr-1" />
              {errors.amount}
            </p>
          )}
        </div>
        <div>
          <label
            className="block text-gray-300 text-xs 
            font-semibold mb-2 uppercase tracking-wide"
          >
            Category
          </label>
          <select
            value={formData.category}
            onChange={(e) => {
              setFormData({ ...formData, category: e.target.value });
              if (errors.category) setErrors({ ...errors, category: "" });
            }}
            className={`w-full px-3 py-1.5 text-sm bg-gray-800/50 border-2 rounded-2xl
                text-white ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all
                ${
                  errors.category
                    ? "border-red-500"
                    : "border-gray-600 focus:border-purple-500"
                }`}
          >
            <option value="">Choose Category</option>
            {expenseCategories[formData.type].map((cat, i) => (
              <option key={i} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          {/* Conditional rendering */}
          {errors.category && (
            <p className="text-red-400 text-sm flex items-center">
              <AlertCircle className="w-3 h-3 mt-1 mr-1" />
              {errors.category}
            </p>
          )}
        </div>
        <div>
          <label
            className="block text-gray-300 text-xs 
            font-semibold mb-2 uppercase tracking-wide"
          >
            Date
          </label>
          <input
            value={formData.date}
            type="date"
            onChange={(e) => {
              setFormData({ ...formData, date: e.target.value });
              if (errors.date) setErrors({ ...errors, date: "" });
            }}
            className={`w-full px-3 py-1.5 text-sm mb-4 bg-gray-800/50 border-2 rounded-2xl text-white 
                focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all
                ${
                  errors.date
                    ? "border-red-500"
                    : "border-gray-600 focus:border-purple-500"
                }
                `}
          />
          {/* Conditional rendering */}
          {errors.date && (
            <p className="text-red-400 text-sm flex items-center">
              <AlertCircle className="w-3 h-3 mt-1 mr-1" />
              {errors.date}
            </p>
          )}
        </div>
        <div className="flex space-x-2 mt-1">
          <button
            type="button"
            className="flex-1 bg-gradient-to-r from-blue-600 to-blue-400
            text-white px-4 py-1.5 rounded-xl text-sm font-semibold hover:from-blue-400 hover:to-blue-400
            transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            onClick={handleSubmit}
          >
            {/* Conditional Rendering Text */}
            {editingId ? "Update Entry" : "Add Entry"}
          </button>
          {/* Conditional rendering */}
          {editingId && (
            <button
              onClick={cancelEdit}
              type="button"
              className="px-4 py-1.5 rounded-xl text-sm border-2 border-gray-600 text-gray-300
             hover:bg-gray-800/50 hover:border-gray-500 transition-all duration-200"
            >
              Cancel
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
