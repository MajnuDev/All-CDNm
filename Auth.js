var hire = document.getElementById("hire").getAttribute("href");
         console.log(hire);
        if(hire!="https://monusingh.netlify.app/"){
          window.location.href = "LogIn.html"; // Redirect to the next page
        }
        
      var authM =localStorage.getItem("Auth");
      if(authM==null || authM=="" || authM!="Monu Singh"){
        window.location.href = "LogIn.html";
      }

      var UserLog = localStorage.getItem("user");
     var Logout = document.getElementById("user");
     Logout.textContent=UserLog;
   Logout.addEventListener("click",function(){
    localStorage.clear();
   })

        const input = document.getElementById("myInput");
        const submitButton = document.querySelector(".sign-up");

         function next() {
            event.preventDefault();
            localStorage.setItem("username", input.value);
            window.location.href = "AddName.html"; // Redirect to the next page
          
        };

        
