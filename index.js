let gautam = document.getElementById('gautam');
buttons = document.querySelectorAll('button');
let gautamValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';

            gautamValue += buttonText;
            gautam.value = gautamValue
        } else if (buttonText == 'C') {
            gautamValue = "";
            gautam.value = gautamValue;

        } else if (buttonText == 'AC') {
            gautamValue = '';
            gautam.value = gautamValue;

        } else if (buttonText == "=") {
            gautam.value = eval(gautamValue)

        } else {
            gautamValue += buttonText;
            gautam.value = gautamValue
        }

    })
}