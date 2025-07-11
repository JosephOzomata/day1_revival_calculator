let display =document.getElementById("display")
let one = document.getElementById("one")
let two = document.getElementById("two")
let three = document.getElementById("three")
let four = document.getElementById("four")
let five = document.getElementById("five")
let six = document.getElementById("six")
let seven = document.getElementById("seven")
let eight = document.getElementById("eight")
let nine = document.getElementById("nine")
let zero = document.getElementById("zero")
let leftbrac = document.getElementById("leftBrac")
let rightbrac = document.getElementById("rightBrac")
let exp = document.getElementById("exp")
let cancel = document.getElementById("cancel")
let equals = document.getElementById("answer")
let clear = document.getElementById("clear")
let plus = document.getElementById("plus")
let minus = document.getElementById("minus")
let divide = document.getElementById("divide")
let multiply = document.getElementById("multiply")


// one = 1
// two = 2 
// three = 3 
// four = 4
// five = 5
// six = 6
// seven = 7
// eight = 8
// nine = 9
// zero = 0


let content = ""


one.onclick = function(){
    content += 1
    display.innerHTML = content
}

two.onclick = function(){
    content += 2
    display.innerHTML = content
}

three.onclick = function(){
    content += 3
    display.innerHTML = content
}

four.onclick = function(){
    content += 4
    display.innerHTML = content
}

five.onclick = function(){
    content += 6
    display.innerHTML = content
}

six.onclick = function(){
    content += 6
    display.innerHTML = content
}

seven.onclick = function(){
    content += 7
    display.innerHTML = content
}

eight.onclick = function(){
    content += 8
    display.innerHTML = content
}

nine.onclick = function(){
    content += 9
    display.innerHTML = content
}

zero.onclick = function(){
    content += 0
    display.innerHTML = content
}

plus.onclick = function(){
    content += "+"
    display.innerHTML = content
}

minus.onclick = function(){
    content += "-"
    display.innerHTML = content
}

divide.onclick = function(){
    content += "/"
    display.innerHTML = content
}

multiply.onclick = function(){
    content += "*"
    display.innerHTML = content
}


leftbrac.onclick = function(){
    content += "("
    display.innerHTML = content
}

rightbrac.onclick = function(){
    content += ")"
    display.innerHTML = content
}


clear.onclick = function(){
    content = ""
    display.innerHTML = content
}

exp.onclick = function(){
    content += "**"
    display.innerHTML = content
}
equals.onclick = function(){
    display.innerHTML = eval(content)
    content = eval(content)
    
}

cancel.onclick = function(){
    content = content.toString()
    content = content.slice(0, content.length - 1)
    display.innerHTML = content
}