let username=localStorage.getItem("username")

let h1=document.createElement("h1")
h1.innerText=`Hai ${username}, welcome to Masai School, Please login`

document.querySelector("#h1").append(h1)


class user {
    constructor(name, password) {
        let detailsarray = JSON.parse(localStorage.getItem("stuarray"))

        detailsarray.forEach((el) => {
            this.name = el.name;
            this.password = el.password;
        })
    }

    login(username, password) {

        if (username === this.name && password === this.password) {
            alert("Login succesful");
            window.location.href="admindashboard.html"
        } else {
            alert("Credentials not match!..");
        }

    }
}
class student extends user {
    constructor(name, password) {
        super(name, password)
    }
}
class admin extends user {
    constructor(name, password) {
        super(name, password)
    }
}

document.querySelector("form").addEventListener("submit", studentadmin)

function studentadmin() {
    event.preventDefault()
    let name = document.querySelector("#name").value
    let password = document.querySelector("#paswrd").value

    let a1 = new student(name, password)
    a1.login(name, password)


    console.log(a1)
    // })
}
