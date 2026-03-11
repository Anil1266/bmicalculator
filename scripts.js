function calculateBMI(){

let weight=document.getElementById("weight").value
let height=document.getElementById("height").value

height=height/100

let bmi=weight/(height*height)

bmi=bmi.toFixed(1)

let category=""

if(bmi<18.5){
category="Underweight"
}
else if(bmi<25){
category="Normal weight"
}
else if(bmi<30){
category="Overweight"
}
else{
category="Obese"
}

document.getElementById("result").innerHTML=
"Your BMI: "+bmi+" ("+category+")"

}



function calculateWater(){

let weight=document.getElementById("weight").value

let water=weight*35

water=water/1000

water=water.toFixed(2)

document.getElementById("result").innerHTML=
"You should drink about "+water+" liters of water daily"

}



function calculateIdealWeight(){

let height=document.getElementById("height").value

let weight=(height-100)*0.9

weight=weight.toFixed(1)

document.getElementById("result").innerHTML=
"Your ideal weight is about "+weight+" kg"

}



function calculateBMR(){

let weight=document.getElementById("weight").value
let height=document.getElementById("height").value
let age=document.getElementById("age").value

let bmr=(10*weight)+(6.25*height)-(5*age)+5

bmr=bmr.toFixed(0)

document.getElementById("result").innerHTML=
"Your BMR is "+bmr+" calories/day"

}



function calculateTDEE(){

let weight=document.getElementById("weight").value
let height=document.getElementById("height").value
let age=document.getElementById("age").value
let activity=document.getElementById("activity").value

let bmr=(10*weight)+(6.25*height)-(5*age)+5

let tdee=bmr*activity

tdee=tdee.toFixed(0)

document.getElementById("result").innerHTML=
"Your TDEE is "+tdee+" calories/day"

}
