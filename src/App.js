import ExpenseItem from "./components/ExpenseItem";

function App() {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const arr = [
    {
      expenseDate: new Date(2022, 3, 8).toLocaleDateString("tr-TR", options),
      expenseAmount: "169.00",
      expenseTitle: "Car Insurance",
    },
    {
      expenseDate: new Date(2022, 3, 5).toLocaleDateString("tr-TR", options),
      expenseAmount: "76.50",
      expenseTitle: "Groceries",
    },
    {
      expenseDate: new Date(2022, 3, 6).toLocaleDateString("tr-TR", options),
      expenseAmount: "25.89",
      expenseTitle: "Cinema",
    },
    {
      expenseDate: new Date(2022, 3, 1).toLocaleDateString("tr-TR", options),
      expenseAmount: "48.00",
      expenseTitle: "Coffee",
    },
    {
      expenseDate: new Date(2022, 3, 2).toLocaleDateString("tr-TR", options),
      expenseAmount: "48.00",
      expenseTitle: "Suite Hotel",
    },
  ];

  return (
    <div className="app-wrapper">
      <h2 className="app-title">My Expenses</h2>
        {arr.map((item, index) => (
          <ExpenseItem key={index} data={item} />
        ))}
    </div>
  );
}

export default App;
