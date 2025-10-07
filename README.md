Expense Tracker

A React-based web application for tracking income and expenses, with data persisted in `localStorage`. Users can add, edit, and delete entries, filter by type (income/expense), and view financial metrics with a clean, responsive UI styled with Tailwind CSS and `lucide-react` icons.

## Features

- **Add/Edit Entries**: Input income or expense details with form validation (`ExpenseInputForm.jsx`).
- **View Entries**: Display all entries with category, date, and amount, with edit/delete options (`ExpensesList.jsx`).
- **Filter Entries**: Toggle between all, income, or expense entries (`FilterMenu.jsx`).
- **Financial Metrics**: View total income, expenses, and net balance (`DataCard.jsx`).
- **Notifications**: Show success, error, or info messages with toast notifications (`Toast.jsx`).
- **Persistent Storage**: Save entries to `localStorage` for persistence across sessions (`App.jsx`).
- **Responsive Design**: Styled with Tailwind CSS for a modern, mobile-friendly UI.
- **Icons**: Use `lucide-react` for intuitive visual feedback.

## Technologies Used

- **React**: Frontend library for building the UI.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **lucide-react**: Icon library for UI elements.
- **localStorage**: Browser storage for persisting expense data.
- **Vite**: Build tool for fast development and bundling.
- **Node.js**: Runtime for development and dependency management.

## Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Setup Instructions

1. Clone the repo: `git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git`
2. Go to the project folder: `cd YOUR_REPO_NAME`
3. Install dependencies: `npm install`
4. Start the app: `npm run dev`
5. Open `http://localhost:5173` in your browser (or the port Vite uses)
