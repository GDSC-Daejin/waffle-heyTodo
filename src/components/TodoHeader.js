import React from "react";
import styled from "styled-components";

const Button = styled.button`
    background: none;
    background-color: ${props => props.theme.btnColor};
    margin: 5px;
    border-radius: 20px;
    text-align: center;
    border: none;
    &:hover{
        color: #4285F4;
    }
    .sun{
        padding-top: 3px;
    }
    .moon{
        padding-top: 3px;
    }
`;

const Header = ({isDark, toggleTheme}) => {

    return (
        <div className="navbar">
            <div className="logo-box" src="img/gdsclogo.png" alt="gdsc logo" width="10px">
                <img className="nav-logo" src="img/gdsclogo.png" alt="gdsc logo"/>
            </div>
            <div className="subtitle">너두 할 수 있어!👌</div>
            <div className="toggleTheme">
                <Button onClick={() => toggleTheme()}>
                    {isDark ? <img className="moon" src="img/moon.png" alt="moon" width="30px" color="white"></img> : <img className="sun" src="img/sun.png" alt="sun" width="30px"></img>}
                </Button>
            </div>
        </div>
    )
};

export default Header;