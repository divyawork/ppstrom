const incomeList = [];
const expenseList = [];

const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const addIncomeButton = document.getElementById("addIncome");
const addExpenseButton = document.getElementById("addExpense");
const incomeTable = document.querySelector("table");
const totalIncomeSpan = document.getElementById("totalIncome");
const totalExpenseSpan = document.getElementById("totalExpense");
const balanceSpan = document.getElementById("balance");

addIncomeButton.addEventListener("click", () => {
    const description = descriptionInput.value;
    const amount = parseFloat(amountInput.value);
    if (description && !isNaN(amount) && amount > 0) {
        incomeList.push({ description, amount });
        updateTable();
    }
});

addExpenseButton.addEventListener("click", () => {
    const description = descriptionInput.value;
    const amount = parseFloat(amountInput.value);
    if (description && !isNaN(amount) && amount > 0) {
        expenseList.push({ description, amount });
        updateTable();
    }
});

function updateTable() {
    descriptionInput.value = "";
    amountInput.value = "";

    incomeTable.innerHTML = `
        <tr>
            <th>Description</th>
            <th>Amount (₹)</th>
            <th>Type</th>
        </tr>
    `;
    let totalIncome = 0;
    let totalExpense = 0;

    incomeList.forEach((income) => {
        incomeTable.innerHTML += `
            <tr>
                <td>${income.description}</td>
                <td>₹${income.amount.toFixed(2)}</td>
                <td>Income</td>
            </tr>
        `;
        totalIncome += income.amount;
    });

    expenseList.forEach((expense) => {
        incomeTable.innerHTML += `
            <tr>
                <td>${expense.description}</td>
                <td>₹${expense.amount.toFixed(2)}</td>
                <td>Expense</td>
            </tr>
        `;
        totalExpense += expense.amount;
    });

    totalIncomeSpan.textContent = totalIncome.toFixed(2);
    totalExpenseSpan.textContent = totalExpense.toFixed(2);
    balanceSpan.textContent = (totalIncome - totalExpense).toFixed(2);
}