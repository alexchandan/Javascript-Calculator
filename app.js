const input = document.querySelector('input')
const buttons = document.querySelectorAll('.btn div')

// click event function
const buttonHandler = (e) => {
    if (e.target.innerHTML == "=") {
        input.value = eval(input.value)
    }

    else if (e.target.innerHTML == "C") {
        input.value = ""
    }
    else {
        input.value += e.target.innerHTML;
    }
}

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', buttonHandler);
})

// keypressing function
const keyPressHandler = (e) => {
    if (e.key == "Enter") {
        input.value = eval(input.value)
    }

    else if (e.key == "C") {
        input.value = ""
    }
    else {
        input.value += e.target.innerHTML;
    }
}
input.addEventListener('keyup', keyPressHandler);
