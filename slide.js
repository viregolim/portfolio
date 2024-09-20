section{
    overflow: hidden;
}

section.slider{
    margin: 0 auto;
    width: 100%;
    height: auto;
    padding: 0;
    overflow: hidden;
}

.slider-content{
    width: 400%;
    height: auto;
    display: flex;

}

.slider-content input{
    display: none;
}

.slide-box{
    width: 25%;
    height: auto;
    position: relative;
    text-align: center;
    transition: 1s;
}

.slide-box img{
    width: 100%;
}

.nav-manual, .nav-auto{
    position: absolute;
    width: 100%;
    margin-top: 35%;
    display: flex;
    justify-content: center;
}

.nav-manual .manual-btn, .nav-auto div{
    border: 1px solid #EE7252;
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.5s;
}

.nav-manual .manual-btn:not(:last-child), .nav-auto div:not(:last-child){
    margin-right: 10px;
}

.nav-manual .manual-btn:hover{
    background-color: #EE7252;
}

#radio1:checked ~ .nav-auto .auto-btn1, #radio2:checked ~ .nav-auto .auto-btn2, #radio3:checked ~ .nav-auto .auto-btn3,
#radio4:checked ~ .nav-auto .auto-btn4{
    background-color: #EE7252;
}

#radio1:checked ~ .primeiro{
    margin-left: 0%;
}

#radio2:checked ~ .primeiro{
    margin-left: -25%;
}

#radio3:checked ~ .primeiro{
    margin-left: -50%;
}

#radio4:checked ~ .primeiro{
    margin-left: -75%;
}
