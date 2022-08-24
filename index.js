//document.getElementById("count-el").innerText=5
let count=0

let countEl = document.getElementById("count-el")
// //the DOM/document object model... how you use javaScript to modify a website
// //document... object
// //model 

 console.log(countEl)

 function increment(){
   count=count+1
    countEl.innerText=count
    console.log(count)
 }
 function save(){
     console.log("Previous entries: ", + count)
 }
let welcomeEl=document.getElementById("welcome-el")
let name="Clifford Ombiro Mwenda"
let message="Welcome back, "

welcomeEl.innerText= message + name
