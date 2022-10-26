import navbar from "./stunav.js";

document.querySelector("#navbar").innerHTML=navbar()




let assarray=JSON.parse(localStorage.getItem("assignment"))||[];
    
let addassignment=()=>{
    event.preventDefault()

    let name=document.querySelector("#assname").value
    let link=document.querySelector("#asslink").value
    let date=document.querySelector("#assdate").value
    let time=document.querySelector("#asstime").value
    let creat=document.querySelector("#asscreator").value

    let s1=new addassignmentall(name,link,date,time,creat)

    assarray.push(s1)

    localStorage.setItem("assignment",JSON.stringify(assarray))

    // if ()

    alert("Assignment added")
    window.location.reload()
    
    console.log(assarray)
}

document.querySelector("form").addEventListener("submit",addassignment)

function addassignmentall(nm,li,dt,ti,cr){
        this.name=nm,
        this.link=li,
        this.date=dt,
        this.creator=cr,
        this.time=ti
    }

    function showassignment(){
        window.location.href="showassignmentadmin.html"
    }

    document.querySelector("#showassignment").addEventListener("click",showassignment)



document.querySelector("#Lectures").addEventListener("click",Lecturesstu)

function Lecturesstu(){
window.location.href="showlectureadmin.html"
}

document.querySelector("#Assignments").addEventListener("click",Assignmentsstu)

function Assignmentsstu(){
window.location.href="showassignmentadmin.html"
}


let username=localStorage.getItem("username")

document.getElementById("acount").innerText=username

function logout(){
    window.location.href="index.html"
}
document.getElementById("select").addEventListener("change",logout)



document.querySelector("#alllink").addEventListener("click",alllink)

function alllink(){
    window.location.href="admindashboard.html"
}

