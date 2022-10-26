import navbar from "./stunav.js";

document.querySelector("#navbar").innerHTML=navbar()



        let lecarray=JSON.parse(localStorage.getItem("lecture"))||[];
    
        let addlecture=()=>{
            event.preventDefault()
    
            let name=document.querySelector("#lecname").value
            let link=document.querySelector("#leclink").value
            let date=document.querySelector("#lecdate").value
            let time=document.querySelector("#lectime").value
            let creat=document.querySelector("#leccreator").value
    
    
            let s1=new addlectureall(name,link,date,time,creat)
    
            lecarray.push(s1)
    
            localStorage.setItem("lecture",JSON.stringify(lecarray))
    
            alert("Lecture added")
            window.location.reload()
            console.log(lecarray)
        }
        
        document.querySelector("form").addEventListener("submit",addlecture)
        
        function addlectureall(nm,li,dt,ti,cr){
                this.name=nm,
                this.link=li,
                this.date=dt,
                this.creator=cr,
                this.time=ti
            }
    
            document.querySelector("#showlecture").addEventListener("click",showlecture)
            function showlecture(){
                window.location.href="showlectureadmin.html"
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