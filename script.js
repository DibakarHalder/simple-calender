const monthName = ['January','February','March','April','May','June','July','August','September','October','November','December'];

const dayName = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

let d = new Date();
let month = d.getMonth(); //0-11
let year = d.getFullYear(); //2019

function setYear(){
    if(month >= 12){
        month = 0;
        year += 1
    }
    if(month < 0){
        month = 11;
        year -= 1
    }
}

function incrementMonth(){
    month +=1;
    setYear();
    calendar(month, year)
}

function decrementMonth(){
    month -=1;
    setYear();
    calendar(month, year)
}

function incrementYear(){
    year +=1;
    calendar(month, year)
}

function decrementYear(){
    year +=1;
    calendar(month, year)
}

function calendar(month, year){
    const firstDate = monthName[month] + ' 1 ' + year;
    //April 1 2019
    const tmp = new Date(firstDate).toDateString();
    //Mon Apr 01 2019 ...
    const firstDay = tmp.substring(0, 3);
    //Mon
    const dayNo = dayName.indexOf(firstDay) //1
    const days = new Date(year, month+1, 0).getDate() //30

    document.getElementById("calendar-month-year").innerHTML = monthName[month]+" "+year;
    document.getElementById("calendar-dates").innerHTML = "";
    document.getElementById("calendar-dates").appendChild(getCalendar(dayNo, days));
};

function getCalendar(dayNo, days){
    var table = document.createElement('table');
    var r1 = document.createElement('tr');
    //row for the day letters
    for(var c=0; c<=6 ; c++){
        var day = 'SMTWTFS'[c]
        var td = document.createElement('td')
        td.innerHTML = day;
        r1.appendChild(td)
    }
    table.appendChild(r1)
    //create 2nd row
    var r2 = document.createElement('tr');
    var c;
    for(c=0; c<=6 ; c++){
        if(c === dayNo){
            break;
        }
        var td = document.createElement('td')
        td.innerHTML = "";
        r2.appendChild(td)
    }
    
    var count = 1;

    for(; c<=6 ; c++){
        var td = document.createElement('td')
        td.innerHTML = count;
        r2.appendChild(td);
        count++;
    }
    table.appendChild(r2);
    //rest of the date rows
    for (var r =3; r<=7; r++){
        var row = document.createElement('tr');
        for(var c=0; c<=6 ; c++){
            if(count > days){
                table.appendChild(row);
                return table
            }
            var td = document.createElement('td')
            td.innerHTML = count;
            row.appendChild(td);
            count++;
        }
        table.appendChild(row)
    }
    
    return table
}

calendar(month, year);