
var fname, hour, salary, xtrahour, overtime, totalSalary


// add event listener to the button and store collected data
document.querySelector('.submit').addEventListener('click', function(){
    
    fname =  document.querySelector('.names').value


    // no of hours
    hour =  document.querySelector('.hours').value
    if (isNaN(hour)) {
        
      hour = 'ERRORR!!! Enter A Number'
console.log('enter number');

    } else if (hour > 4) {
        hour = 'ERR0R!!! '
        console.log('number of hours can not be more than 4');

        
    } else {
        hour  = (hour*1000)
        salary = hour*30
        status = true
        console.log(salary);}

// calculating the over time worked
    xtrahour =  document.querySelector('.extra-time').value
    if (isNaN(xtrahour)) {
        xtrahour = 'ERRORR!!! '
console.log('enter a number');
    } else if (xtrahour > 19) {
xtrahour= 'ERROR!!! '
    } else{
        xtrahour  = (xtrahour*200)
        overtime = xtrahour*30
        console.log(overtime);
    
    }
    totalSalary = (salary + overtime)

    console.log(totalSalary);

    // calculate earnings and print to the Dom
    document.querySelector('.overtime').textContent = ` ${fname}Your Total extra hour payment Due For The Month Is ${overtime} Naira`
    document.querySelector('.salary').textContent = ` ${fname}Your Total Salary Due For The Month Is ${salary} Naira`
    document.querySelector('.totalpayment').textContent = ` ${fname}Your payment Due For The Month Is ${totalSalary} Naira`

})



