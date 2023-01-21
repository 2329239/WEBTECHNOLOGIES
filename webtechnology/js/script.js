document.getElementById("myButton").onclick = function(){
    let radius = document.getElementById("myNumber").value;
    console.log(radius);
    const PI = 3.14;
    let circumference = 2 * PI * radius;
    document.getElementById("circumference").innerHTML = "Hello, Circumference" + circumference; // inner html overwrite
    // document.getElementById("circumference").append(circumference); // it is a function which will not overwrite and add it in there