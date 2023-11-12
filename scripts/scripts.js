let myDate = new Date() 
function Greeting(Hours) {
    if (Hours <=11){
        let announcement = document.getElementById("greeting");
        announcement.textContent = "Good Morning";
    }
    else if (Hours >11 && Hours <=18){
        let announcement = document.getElementById("greeting");
        announcement.textContent = "Good Afternoon";
    }
    else if (Hours > 19){
        let announcement = document.getElementById("greeting");
        announcement.textContent = "Good Evening";
    }
} 
Greeting(myDate.getHours());

let myTime = new Date()
function WeekDay(Day){
    switch(Day){
        case 0:{
            let DayOfWeek = document.getElementById("weekday");
            DayOfWeek.textContent = "Sunday";
            break;}
        case 1:{
            let DayOfWeek = document.getElementById("weekday");
            DayOfWeek.textContent = "Monday";
            break;}
        case 2:{
            let DayOfWeek = document.getElementById("weekday");
            DayOfWeek.textContent = "Tuesday";
            break;}
        case 3:{
            let DayOfWeek = document.getElementById("weekday");
            DayOfWeek.textContent = "Wednesday";
            break;}
        case 4:{
            let DayOfWeek = document.getElementById("weekday");
            DayOfWeek.textContent = "Thursday";
            break;}
        case 5:{
            let DayOfWeek = document.getElementById("weekday");
            DayOfWeek.textContent = "Friday";
            break;}
        case 6:{
            let DayOfWeek = document.getElementById("weekday");
            DayOfWeek.textContent = "Saturday";
            break;}
    }
    console.log(Day);
}
WeekDay(myTime.getDay());

let myDayMonth = new Date()
function MonthDay(DateNumber){
    let Number = document.getElementById("daynumber");
    Number.textContent = DateNumber;
    console.log(DateNumber);
}
MonthDay(myDayMonth.getDate());

let myMonth = new Date()
function MonthName(Month){
    switch(Month){
        case 0:{
            let ShowMonth = document.getElementById("month");
            ShowMonth.textContent = "January";
            break;}
        case 1:{
            let ShowMonth = document.getElementById("month");
            ShowMonth.textContent = "February";
            break;}
        case 2:{
            let ShowMonth = document.getElementById("month");
            ShowMonth.textContent = "March";
            break;}
        case 3:{
            let ShowMonth = document.getElementById("month");
            ShowMonth.textContent = "April";
            break;}
        case 4:{
            let ShowMonth = document.getElementById("month");
            ShowMonth.textContent = "May";
            break;}
        case 5:{
            let ShowMonth = document.getElementById("month");
            ShowMonth.textContent = "June";
            break;}
        case 6:{
            let ShowMonth = document.getElementById("month");
            ShowMonth.textContent = "July";
            break;}
        case 7:{
            let ShowMonth = document.getElementById("month");
            ShowMonth.textContent = "August";
            break;}
        case 8:{
            let ShowMonth = document.getElementById("month");
            ShowMonth.textContent = "September";
            break;}
        case 9:{
            let ShowMonth = document.getElementById("month");
            ShowMonth.textContent = "October";
            break;}
        case 10:{
            let ShowMonth = document.getElementById("month");
            ShowMonth.textContent = "November";
            break;}
        case 11:{
            let ShowMonth = document.getElementById("month");
            ShowMonth.textContent = "December";
            break;}
    }
    console.log(Month);
}
MonthName(myMonth.getMonth());

let myLink = document.getElementById("Test Link");
myLink.ondblclick = function(){
    alert("are you sure?");
}

let form = document.getElementById("user-details");

let user = form.elements["user-name"];
let userTip = document.getElementById("user-name tip");
let address1 = form.elements["address 1"];
let address1Tip = document.getElementById("address 1 tip");
let address2 = form.elements["address 2"];
let address2Tip = document.getElementById("address 2 tip");
let postCode = form.elements["postcode"];
let postCodeTip = document.getElementById("postcode tip");

function checkUsername(){
    if(user.value.length <4){
        userTip.textContent = "Please make sure Name is 4 characters"; 
    } else{
        userTip.textContent = "";}
    }
function checkUserAddress1(){
    if(address1.value.length <4){
            address1Tip.textContent = "Please make sure Address Line 1 is 8 characters"; 
    } else{
        address1Tip.textContent = "";}
}
function checkUserAddress2(){
    if(address2.value.length <4){
            address2Tip.textContent = "Please make sure Address Line 2 is 4 characters"; 
    } else{
        address2Tip.textContent = "";}
}
function checkPostCode(){
    if(postCode.value.match(/\d+/) == null)
        postCodeTip.textContent = "Please use alphanumeric format";
    else{
        postCodeTip.textContent = "";
    }
}

