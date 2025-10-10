import React, { useEffect, useState } from "react";
import Toast from "./components/Toast";
import Header from "./components/Header";
import DataCard from "./components/DataCard";
import ExpenseInputForm from "./components/ExpenseInputForm";
import FilterMenu from "./components/FilterMenu";
import ExpensesList from "./components/ExpensesList";

export default function App() {
  const [formData, setFormData] = useState({
    description: "",
    amount: "",
    category: "",
    date: "",
    type: "income",
  });

  const [editingId, setIsEditingId] = useState(null);
  const [expenses, setExpenses] = useState([]);
  const [filter, setFilter] = useState("all");
  const [toast, setToasts] = useState([]);

  useEffect(() => {
    const savedExpenses = JSON.parse(localStorage.getItem("expenses"));
    if (savedExpenses) {
      setExpenses(savedExpenses);
    }
  }, []);

  useEffect(() => {
    if (expenses.length > 0) {
      localStorage.setItem("expenses", JSON.stringify(expenses));
    }
  }, [expenses]);

  //Toast nottification

  const showToast = (message, type = "succes") => {
    const id = Date.now();
    const toast = { id, message, type };
    setToasts((prev) => [...prev, toast]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const RemoveToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Calculates the total income
  const totalIncome = expenses
    .filter((exp) => exp.type === "income")
    .reduce((acc, exp) => {
      const amount = parseFloat(exp.amount);
      return isNaN(amount) ? acc : acc + amount;
    }, 0);

  // Calculates the total expense
  const totalExpenses = expenses
    .filter((exp) => exp.type === "expense")
    .reduce((acc, exp) => {
      const amount = parseFloat(exp.amount);
      return isNaN(amount) ? acc : acc + amount;
    }, 0);

  // Calculates balance
  const balance = totalIncome - totalExpenses;

  //Filter expense

  const filteredExpenses = expenses.filter((exp) => {
    if (filter === "all") return true;
    return exp.type === filter;
  });

  const handleEdit = (expense) => {
    setFormData({
      description: expense.description,
      amount: expense.amount.toString(),
      category: expense.category,
      date: expense.date,
      type: expense.type,
    });
    setIsEditingId(expense.id);
    showToast("Entry loaded for editing", "info");
  };

  const handleDelete = (id) => {
    const expensetoDelete = expenses.find((exp) => exp.id === id);
    setExpenses(expenses.filter((exp) => exp.id !== id));
    showToast(
      `${
        expensetoDelete?.type === "income" ? "Income" : "Expense"
      } deleted succesfully `,
      "error"
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-black p-4">
      {/* Toast */}

      <Toast Toast={toast} RemoveToast={RemoveToast} />

      {/* Header */}

      <div className="max-w-7xl mx-auto">
        <Header />

        {/* Data cards */}
        <DataCard
          totalIncome={totalIncome}
          totalExpenses={totalExpenses}
          balance={balance}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 px-4">
          {/* Expenses Form */}
          <div className="md:col-span-2 lg:col-span-2">
            <ExpenseInputForm
              formData={formData}
              setFormData={setFormData}
              editingId={editingId}
              setIsEditingId={setIsEditingId}
              expenses={expenses}
              setExpenses={setExpenses}
              showToast={showToast}
            />
          </div>
          <div className="md:col-span-3 lg:col-span-3 flex justify-center ">
            <div
              className="bg-white/5 backdrop-blur-lg rounded-3xl border
            border-white/10 shadow-2xl overflo-hidden w-full max-w-2xl"
            >
              <FilterMenu filter={filter} setFilter={setFilter} />

              {/* Expenses List */}
              <ExpensesList
                filteredExpenses={filteredExpenses}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
