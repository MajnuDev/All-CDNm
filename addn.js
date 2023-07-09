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
            localStorage.setItem("name", input.value);
            window.location.href = "addGif.html"; // Redirect to the next page
          
        };

        
