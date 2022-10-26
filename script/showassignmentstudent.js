import navbar from "./stunav.js";

document.querySelector("#navbar").innerHTML=navbar()



let assarray=JSON.parse(localStorage.getItem("assignment"))

let displayall=(data)=>{
    
    document.querySelector("#container").innerHTML=""
    data.forEach((el,index)=>{
        let h2=document.createElement("h2")
        h2.innerText=el.name
        let p=document.createElement("p")
        p.innerText=el.creator+" Created Assignment Problem's at "+ el.time +" - "+ el.date
        let div=document.createElement("div")
        let maindiv=document.createElement("div")
        maindiv.setAttribute("class","maindiv")
        // div.onclick=()=>{
        // }
        let a=document.createElement("a")
        
        div.append(h2,p)
        a.append(div)
        maindiv.append(a)

        a.href=el.link

        document.querySelector("#container").append(maindiv)
    })
}

displayall(assarray)


document.querySelector("#Lectures").addEventListener("click",Lecturesstu)

function Lecturesstu(){
    window.location.href="showlecturestudent.html"
}

document.querySelector("#Assignments").addEventListener("click",Assignmentsstu)

function Assignmentsstu(){
    window.location.href="showassignmentstudent.html"
}

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
