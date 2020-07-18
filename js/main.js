
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];

function submitFullNames(){
    var day = parseInt(document.getElementById('day').value);
    var month = parseInt(document.getElementById('month').value);
    var year = document.getElementById('year').value;
    var cc = parseInt(year.slice(0, 2));
    var yy = parseInt(year.slice(2, 4));

    alert(year);
}



// function akanNames(){
//     event.preventDefault();
//     var Input = document.getElementById('yearOfBirth').value;
//     var day = new Date (Input);
//     var CC, YY, MM;

//     if (day.valueOf()){
//         CC = day.getDay();
//         MM = day.getMonth();
//         YY = day.getFullYear();
//     }
//     else{
//         alert("Invalide date"); //Validate date
//     }


//     var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
//     var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
//     var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
//     // var gender = document.getElementById('genders').value;
//     var dayCalculate = parseInt(((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10))) % 7;


// var gender = document.getElementById('genders').value;
// console.log(dayCalculate);
// if (document.getElementById('male').checked) {
//   gender = document.getElementById('male').value;
//   alert(" Since you were born on " + daysOfWeek[dayCalculate] + ',' + " your name is " + maleNames[dayCalculate]);
//   document.getElementById('result').innerHTML = maleNames[dayCalculate];

// }

// }




