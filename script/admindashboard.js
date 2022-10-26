import navbar from "./stunav.js";

document.querySelector("#navbar").innerHTML=navbar()



let studentsarray = JSON.parse(localStorage.getItem("stuarray"))
//  let aper=localStorage.getItem("select")

 
 let displaydata=(data)=>{
  document.querySelector("tbody").innerText=""
        data.forEach((el,index)=>{
        let tr=document.createElement("tr")
        let td1=document.createElement("td")
        td1.innerText=el.name
        let td2=document.createElement("td")
        td2.innerText=el.id
        let td3=document.createElement("td")
        td3.innerText=el.email
        let td4=document.createElement("td")
        td4.innerText=el.password
        // let td5=document.createElement("td")
        // td5.innerText=aper
        let td6=document.createElement("td")
        td6.innerText="Remove"
        td6.style.cursor="pointer"
        td6.style.backgroundColor="rgb(255, 55, 55)"
        td6.addEventListener("click",function(){
          delestudent(index)
        })
        
        tr.append(td1,td2,td3,td4,td6)
        
        document.querySelector("tbody").append(tr)
        
    })
}

displaydata(studentsarray)

function addlecture(){
    window.location.href="addlecture.html"
}

document.querySelector("#adlec").addEventListener("click",addlecture)

function addassignment(){
    window.location.href="addassignment.html"
    
}
document.querySelector("#adass").addEventListener("click",addassignment)


function delestudent(index){
  studentsarray.splice(index,1)
  localStorage.setItem("stuarray",JSON.stringify(studentsarray))
  displaydata(studentsarray)
}

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

