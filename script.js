const form = document.querySelector('form');
const inputName = form.querySelector('input[type = "text"]');
const inputBtn = form.querySelector('input[type = "button"]');
const h2 = document.querySelector('h2');


function getSaturdayOfCurrentWeek() {
    //  countdown until every saturday
    const today = new Date();
    const first = today.getDate() - today.getDay() + 1;
    const sixth = first + 5;
    const countDown = sixth - first;
    return countDown;
}

function greeting(e) {
    //  get today
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const day = new Date();
    let today = weekday[day.getDay()];

    //  create smiley
    let smiley = document.createElement('h3');
    smiley.innerHTML = '<span style="font-size:100px;">&#128540;</span>'

    //  create greeting-text after click on button
    const welcome = document.createTextNode(
        `Hello ${inputName.value}!
        Today is ${today}.
        Only ${getSaturdayOfCurrentWeek()} days left until weeeeeeekend!
        `);

    //  reset old text of h2 (hard-coded in html) and show new text
    h2.textContent = ""
    h2.append(welcome, smiley);
};

inputBtn.addEventListener('click', greeting)