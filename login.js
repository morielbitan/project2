const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");

      function login() {
        const username = document.getElementById("login-username").value;
        const password = document.getElementById("login-password").value;

        const savedUser = localStorage.getItem("user");
        if (!savedUser) {
          alert("No user found. Please sign up first.");
          return;
        }

        const user = JSON.parse(savedUser);
        console.log("Saved user:", user);

        if (username === user.username && password === user.password) {
          alert("Login successful! Welcome " + user.username);
          window.location.href = "homepage.html";
        } else {
          alert("Invalid username or password!");
        }
      }
      function fun2(){
        window.location.href = "signup.html";
      }

btn.addEventListener("click", login);
btn2.addEventListener("click", fun2);


