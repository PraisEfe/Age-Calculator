//VARIABLE DECLARATION
let yearInput = document.getElementById("Year");
let monthInput = document.getElementById("Month");
let dayInput = document.getElementById("Day");
// let errorMessage = document.getElementById("reds");
let submitButton = document.getElementById("button"); 
let years = document.querySelector(".yy");
let months = document.querySelector(".mm");
let days = document.querySelector(".dd");
let error1 = document.querySelector(".dayPrompt");
let error2 = document.querySelector(".monthPrompt");
let error3 = document.querySelector(".yearPrompt");
let field = document.querySelector(".field")
let label1 = document.querySelector(".label1");
let label2 = document.querySelector(".label2");
let label3 = document.querySelector(".label3");




let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth() + 1; // Months are zero-based
let currentDay = currentDate.getDate();
let today = Date(currentDay, currentMonth, currentYear);
console.log(today)
let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];



 submitButton.addEventListener("click", () => {
  if(yearInput.value == 0 || yearInput.value.length > 4 || yearInput.value > currentYear || yearInput.value < 1900){
     error3.textContent = "Must be in the past";  
     error3.style.opacity = "1";
     label3.style.color = "hsl(0, 100%, 67%)";
     console.log("year");
     yearInput.style.borderColor = "hsl(0, 100%, 67%)";   //Error prompts for the yearInput field
  }

  if(monthInput.value == 0 || monthInput.value.length > 2 || monthInput.value > 12){
      error2.textContent = "Must be a valid month";
      error2.style.opacity = "1";
      label2.style.color = "hsl(0, 100%, 67%)";
      console.log("month");
      monthInput.style.borderColor = "hsl(0, 100%, 67%)"; //Error prompts for the monthInput field
  }

  if((dayInput.value == 0 || dayInput.value.length > 2 || dayInput.value > 31) && (monthInput.value !== 2)){
     error1.textContent = "Must be a valid day";
     console.log("day");
     error1.style.opacity = "1";
     label1.style.color = "hsl(0, 100%, 67%)";           //Error prompts for the dayInput field
     dayInput.style.borderColor = "hsl(0, 100%, 67%)";
     console.log("I")
  }

  if(yearInput.value.trim() == ''){
    error3.textContent = "This field is required";
    error3.style.opacity = "1";
  }
  if(monthInput.value.trim() == ''){
    error2.textContent = "This field is required";     //Error prompts if all/ each of the input fields are empty
    error2.style.opacity = "1";
  }
  if(dayInput.value.trim() == ''){
    error1.textContent = "This field is required";
    error1.style.opacity = "1";
  }


  if((monthInput.value == 4 || monthInput.value == 6 || monthInput.value == 8 || monthInput.value == 11) && dayInput.value == 31){
    error1.textContent = "Must be a valid date";
    error1.style.opacity = "1";                     //Error prompt if the month 
    console.log("invalid date");
    yearInput.style.borderColor = "hsl(0, 100%, 67%)";
    dayInput.style.borderColor = "hsl(0, 100%, 67%)";
    monthInput.style.borderColor = "hsl(0, 100%, 67%)";
    label1.style.color = "hsl(0, 100%, 67%)";  
    label2.style.color = "hsl(0, 100%, 67%)";  
    label3.style.color = "hsl(0, 100%, 67%)";  

    monthInput.addEventListener('click', () =>{
    error1.style.opacity = "0";
    monthInput.style.borderColor = "hsla(0, 0%, 8%, 0.4)";      //Removes the must be a valid date prompt if the month is invalid
    label2.style.color = "black";
    label2.style.opacity = "0.6";
    })
    
  }

   if((monthInput.value == 2 && dayInput.value > 29 && (yearInput.value % 4 == 0)) || (monthInput.value == 2 && dayInput.value > 28 && (yearInput.value % 4 !== 0))){
    error1.textContent = "Must be a valid date";
    error1.style.opacity = "1";                     //Error prompt is the dayInput in February is greater than 28 for a non leap year or if it is greater than 29 for a leap year
    console.log("invalid date");
    yearInput.style.borderColor = "hsl(0, 100%, 67%)";
    dayInput.style.borderColor = "hsl(0, 100%, 67%)";
    monthInput.style.borderColor = "hsl(0, 100%, 67%)";
    label1.style.color = "hsl(0, 100%, 67%)";  
    label2.style.color = "hsl(0, 100%, 67%)";  
    label3.style.color = "hsl(0, 100%, 67%)";  
  }


  if((yearInput.value == currentYear) && ((monthInput.value > currentMonth) || (dayInput.value > currentDay))){
    error1.textContent = "Must be a valid date";
    error1.style.opacity = "1";                     
    console.log("invalid date");
    yearInput.style.borderColor = "hsl(0, 100%, 67%)";
    dayInput.style.borderColor = "hsl(0, 100%, 67%)";   //if the date input is greater than the current date
    monthInput.style.borderColor = "hsl(0, 100%, 67%)";
    label1.style.color = "hsl(0, 100%, 67%)";  
    label2.style.color = "hsl(0, 100%, 67%)";  
    label3.style.color = "hsl(0, 100%, 67%)";  
  }

    //PROMPT TO RUN THE CALCULATOR WHEN ALL ERROR PROMPT CONDITIONS ARE FALSE, I NEGATED ALL THE ABOVE CONDITIONS
    if(!(yearInput.value == 0 || yearInput.value.length > 4 || yearInput.value > currentYear || yearInput.value < 1900) && !(monthInput.value == 0 || monthInput.value.length > 2 || monthInput.value > 12 ) &&
    !(dayInput.value == 0 || dayInput.value.length > 2 || dayInput.value > 31) && !(yearInput.value.trim() == '') && !(monthInput.value.trim() == '') && !(dayInput.value.trim() == '') && 
    !((monthInput.value == 4 || monthInput.value == 6 || monthInput.value == 8 || monthInput.value == 11) && dayInput.value == 31) && !((monthInput.value == 2 && dayInput.value > 29 && (yearInput.value % 4 == 0)) || (monthInput.value == 2 && dayInput.value > 28 && (yearInput.value % 4 !== 0))) &&
    !((yearInput.value == currentYear) && ((monthInput.value > currentMonth) || (dayInput.value > currentDay)))){
      ageCalc();

    error1.style.opacity = "0";
    dayInput.style.borderColor = "hsla(0, 0%, 8%, 0.4)";
    label1.style.color = "black";
    label1.style.opacity = "0.6"

    error2.style.opacity = "0";
    monthInput.style.borderColor = "hsla(0, 0%, 8%, 0.4)";     //returns stylings to default
    label2.style.color = "black";
    label2.style.opacity = "0.6"; 

    error3.style.opacity = "0";
    yearInput.style.borderColor = "hsla(0, 0%, 8%, 0.4)";
    label3.style.color = "black";
    label3.style.opacity = "0.6";
    }
  
 })


 //AGE CALCULATOR FUNCTION
 function ageCalc(){
    
    if (dayInput.value > currentDay){
        currentDay = currentDay + month[currentMonth - 1];
        currentMonth = currentMonth - 1;

    }

    if (monthInput.value > currentMonth){
      currentMonth = currentMonth + 12;
      currentYear = currentYear- 1;
    }

    let d = currentDay - dayInput.value;
    let m = currentMonth - monthInput.value;
    let y = currentYear - yearInput.value;

    years.textContent = y;
    months.textContent = m;
    days.textContent = d; 

 }


 //RETURNS THE STYLINGS TO DEFAULT
    dayInput.addEventListener('click', () =>{
      error1.style.opacity = "0";
      dayInput.style.borderColor = "hsla(0, 0%, 8%, 0.4)";
      label1.style.color = "black";
      label1.style.opacity = "0.6"
    
    })

    dayInput.addEventListener('focus', () =>{
      error1.style.opacity = "0";
      dayInput.style.borderColor = "hsla(0, 0%, 8%, 0.4)";
      label1.style.color = "black";
      label1.style.opacity = "0.6"
    
    })

    
    monthInput.addEventListener('click', () =>{
      error2.style.opacity = "0";
      monthInput.style.borderColor = "hsla(0, 0%, 8%, 0.4)";     
      label2.style.color = "black";
      label2.style.opacity = "0.6";
    })

    monthInput.addEventListener('focus', () =>{
      error2.style.opacity = "0";
      monthInput.style.borderColor = "hsla(0, 0%, 8%, 0.4)";     
      label2.style.color = "black";
      label2.style.opacity = "0.6";
    })

    
    yearInput.addEventListener('click', () =>{
      error3.style.opacity = "0";
      yearInput.style.borderColor = "hsla(0, 0%, 8%, 0.4)";
      label3.style.color = "black";
      label3.style.opacity = "0.6";
    })

    yearInput.addEventListener('focus', () =>{
      error3.style.opacity = "0";
      yearInput.style.borderColor = "hsla(0, 0%, 8%, 0.4)";
      label3.style.color = "black";
      label3.style.opacity = "0.6";
    })