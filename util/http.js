import axios from "axios";

export function storeExpense(expenseData) {
  axios.post(
    "https://react-native-course-9949e-default-rtdb.europe-west1.firebasedatabase.app/expenses.json",
    expenseData
  );
}