user.addEventListener('blur', checkUsername);
address1.addEventListener('blur', checkUserAddress1);
address2.addEventListener('blur', checkUserAddress2);
postCode.addEventListener('blur', checkPostCode);

form.addEventListener("submit", event =>{
    
    let user = form.elements["user-name"];
    let userError = document.getElementById("user-name error");
    user.removeEventListener('blur', checkUsername);
    if(user.value.length <4){
        userError.textContent = "Name must be 4 characters";
    } else{
        userError.textContent = "";
    }
    let address1 = form.elements["address 1"];
    let address1Error = document.getElementById("address 1 error");
    if(address1.value.length <8){
        address1Error.textContent = "Address must be at least 8 characters";
    } else{
        address1Error.textContent = "";
    }
    let address2 = form.elements["address 2"];
    let address2Error = document.getElementById("address 2 error");
    if(address2.value.length <4){
        address2Error.textContent = "Address must be at least 4 characters";
    } else{
        address2Error.textContent = "";
    }
    event.preventDefault();
   
}
);


function Hotel(Name, Facilities, Rooms, Booked,){
    this.name = Name;
    this.facilities = Facilities;
    this.stars = function(StarNumber){
        if(this.facilities === "Y"){
            StarNumber = "5 Stars";
        } else if(this.facilities !=="Y"){
            StarNumber = "3 Stars"
        }
        this.starnumber = StarNumber;
        console.log(StarNumber);
    }
    this.rooms = Rooms; 
    this.booked = Booked;
    console.log(this.name, this.facilities, this.rooms, this.booked);
    this.checkavailability = function(Available){
       Available = this.rooms - this.booked; 
       this.availability = Available;
       console.log(Available);
    }
}

let Parkside = new Hotel("Parkside", "N", 95, 40); 
Parkside.checkavailability();
Parkside.stars();
let hotel1name = document.getElementById("hotel1name");
hotel1name.textContent = Parkside.name;
let hotel1rooms = document.getElementById("hotel1totalrooms");
hotel1rooms.textContent = Parkside.rooms;
let hotel1freerooms = document.getElementById("hotel1availablerooms");
hotel1freerooms.textContent = Parkside.availability; 
let hotel1stars = document.getElementById("hotel1stars");
hotel1stars.textContent = Parkside.starnumber;
let ParksideString = JSON.stringify(Parkside);
console.log(ParksideString);

let Metropole = new Hotel("Metropole", "Y", 180, 87); 
Metropole.checkavailability();
Metropole.stars();
let hotel2name = document.getElementById("hotel2name");
hotel2name.textContent = Metropole.name;
let hotel2rooms = document.getElementById("hotel2totalrooms");
hotel2rooms.textContent = Metropole.rooms;
let hotel2freerooms = document.getElementById("hotel2availablerooms");
hotel2freerooms.textContent = Metropole.availability; 
let hotel2stars = document.getElementById("hotel2stars");
hotel2stars.textContent = Metropole.starnumber;

let Lakeview = new Hotel("Lakeview", "N", 47, 41); 
Lakeview.checkavailability();
Lakeview.stars();
let hotel3name = document.getElementById("hotel3name");
hotel3name.textContent = Lakeview.name;
let hotel3rooms = document.getElementById("hotel3totalrooms");
hotel3rooms.textContent = Lakeview.rooms;
let hotel3freerooms = document.getElementById("hotel3availablerooms");
hotel3freerooms.textContent = Lakeview.availability; 
let hotel3stars = document.getElementById("hotel3stars");
hotel3stars.textContent = Lakeview.starnumber;

function CharCount(e){
    let textEntered = document.getElementById("providefeedback").value;
    let charDisplay = document.getElementById("CharCount");
    let counter = (150-(textEntered.length));
    charDisplay.textContent = counter; 
    let charCountError = document.getElementById("CharCount Error");
    if(counter <0){
        charCountError.textContent = "You have exceeded the maximum  number of characters";
    } else if(counter >0){
        charCountError.textContent = "";
    }
}

let progress = document.getElementById("providefeedback");
progress.addEventListener('keyup', CharCount);

let myString = "The boy had 4 oranges";
let myPattern = new RegExp("[0-9]");
let result = myPattern.test(myString);
console.log(result);

let zipCode = "SLBD";
let outString = zipCode.match(/\d+/);
console.log(outString);






