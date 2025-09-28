


const btn = document.getElementById("btn");
      function signUp() {
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;

        if (
          document.getElementById("password").value ===
          document.getElementById("password2").value
        ) {
          const password = document.getElementById("password").value;
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
      }

      btn.addEventListener("click", signUp);