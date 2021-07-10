console.log("Lab 1 Challenge");
let hours = 40;
let wage = 10;
let salary = 0;
let accumalation = 0;
let weeks = 0;

if (hours <= 40) {
    salary = hours * wage;
    console.log("Salary is: $" + salary);
}
else {
    salary = (wage * 40) + (wage * (hours-40) * 1.5);
    console.log("Salary is: $" + salary);
}
while (accumalation < 1000000) {
    if (hours <= 40) {
        salary = hours * wage;
        weeks = weeks + 1;
    }
    else {
        salary = (wage * 40) + (wage * (hours-40) * 1.5);
        weeks = weeks + 1;
    }
    accumalation = accumalation + salary;
}
console.log("With a wage of $" + wage + " and hours of " + hours + " per week, it would take " + weeks + " weeks to earn $" + accumalation + ".")