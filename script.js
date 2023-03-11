// Get Current Number on Load
let number = localStorage.getItem("number");
if (!number) {
    number = 0
}

// Single Function to update number
const updateNumber = ({ target }) => {
    if (target.id === "increase") {
        number++
    } else if (target.id === "decrease") {
        number--
    } else {
        number = 0
    }

    // Update Number Storage and DOM
    localStorage.setItem("number", number);
    updateDom();
}

// Reusable update DOM function
const updateDom = () => {
    document.getElementById("number").innerText = number;
}

// Event Listeners
const idArray = ["increase", "decrease", "reset"]
for (let index = 0; index < idArray.length; index++) {
    document.getElementById(idArray[index]).addEventListener("click", updateNumber)
}

// Update DOM on Load
updateDom();