//taak1 week1
/*
let antw = "j"

while (antw == "j") {
    console.log(Math.round(Math.random()*50)+50)
    antw = prompt("geef j of n in")
}
*/
//taak2 week1
/*
for (let i = 0; i < 11; i++) {
    document.write("<table border =1>")
    document.write("<tr><td>" + i + "*10" + "</td><td>" + i*10 + "</td></tr>" )
    document.write("</table>")
}
*/

//taak3 week1
/*
let wapen = prompt("kies een wapen: 1 voor zwaard, 2 voor pijl en boog, 3 voor bijl")

switch (wapen) {
    case "1":
        wapen = 50;
        break;
    case "2":
        wapen = 50;
        break;
    case "3":
        wapen = 50;
        break;
}
let vecht=Math.random()*50;
if (wapen > vecht) {
    document.write("je bent gewonnen")
}
else {
    document.write("je bent verloren")
}
*/
//taak4 week1
/*
let getal = parseInt(prompt("kies een getal van 1 tot 10"));

if (getal > 10) {
    alert("fout!")
}
else {
    for (let i = 1; i <= getal; i++) {
        for (let j = 0; j < i; j++){
            document.write("*")
        }
        document.write("<br>")
    }
}

for (let i = 1; i <= 20; i++) {
    
    for (let j=0; j>5; j++){
        document.write("<table border = 1>")
        document.write("<tr><td>" + i +"</td> </tr>")
        document.write("</table>")
    }    
    document.write(j)
}
*/
