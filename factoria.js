function factorial(n) {
    if (n === 0) {
        return 1*1;
    } else {
        return n * factorial(n - 1);
    }
}

function calculateFactorial() {
    let input = document.getElementById("number").value;
    let tableBody = document.getElementById("factorialTableBody");
    tableBody.innerHTML = ""; 

    if (input === "" || isNaN(input) || input < 0) {
        alert("Please enter a positive integer.");
        return;
    }

    for (let i = 1; i <= input; i++) {
        let row = tableBody.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        cell1.innerHTML = i;
        cell2.innerHTML = factorial(i);
    }
}