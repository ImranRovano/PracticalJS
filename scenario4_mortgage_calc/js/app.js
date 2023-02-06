
//delcared state of form
let state = {
    //price: document.querySelectorAll('[name="price"]')[0].value,
    price: getNumber(document.querySelectorAll('[name="price"]')[0].value),
    loan_years: document.querySelectorAll('[name="loan_years"]')[0].value,
    down_payment: document.querySelectorAll('[name="down_payment"]')[0].value,
    interest_rate: document.querySelectorAll('[name="interest_rate"]')[0].value,
    property_tax: document.querySelectorAll('[name="property_tax"]')[0].value,
    home_insurance: document.querySelectorAll('[name="home_insurance"]')[0].value,
    hoa: document.querySelectorAll('[name="hoa"]')[0].value,
}

// declared variables
let totalLoan,
totalMonths,
monthlyInterest,
monthlyPrincipalInterest,
monthlyPropertyTaxes,
monthlyHomeInsurance,
monthlyHOA,
monthlyTotal,
labels = ["Principal & Interest", "Property Tax", "Home Insurace", "HOA"],
    backgroundColor = [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
    ]
    borderColor = [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
    ]

// removes characters and returns only number
function getNumber(str){
    return Number(str.replace(/[^0-9\.-]+/g, ""))
}

// initialize chart js instances
let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: labels,
        datasets: [{
            label: '# of Votes',
            data: [
                monthlyPrincipalInterest,
                monthlyPropertyTaxes,
                monthlyHomeInsurance,
                monthlyHOA,
            ],
            backgroundColor: backgroundColor,
            borderColor: borderColor,
            borderWidth: 1
        }]
    }
});
myChart.options.animation = false;

//add event listeners to inputs
let i;
let inputTexts = document.getElementsByClassName('form-group__textInput');
//this is similar to doing the following but loops are better if there is a lot:
//inputTexts[0].addEventListener('input', () => console.log('input changed'))
//inputTexts[1].addEventListener('input', () => console.log('input changed'))
for(i = 0; i < inputTexts.length; i++) {
    //console.log(i)
    //console.log(inputTexts[i])
    //inputTexts[i].addEventListener('input', () => console.log('input changed'))
    //line below will what for any change in the input field and execute the "updateInputsState" function
    inputTexts[i].addEventListener('input', updateInputsState) //no need to put parenthasis, because event listener will trigger it
}

let inputSlides = document.getElementsByClassName('form-group__range-slide');
//this is similar to doing the following but loops are better if there is a lot:
//inputTexts[0].addEventListener('input', () => console.log('input changed'))
//inputTexts[1].addEventListener('input', () => console.log('input changed'))
for(i = 0; i < inputSlides.length; i++) {
    //line below will what for any change in the input slider and execute the "updateInputsState" function
    inputSlides[i].addEventListener('input', updateInputsState) //no need to put parenthasis, because event listener will trigger it
}

function updateInputsState(event){
    let name = event.target.name; //event becomes available when there is a change in the data
    let value = event.target.value; //event become available when there is a change in the data
    if(name == 'price'){
        value = getNumber(value); //this takes the "value" variable from "let value" and turns it into a number using the "getNumber()" function. then reassigns the result to the value variable
    }
    if(event.target.type == 'range'){
        let total = (document.getElementsByClassName(`total__${name}`))[0].innerHTML = `${value}`
    }
    state = { //this will change/update the follow items in the block. state comes from the state objects in the top of this file
        ...state,
        [name]: value //name comes from line 81 "let name" which connects to "event.target.name" object which is only available when there is a change in data
    }
    //console.log(event);
    //console.log(name + ':' + '' + value)
    //console.log(state)
    calculateData()
}

//target the form. this is to prevent having the website refresh
document.getElementsByTagName('form')[0].addEventListener('submit', (event) => {
    event.preventDefault(); //this disables submitting forms
    document.getElementsByClassName('mg-page__right')[0].classList.add('mg-page__right--animate');
    calculateData()
})

function calculateData(){
    totalLoan = state.price - (state.price * (state.down_payment / 100));
    totalMonths = state.loan_years * 12;
    monthlyInterest = (state.interest_rate / 100) / 12;
    monthlyPrincipalInterest = (
        totalLoan *
        (   //"**" means exponents
            (monthlyInterest * ((1 + monthlyInterest) ** totalMonths) ) / //"**" means exponents
            ((1 + monthlyInterest) ** totalMonths -1)
        )
    ).toFixed(2);
    monthlyPropertyTaxes = (
        (state.price * (state.property_tax / 100))
        / 12
    ).toFixed(2);
    monthlyHomeInsurance = state.home_insurance / 12;
    monthlyHOA = state.hoa / 12;
    monthlyTotal = 
        parseFloat(monthlyPrincipalInterest) +
        parseFloat(monthlyPropertyTaxes) + 
        parseFloat(monthlyHomeInsurance) + 
        parseFloat(monthlyHOA);

    document.getElementsByClassName('info__numbers--principal')[0].innerHTML = parseFloat(monthlyPrincipalInterest).toFixed(2);
    document.getElementsByClassName('info__numbers--property_taxes')[0].innerHTML = parseFloat(monthlyPropertyTaxes).toFixed(2);
    document.getElementsByClassName('info__numbers--home_insurance')[0].innerHTML = parseFloat(monthlyHomeInsurance).toFixed(2);
    document.getElementsByClassName('info__numbers--hoa')[0].innerHTML = parseFloat(monthlyHOA).toFixed(2);
    document.getElementsByClassName('info__numbers--total')[0].innerHTML = monthlyTotal.toFixed(2);

    //console.log(monthlyTotal)
    updateChart(myChart, labels, backgroundColor)
}
//console.log(inputTexts);

function updateChart(chart, label, color){
    chart.data.datasets.pop();
    chart.data.datasets.push({
        label: label,
        backgroundColor: color,
        data: [
            monthlyPrincipalInterest,
            monthlyPropertyTaxes,
            monthlyHomeInsurance,
            monthlyHOA
        ]
    });
    chart.options.transitions.active.animation.duration = 0;
    chart.update();
}

calculateData();