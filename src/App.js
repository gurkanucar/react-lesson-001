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
      id: 1,
      expenseDate: new Date(2022, 3, 8).toLocaleDateString("tr-TR", options),
      expenseAmount: "169.00",
      expenseTitle: "Car Insurance",
    },
    {
      id: 2,
      expenseDate: new Date(2022, 3, 5).toLocaleDateString("tr-TR", options),
      expenseAmount: "76.50",
      expenseTitle: "Groceries",
    },
    {
      id: 3,
      expenseDate: new Date(2022, 3, 6).toLocaleDateString("tr-TR", options),
      expenseAmount: "25.89",
      expenseTitle: "Cinema",
    },
    {
      id: 4,
      expenseDate: new Date(2022, 3, 1).toLocaleDateString("tr-TR", options),
      expenseAmount: "48.00",
      expenseTitle: "Coffee",
    },
    {
      id: 5,
      expenseDate: new Date(2022, 3, 2).toLocaleDateString("tr-TR", options),
      expenseAmount: "48.00",
      expenseTitle: "Suite Hotel",
    },
    {
      id: 6,
      expenseDate: new Date(2022, 3, 2).toLocaleDateString("tr-TR", options),
      expenseAmount: "1230.00",
      expenseTitle: "New Tv",
    },
    {
      id: 7,
      expenseDate: new Date(2022, 3, 2).toLocaleDateString("tr-TR", options),
      expenseAmount: "39.99",
      expenseTitle: "Udemy Course",
    },
    {
      id: 8,
      expenseDate: new Date(2022, 3, 2).toLocaleDateString("tr-TR", options),
      expenseAmount: "25.00",
      expenseTitle: "Tava Ciger",
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
