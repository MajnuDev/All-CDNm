   <style>
      /* *{
        background: #bbf7d0;
      } */
        .container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #ffffff;
}

.singup {
  color: #000;
  text-transform: uppercase;
  letter-spacing: 2px;
  display: block;
  font-weight: bold;
  font-size: x-large;
  margin-top: 1.5em;
}

.card {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 350px;
  width: 300px;
  flex-direction: column;
  gap: 35px;
  border-radius: 15px;
  background: #ffffff;
  /* box-shadow: 16px 16px 32px #c8c8c8, -16px -16px 32px #fefefe; */
  border-radius: 8px;
}

.inputBox,
.inputBox1 {
  position: relative;
  width: 250px;
}

.inputBox input,
.inputBox1 input {
  width: 100%;
  padding: 10px;
  outline: none;
  border: none;
  color: #ffffff;
  font-size: 1em;
  background: transparent;
  border-left: 2px solid #ffffff;
  border-bottom: 2px solid #ffffff;
  transition: 0.1s;
  border-bottom-left-radius: 8px;
}

.inputBox span,
.inputBox1 span {
  margin-top: 5px;
  position: absolute;
  left: 0;
  transform: translateY(-4px);
  margin-left: 10px;
  padding: 10px;
  pointer-events: none;
  font-size: 12px;
  color: #ffffff;
  text-transform: uppercase;
  transition: 0.5s;
  letter-spacing: 3px;
  border-radius: 8px;
}

.inputBox input:valid~span,
.inputBox input:focus~span {
  transform: translateX(113px) translateY(-15px);
  font-size: 0.8em;
  padding: 5px 10px;
  background: #ffffff;
  letter-spacing: 0.2em;
  color: #000000;
  border: 2px;
}

.inputBox1 input:valid~span,
.inputBox1 input:focus~span {
  transform: translateX(156px) translateY(-15px);
  font-size: 0.8em;
  padding: 5px 10px;
  color: #000;
  background: #ffffff;
  letter-spacing: 0.2em;
  color: #000000;
  border: 2px;
}

.inputBox input:valid,
.inputBox input:focus,
.inputBox1 input:valid,
.inputBox1 input:focus {
  border: 2px solid #ffffff;
  border-radius: 8px;
}

.enter {
  height: 45px;
  width: 100px;
  border-radius: 5px;
  border: 2px solid #ffffff;
  cursor: pointer;
  color: #ffffff;
  background-color: transparent;
  transition: 0.5s;
  text-transform: uppercase;
  font-size: 10px;
  letter-spacing: 2px;
  margin-bottom: 3em;
}

.enter:hover {
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}
    </style>
     <style>
      .navbar {
        background-color: #f8f8f8;
        padding: 10px;
        display: flex;
        /* justify-content: space-between; */
        align-items: center;
      }
      /* 
      ul{
          float: left;
      } */
      
      .navbar-brand a {
        font-weight: bold;
        color: #333;
        text-decoration: none;
      }
      
      .navbar-toggle-label {
        display: none;
        cursor: pointer;
      }
      
      .navbar-toggle-label span {
        display: block;
        width: 25px;
        height: 3px;
        background-color: #333;
        margin-bottom: 5px;
      }
      
      .navbar-menu {
        list-style: none;
        display: flex;
      }
      
      .navbar-menu li {
        margin-right: 10px;
      }
      
      .navbar-menu li a {
        color: #333;
        text-decoration: none;
        padding: 5px;
      }
      
      #login-box {
 
 width: 600px;
 padding: 40px;
 margin: 5%;
 /* transform: translate(-50%, -50%); */
 background: rgba(24, 20, 20, 0.987);
 box-sizing: border-box;
 box-shadow: 0 15px 25px rgba(0,0,0,.6);
 border-radius: 10px;
}
          </style>
