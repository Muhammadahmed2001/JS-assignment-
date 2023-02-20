

//..question 1..//

// var a = [['ahmed'],'karim','samad'];
// console.log(a);

//..question 2..//
// var a =[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
// document.write(a[0].join("")+"<br />"+a[1].join("")+"<br />"+a[2].join("")+"<br />");

//..question 3..//
// for(var i = 1; i <= 10;i++){
//     console.log(i);
// }

//..question 4..//

// var num = prompt("Enter the number for table");
// var len = prompt("Enter lenght multiplication table ")
// for (i = 1; i <= len; i++) {
//     document.write(num+" "+"x"+" "+i+" "+"="+" "+i*num+"<br />")
// }


//..question 5..//

// var fruit = ["apple", "banana", "mango", "orange", "strawberry"];

// for (i = 0; i < fruit.length; i++) {
//     document.write(fruit[i] + '<br />');
// }

// for (i = 0; i < fruit.length; i++) {

//     document.write("Element in index" + " " + i + " " + 'is' + " " + fruit[i] + "<br />")
// }


//..question 6..//

//====>(a)
// for(i = 1;i <= 15;i++){
//     document.write(i+"<br />");
// }

//====>(b)
// for (i = 10; i > 0; i--) {
//     document.write(i + "<br />")
// }

//====>(c)
// for (i = 0; i <= 10; i++) {
// document.write8(i * 2);
// }

//====>(d)
// for (i = 1; i <= 20; i++){
//     if((i % 2)!=0){
//         document.write(i)
//     }
// }

//====>(e)
// for (i = 1; i <= 10; i++){
//     document.write(2*i+"k"+" ");
// }


// ..question 7..//
// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// var order = prompt("Wellcome to Karachi Bakery. What do you want to order sir?");
// var stock = "";
// for (i = 0; i < items.length; i++) {
//     if (items[i] === order) {
//         stock = "available";
//         break
//     }
// }

// if (stock == "available") {
//     alert(order + " " + "is available at Index " + i + " in our bakery")
// } else {
//     alert("We are sorry ." + order + " " + "is not available in our bakery");
// }


//..question 8..//
// var arr = [24, 53, 78, 91, 12];
// document.write("Array items :"+" "+arr + "<br />");
// var large = [arr[0]];

// for (i = 0; i < arr.length; i++) {
//     if (large < arr[i]) {
//         large = arr[i]
//     }

// }
// document.write("The largest number is "+ " " + large)


//..question 9..//
// var arr = [24, 53, 78, 91, 12];
// document.write("Array items :" + " " + arr + "<br />");
// var small = [arr[0]];
// for (i = 0; i < arr.length; i++) {
//     if (small > arr[i]) {
//         small = arr[i]
//     }
// }
// document.write("The smallest number is :" + " " + small);



//..question 10..//
// for (i = 1; i <= 20;i++){
// document.write(i*5+"-")
// }