function learnMore(courseId) {
    alert("More information about " + courseId + " will be available soon!");
}

function convertNumber() {
    let number = document.getElementById("number").value.trim();
    let fromBase = parseInt(document.getElementById("fromBase").value);
    let toBase = parseInt(document.getElementById("toBase").value);

    let decimalValue;

    switch (fromBase) {
        case 2:
            if (!/^[01]+$/.test(number)) {
                document.getElementById(result).innerText = "Invalid binary number.";
                return;
            }
            decimalValue = parseInt(number, 2);
            break;
        case 10:
            if (!/^\d+$/.test(number)) {
                document.getElementById(result).innerText = "Invalid decimal number.";
                return;
            }
            decimalValue = parseInt(number, 10);
            break;
        case 16:
            if (!/^[0-9A-Fa-f]+$/.test(number)) {
                document.getElementById(result).innerText = "Invalid hexadecimal number.";
                return;
            }
            decimalValue = parseInt(number, 16);
            break;
        default:
            document.getElementById(result).innerText = "Invalid from base.";
            return;
    }

    let result = decimalValue.toString(toBase).toUpperCase();

    document.getElementById("result").innerText = "Result: " + result;
}

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("All fields are required!");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}