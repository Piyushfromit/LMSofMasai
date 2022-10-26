import navbar from "./stunav.js";

document.querySelector("#navbar").innerHTML=navbar()



document.querySelector("#Lectures").addEventListener("click",Lecturesstu)

function Lecturesstu(){
    window.location.href="showlecturestudent.html"
}

document.querySelector("#Assignments").addEventListener("click",Assignmentsstu)

function Assignmentsstu(){
    window.location.href="showassignmentstudent.html"
}

document.querySelector("h1").style.textAlign="center"
document.querySelector("h1").style.marginTop="50px"

document.querySelector("#alllink").addEventListener("click",alllink)

function alllink(){
    window.location.href="studentdashboard.html"
}

let username=localStorage.getItem("username")

document.getElementById("acount").innerText=username



function logout(){
    window.location.href="index.html"
}
document.getElementById("select").addEventListener("change",logout)


// this.name=nm,
// this.link=li,
// this.date=dt,
// this.creator=cr,
// this.time=ti


// let lecarray=JSON.parse(localStorage.getItem("lecture"))||[];

// function studentdashborad(){
//     lecarray.forEach((el)=>{
//         let maindiv=document.createElement("div");

//         let title=document.createElement("h2");

//         let p1=document.createElement("p")


//     })
// }