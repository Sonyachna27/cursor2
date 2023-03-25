const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };


function getMyTaxes (salary) {
     return this.tax * salary;
}
console.log(getMyTaxes.call(ukraine, 5000));

function getMiddleTaxes (country){
return this.tax * this.middleSalary
}
console.log(getMiddleTaxes.call(latvia));

function getTotalTaxes (country) {
    return this.tax * this.middleSalary * this.vacancies
}
console.log(getTotalTaxes.call(litva));

function getMySalary(country) {
    let res = {}
    res.salary = Math.floor(Math.random() * (2000 - 1500) + 1500);
    res.taxes = res.salary * country.tax;
    res.profit = res.salary - res.taxes;
    console.log(res)
}

let interval =  setInterval(getMySalary, 10000, latvia );
setTimeout(() => { clearInterval(interval)}, 30000);
