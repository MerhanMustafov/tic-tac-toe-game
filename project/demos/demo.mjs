import { multiply } from "./demo2.mjs";
console.log('hello')
multiply(5)




/* h1{
    margin-top:  100px;
    text-align: center;
    
}

#content{
    
    margin-left:auto;
    margin-right:auto;
    width:1300px;
    
}


#cell-2{
    border-left: 5px solid black;
    border-right: 5px solid black;
    height: 30%;
    
    
}
#cell-4{
    width: 30%;
    
    border-bottom: 5px solid black;
    border-top: 5px solid black;
}
#cell-5{
    width: 37%;
    height: 35%;
    border-left: 5px solid black;
    border-right: 5px solid black;  
    border-bottom: 5px solid black;
    border-top: 5px solid black;
}
#cell-6{
    border-bottom: 5px solid black;
    border-top: 5px solid black;
}
#cell-8{
    border-left: 5px solid black;
    border-right: 5px solid black;   
}

/* 
#board{
    /* border: 5px solid black; */
    margin-top: 3%;
    margin-bottom: 3%;
    margin-left:  36%;
    min-width:352px;
    height: 400px;
    
} */

/* fieldset{
    
    
    /* margin-top: auto;
    margin-bottom: auto; */
    height: 600px;
} */

/* #resetBtn{
    
    
} */ */




@import url("https://use.fontawesome.com/releases/v5.13.0/css/all.css");

h1 {
    position: absolute;
    top:20px;
    left: 40%;
    text-align: center;
    font-size: 70px;
    color:rgb(55, 55, 55);


}
body{
    background-color:rgb(235, 231, 231);
    min-width: 05vw;
    /* zoom: auto; */
}
fieldset{
    position: absolute;
    top: 200px;
    width: 96vw;
    height: 60vh;
    border-radius: 50px;
    border-width: 3px;
    border-color: #04AA6D;
    padding-top: 10px;
    /* outline-style: solid;
    outline-color:#04AA6D;
    outline-width: 3px; */
}
#cell-1 {
    border-bottom: solid;
    border-right: solid;
    border-width: 3px;

}

#cell-2 {
    border-bottom: solid;
    border-left: solid;
    border-right: solid;
    border-width: 3px;

    
}
#cell-3 {
    border-bottom: solid;
    border-left: solid;
    border-width: 3px;
    
}

#cell-4 {
    border-bottom: solid;
    border-top: solid;
    border-right: solid;
    border-width: 3px;


}

#cell-5 {
    border-bottom: solid;
    border-top: solid;
    border-right: solid;
    border-left: solid;
    border-width: 3px;
}
#cell-6 {
    border-top: solid;
    border-left: solid;
    border-bottom: solid;
    border-width: 3px;
}
#cell-7 {
    border-top: solid;
    border-right: solid;
    border-width: 3px;
}
#cell-8 {
    border-top: solid;
    border-right: solid;
    border-left: solid;
    border-width: 3px;
}
#cell-9 {
    border-top: solid;
    border-left: solid;
    border-width: 3px;
}


td {
    width: 120px;
    height: 120px;
}

td:hover{
    border: 2px solid gray;
    border-width: 5px;
}

#board {
    margin-left: auto;
    margin-right: auto;
}
#pl-1 {
    font-size: 40px;
    position: absolute;
    margin-top: 10%;
    margin-left: 5%;
    top: 0;
    left: 0;
    color:rgb(55, 55, 55);
    
}

#pl-2 {
    font-size: 40px;
    position: absolute;
    margin-top: 15%;
    margin-left: 5%;
    top: 0;
    left: 0;
    border-width: 3px;
    color:rgb(55, 55, 55);
    
}
#draws {
    font-size: 40px;
    position: absolute;
    margin-top: 20%;
    margin-left: 5%;
    top: 0;
    left: 0;
    border-width: 3px;
    color:rgb(55, 55, 55);
    
}

#resetBtn{
    font-size: 60px;
    position: absolute;
    display: block;
    top: 60%;
    right: 10%;
    width: 17%;
    height: 100px;
    border-radius: 40px;
    border-color: #04AA6D;
    border-width: 3px;
    cursor: pointer;
    text-align: center;
    color:rgb(55, 55, 55);
}

#nought {
    font-size: 57px;
    position: absolute;
    top: 10%;
    right: 10%;
    width: 17%;
    height: 100px;
    border-radius: 40px;
    border-color: #04AA6D;
    border-width: 3px;
    color:rgb(55, 55, 55);
}
#cross {
    font-size:65px;
    position: absolute;
    top: 35%;
    right: 10%;
    width: 17%;
    height: 100px;
    border-radius: 40px;
    border-color: #04AA6D;
    border-width: 3px;
    color:rgb(55, 55, 55);
}
#nameArea #name {
    display: block;
}

/* #nameArea {
    display: block;
    font-size: 30px;
    position: absolute;
    top: 0;
    left: 0;
    margin-top:30px;
    
} */
#name{
    position: absolute;
    margin-top: 2.2%;
    left: 0;
    background-color:rgb(235, 231, 231);
    border-radius: 40px;
    width: 20%;
    height: 40px; 
    border-color: #04AA6D;
    border-width: 3px;
    font-size: 20px;
    
    margin-left: 40px;
}

#setMyName{
    position: absolute;
    margin-top: 5.6%;
    margin-left: 3%;
    font-size:20px;
    width: 20%;
    text-align: center;
    background-color:rgb(235, 231, 231);
    border-radius: 40px;
    border-color: #04AA6D;

}



