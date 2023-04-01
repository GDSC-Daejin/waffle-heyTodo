import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  .App {
    text-align: center;
  }
  
  body {
    background-color: ${props => props.theme.bgColor};
  }
  
  .LOGO {
    text-align: center;
    font-size: 50px;
    color: #4285F4;
    font-weight: bold;
  }
  .btn{
    &:hover{
        color: #4285F4;
    }
  }
  .todoLogo {
    width: 10%;
    margin-bottom: -8px;
  }
  
  .navbar {
    background: #346bc4;
    height: 50px;
    display: flex;
  }

  .logo-box{
    flex: 1;
    text-align: left;
  }

  .nav-logo {
    width: 70px;
    padding-top: 8px;
    padding-left: 20px;
    text-align: center;
  }
  
  .subtitle {
    flex: 3;
    text-align: center;
    padding-top: 13px;
    color: #fff;
    font-weight: bold;
  }
  
  .toggleTheme {
    flex: 1;
    text-align: right;
  }
  
  .inputBtn {
    margin-top: 5%;
    margin-left: 5%;
  }
  
  .input {
    width: 60%;
    height: 45px;
    border-radius: 5px;
    border: 0;
    font-size: 20px;
    text-align: center;
    background-color: #f8dae2;
  }
  
  .addBtn {
    border-radius: 5px;
    border: 0;
    width: 20%;
    height: 45px;
    margin-left: 2%;
    background-image: linear-gradient(to top, #d299c2 20%, #fef9d7 90%);
  }
  
`;