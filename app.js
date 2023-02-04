//..question 1..//

// var a = 10
// var num = a

// document.write("<h1>Result :</h1>")
// document.write('<b>The value of A is :</b>' + " " + a +"<br />" + "<br />")


// var num = ++a
// document.write("The value of ++a is :" + " "+ num + "<br />")
// document.write("Now the value of a is :" + " "+ num +"<br />" + "<br />")

// var newnum = a++
// document.write("The value of a++ is :" + " "+ newnum + "<br />")
// document.write("Now the value of a is :" + " "+ a + "<br />" + "<br />")


// var newnum = --a
// document.write("The value of --a is :" + " "+ newnum + "<br />")
// document.write("Now the value of a is :" + " "+ newnum + "<br />" + "<br />")


// var newnum = a--
// document.write("The value of a-- is :" + " "+ newnum + "<br />")
// document.write("Now the value of a is :" + " "+ a + "<br />" + "<br />")


//..question 2..//
// var a = 2
// var b = 1
// document.write("a is" + " "+ a + "<br />")
// document.write("b is" + " "+ b + "<br />")
// document.write("<b> Explain the output </b> <br />" )

// var result = --a;
// document.write(result + "<br />")

// var result = --a - --b;
// document.write(result + "<br />") 

// var result = --a - --b + ++b;
// document.write(result + "<br />") 

// var result = --a - --b + ++b + b--;
// document.write(result + "<br />")


//..question 3..//
// var greet = "السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ";
// var name = prompt("your name")
// document.write(greet + "<br />" + name);


//..question 5..//

// var num = prompt('Which table do you want?', "5")

// document.write("<b>TABLE OF</b>" + " " + num + "<br /> <br />")


// var tb = num * 1
// document.write(num + "x" + "1" + "=" + " " + tb + "<br />")
// var tb = num * 2
// document.write(num + "x" + "2" + "=" + " " + tb + "<br />")
// var tb = num * 3
// document.write(num + "x" + "3" + "=" + " " + tb + "<br />")
// var tb = num * 4
// document.write(num + "x" + "4" + "=" + " " + tb + "<br />")
// var tb = num * 5
// document.write(num + "x" + "5" + "=" + " " + tb + "<br />")
// var tb = num * 6
// document.write(num + "x" + "6" + "=" + " " + tb + "<br />")
// var tb = num * 7
// document.write(num + "x" + "7" + "=" + " " + tb + "<br />")
// var tb = num * 8
// document.write(num + "x" + "8" + "=" + " " + tb + "<br />")
// var tb = num * 9
// document.write(num + "x" + "9" + "=" + " " + tb + "<br />")
// var tb = num * 10
// document.write(num + "x" + "10" + "=" + " " + tb + "<br />")




//..question 6..//
var subject_1 = prompt("Enter your subject 1", "Urdu")
// var subject_2 = prompt("Enter your subject 2", "English")
// var subject_3 = prompt("Enter your subject 3", "Math")
var totalMarks = 100
var obtained_1 = prompt("Obtained marks for first subject")
// var obtained_2 = prompt("Obtained marks for secound subject")
// var obtained_3 = prompt("Obtained marks for third subject")

var percentage = obtained_1 * 100 / totalMarks
// document.write(subject_1+ "&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160; " +totalMarks+ " &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;"+obtained_1+ " &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;"+percentage+"% <br />" )

document.write("<table>")
document.write("<tr>")
document.write("<th>subject</th>")
document.write("<th>Total Marks</th>")
document.write("<th>Obtained Marks</th>")
document.write("<th>percentage</th>")
document.write("</tr>")
document.write("<tr>")
document.write("<td>"+ subject_1 + "</td>")
document.write("<td>"+ totalMarks + "</td>")
document.write("<td>"+ obtained_1 + "</td>")
document.write("<td>"+ percentage +"%" + "</td>")
document.write("</tr>")
document.write("</table>")












