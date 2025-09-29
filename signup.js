


const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");

      function signUp() {
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        let password="";

        if (
          document.getElementById("password").value ===
          document.getElementById("password2").value
        ) {
          password = document.getElementById("password").value;
        } else {
          alert("make sure you wrote the same password");
          return;
        }
        

        if (!username || !email || !password) {
          alert("Please fill out all fields!");
          return;
        }

        // Save user data in localStorage
        const user = { username, email, password };
        localStorage.setItem("user", JSON.stringify(user));

        alert("Sign-up successful!");
        console.log(localStorage.getItem("user"));

        window.location.href = "homepage.html";
      }
      function fun2(){
          window.location.href = "login.html";

      }

      btn.addEventListener("click", signUp);
      btn2.addEventListener("click", fun2)

      