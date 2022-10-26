import navbar from "./stunav.js";

document.querySelector("#navbar").innerHTML=navbar()



let lecarray=JSON.parse(localStorage.getItem("lecture"))

let displayall=(data)=>{
    
    document.querySelector("#container").innerHTML=""
    data.forEach((el,index)=>{
        let h2=document.createElement("h2")
        h2.innerText=el.name
        let p=document.createElement("p")
        p.innerText=el.creator+" Scheduled General at "+ el.time +" - "+ el.date       
        let div=document.createElement("div")
        let maindiv=document.createElement("div")
        maindiv.setAttribute("class","maindiv")
        maindiv.style.display="flex"
        maindiv.style.justifyContent="space-between"
        
        let a=document.createElement("a")
        // a.setAttribute("id","anchor")
        let del=document.createElement("button")
        del.innerText="Remove"
        del.style.width="150px"
        del.style.height="50px"
        del.style.marginTop="30px"
        del.style.marginRight="30px"
        del.addEventListener("click",function(){
            deletepage(index)
        })
        
        div.append(h2,p)
        a.append(div)
        maindiv.append(a,del)

        a.href=el.link

        document.querySelector("#container").append(maindiv)
    })
}

displayall(lecarray)

let deletepage=(index)=>{
    lecarray.splice(index,1)
    localStorage.setItem("lecture",JSON.stringify(lecarray))
    displayall(lecarray)
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