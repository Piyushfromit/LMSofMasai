let studentsarray = JSON.parse(localStorage.getItem("stuarray")) || []

class user {
    constructor(name, password, email,id ) {
        this.name = name;
        this.password = password;
        this.email = email;
        this.id = id;
    }
    signUp(name, password, email, id) {
        let isValidated = false;

        isValidated =
            this.validUsername(name) && this.validPassword(password);

        if (isValidated) {
            this.name = name;
            this.password = password;
            this.email = email;
            this.id = id;

            alert("Signup successfully");

            studentsarray.push(this)
            localStorage.setItem("username",name)
            localStorage.setItem("stuarray", JSON.stringify(studentsarray))

        } else {
            alert("Follow rules");
        }
    }
    validUsername(name) {
        return true;
    }
    validPassword(password) {
        // if (password.length>=6) {
        return true;
        // }

    }
}
class student extends user {
    constructor(name, password, email, id) {
        super(name, password, email, id);

    }
    // submitAssignment() {
    //     this.numOfAssignment++;
    // }
}
class admin extends user {
    constructor(name, password, email, id) {
        super(name, password, email, id)
    }
    // remove() {

    // }
}

document.querySelector("#form").addEventListener("submit", abcdef)

function abcdef() {

    event.preventDefault()

    let name = document.querySelector("#name").value
    let email = document.querySelector("#email").value
    let id = document.querySelector("#stuid").value
    let password = document.querySelector("#paswrd").value

    let select = document.querySelector("#select").value

    if (password.length >= 6) {

        if (select === "Student") {
            // localStorage.setItem("select",select)
        let s1 = new student(name, password, email, id)
        s1.signUp(name, password, email, id)
        // studentsarray.push(s1)

        window.location.href = "studentlogin.html"
    }
    if(select === "Admin") {
        // localStorage.setItem("select",select)
        let a1 = new admin(name, password, email, id)
        a1.signUp(name, password, email, id)
        // studentsarray.push(a1)

        window.location.href = "adminlogin.html"
    }


    }
    else {
        document.querySelector("h3").innerText="password doesnot strong"
    }

// console.log(s1)

}



