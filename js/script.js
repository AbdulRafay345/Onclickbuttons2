document.getElementById("concatenateStrings").onclick = function () {
    document.getElementById("statement").innerHTML = ("")
    document.getElementById("output").innerHTML = ("")
    let value1 = prompt("Give The First Value.")
    let value2 = prompt("Give The second Value.")
    let value = value1 + value2
    document.getElementById("statement").innerHTML = (value)
}

document.getElementById("askName").onclick = function () {
    document.getElementById("statement").innerHTML = ("")
    document.getElementById("output").innerHTML = ("")
    let name = prompt("Your Full Name.")
    document.getElementById("statement").innerHTML = (name)
}

document.getElementById("comparisonOperators").onclick = function () {
    document.getElementById("statement").innerHTML = ("")
    document.getElementById("output").innerHTML = ("")
    document.getElementById("statement").innerHTML = ("<p class='text-start ms-2 pt-2'>There are six comparison operators that are given below:<br>1. '==' uses for equality in values only.<br>2. '===' uses for equality in values and data-type.<br>3. '<' less than<br>4. '>' greater than<br>5. '<=' less than equal<br>6. '>=' greater than equal.</p>")
}

document.getElementById("ifElseIf").onclick = function () {
    document.getElementById("statement").innerHTML = ("")
    document.getElementById("output").innerHTML = ("")
    document.getElementById("statement").innerHTML = ("<p class='text-start ms-2 pt-2'><code>document.getElementBy('ifelse').onclick = function () {<br> let marks = +prompt(Your Marks)<br> if(marks>=90) {<br> alert(You got A+)}<br>else{<br>alert(You are pass)}<br>} </code></p>")
    let marks = +prompt("Your Marks")
    if (marks >= 90) {
        alert("You got A+")
    } else {
        alert("You are pass")
    }
    document.getElementById("output").innerHTML = (marks)
}

document.getElementById("testingCondition").onclick = function () {
    document.getElementById("statement").innerHTML = ("")
    document.getElementById("output").innerHTML = ("")
    let weight = +prompt('Your weight')
    let time = +prompt('Please give time')
    let age = +prompt('Your age')
    let gender = prompt('Your gender')
    if(weight > 300 && time < 6 && age > 17 && gender === 'male') {
        alert("comeout to tryout!")
    }else {
        alert("comeout to our cookout!")
    }
    document.getElementById("statement").innerHTML = ("<p class='text-start ms-2 pt-2'><code>if(weight > 300 && time < 6 && age > 17 && gender === 'male') {<br> alert('come out to tryout!'); <br>}<br> else {<br> alert('comeout to our cookout!');<br>}</code></p>")
    document.getElementById("output").innerHTML = (weight && time && age && gender)
}

document.getElementById("statementNested").onclick = function () {
    document.getElementById("statement").innerHTML = ("")
    document.getElementById("output").innerHTML = ("")
    document.getElementById("statement").innerHTML = ("<p class='text-start ms-2 pt-2'><code>if(( x === y || a === b) && c === d)  {<br> g = h;<br>}else {<br> e = f;<br>}</code></p>")
    document.getElementById("output").innerHTML = ("<p class='text-start ms-2 pt-2'>There's an other way to code this, using nesting.<br> <code>if (c === d) {<br>  if(x === y) {<br>g = h;<br>}<br>else if (a === b){<br> g = h;<br>}<br>else {<br> e = f;<br>}<br>}<br>else { e = f;<br>}</code></p>")
}

document.getElementById("clearStatement").onclick = function () {
    document.getElementById("statement").innerHTML = ("")
}

document.getElementById("clearOutput").onclick = function () {
    document.getElementById("output").innerHTML = ("")
}