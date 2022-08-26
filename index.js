//document.getElementById("count-el").innerText=5
let count=0

let countEl = document.getElementById("count-el")
// //the DOM/document object model... how you use javaScript to modify a website
// //document... object
// //model 

 console.log(countEl)

 function increment(){
   count+=1
    countEl.textContent=count
    console.log(count)
 }
//  function savebtn(){
//      console.log("Previous entries: ", + count)
//  }//not being used
let welcomeEl=document.getElementById("welcome-el")
let name="Clifford Ombiro Mwenda"
let message="Welcome back, "

welcomeEl.innerText= message + name
welcomeEl.innerText= welcomeEl.innerText + "!"

let saveEl=document.getElementById("save-el")
function save(){
let countDashula=count+" - "
saveEl.textContent += countDashula
count=0
countEl.textContent=count
}

