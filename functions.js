function openWin(){
    window.open('http://127.0.0.1:5000/login','name','width=600,height=600')
}
function logOut(){
    window.open('http://127.0.0.1:5000/logout')
}
function signin(){
    window.open('http://127.0.0.1:5000/signin')
}

   
$(document).ready(function () {
    $('#cusTable').DataTable();
    });
$(document).ready(function () {
    $('#ordTable').DataTable();
    });
$(document).ready(function () {
    $('#stkTable').DataTable();
    });

function signIn(){
    username = document.getElementById("logIn").value;
    password = document.getElementById("passIn").value;
    if(username==""){
        alert("Username Required");
    }
    if(password==""){
        alert("Password Required");
    }

}
function signUp(){
    phone = document.getElementById("phonein").value;
    email = document.getElementById("emailin").value;
    password = document.getElementById("passUpin").value;
    if(phone==""){
        alert("Phone Number Required");
    }
    if(email==""){
        alert("Email Required");
    }
    if(password==""){
        alert("Password Required");
    }

}
function homeread(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status ==200){
            homewrite(this);
        }
    }
    xmlhttp.open("GET", "categories.xml", true);
    xmlhttp.send();
}
function homewrite(xml){
    var x,i,xmlDoc,txt,y,str;
    xmlDoc = xml.responseXML;
    txt =  "";
    cdv="<div><label id='category'>Categories</label></div>";
    x = xmlDoc.getElementsByTagName("component");
        for(i=0; i < x.length; i++){
            y = x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
            
            trs="<tr>"
            if(y==="motherboards"){
                txt += "<td id='home', onclick='moboread()', onmouseover='tooltip.ajax(this,  `products.xml`, myAjaxSetting, {position:0});'>";
            }
            else if(y==="processors"){
                txt += "<td id='home', onclick='procread()' , onmouseover='tooltip.ajax(this,  `products.xml`, myAjaxSetting2, {position:0});'>";
            }
            else if(y==="memory"){
                txt += "<td id='home', onclick='memoread()' , onmouseover='tooltip.ajax(this,  `products.xml`, myAjaxSetting3, {position:0});' >";
            }
            else if(y==="monitors"){
                txt += "<td id='home', onclick='moniread()' , onmouseover='tooltip.ajax(this,  `products.xml`, myAjaxSetting4, {position:0});'>";
            }
            else if(y==="storage"){
                txt += "<td id='home', onclick='storread()' , onmouseover='tooltip.ajax(this,  `products.xml`, myAjaxSetting5, {position:0});'>";
            }
            txt += "<img src='pics/"+x[i].getElementsByTagName("image")[0].childNodes[0].nodeValue+"' id='homePic'><br>";
            //"<img src='pics/"+x[i].getElementsByTagName("image")[0].childNodes[0].nodeValue+"' id='homePic'>"
            txt += ""+x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue+"";
            txt += "</td>";
            tre="</tr>"
        
            }
    document.getElementById("headtable2").innerHTML = cdv;
    document.getElementById("headtable").innerHTML = txt;
}


function moboread(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status ==200){
            mobowrite(this);
        }
    }
    xmlhttp.open("GET", "products.xml", true);
    xmlhttp.send();
}
function mobowrite(xml){
    var x,i,xmlDoc,txt,cdv;
    xmlDoc = xml.responseXML;
    txt =  "";
    x = xmlDoc.getElementsByTagName("products");
    cdv="<div><ul id='backul'><li><a href='index.html'>Back</a></li></div>";
    //select <procduct> where pcat is motherboard
    for(i=0; i < x.length; i++){  
        tre="<tr>";
        y=x[i].getElementsByTagName("pcat")[0].childNodes[0].nodeValue;

        if(y==="Motherboard"){
            txt += "<td id='home'>";
            txt += "<img src='pics/"+x[i].getElementsByTagName("image")[0].childNodes[0].nodeValue+"' id='stockPic'>";
            txt += "<br>"+x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue+"";       
            txt += "<br>"+x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue+"";
            txt += "</td>";
            trs="</tr>"   
        } 
    }  
    document.getElementById("headtable2").innerHTML = cdv;
    document.getElementById("headtable").innerHTML = txt;
    
}
function procread(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status ==200){
            procwrite(this);
        }
    }
    xmlhttp.open("GET", "products.xml", true);
    xmlhttp.send();
}

function procwrite(xml){
    var x,i,xmlDoc,txt;
    xmlDoc = xml.responseXML;
    txt =  "";
    cdv="<div><ul id='backul'><li><a href='index.html'>Back</a></li></div>";
    x = xmlDoc.getElementsByTagName("products");
    for(i=0; i < x.length; i++){  
        tre="<tr>";
        y=x[i].getElementsByTagName("pcat")[0].childNodes[0].nodeValue;

        if(y==="Processors"){
            txt += "<td id='home'>";
            txt += "<img src='pics/"+x[i].getElementsByTagName("image")[0].childNodes[0].nodeValue+"' id='stockPic'>";
            txt += "<br>"+x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue+"";       
            txt += "<br>"+x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue+"";
            txt += "</td>";
            trs="</tr>"   
        } 
    }  
    document.getElementById("headtable2").innerHTML = cdv;
    document.getElementById("headtable").innerHTML = txt;
}
function memoread(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status ==200){
            memowrite(this);
        }
    }
    xmlhttp.open("GET", "products.xml", true);
    xmlhttp.send();
}
function memowrite(xml){
    var x,i,xmlDoc,txt;
    xmlDoc = xml.responseXML;
    txt =  "";
    cdv="<div><ul id='backul'><li><a href='index.html'>Back</a></li></div>";
    x = xmlDoc.getElementsByTagName("products");
    for(i=0; i < x.length; i++){  
        tre="<tr>";
        y=x[i].getElementsByTagName("pcat")[0].childNodes[0].nodeValue;

        if(y==="Memory"){
            txt += "<td id='home'>";
            txt += "<img src='pics/"+x[i].getElementsByTagName("image")[0].childNodes[0].nodeValue+"' id='stockPic'>";
            txt += "<br>"+x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue+"";       
            txt += "<br>"+x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue+"";
            txt += "</td>";
            trs="</tr>"   
        } 
    }  
    document.getElementById("headtable2").innerHTML = cdv;
    document.getElementById("headtable").innerHTML = txt;
}
function moniread(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status ==200){
            moniwrite(this);
        }
    }
    xmlhttp.open("GET", "products.xml", true);
    xmlhttp.send();
}
function moniwrite(xml){
    var x,i,xmlDoc,txt;
    xmlDoc = xml.responseXML;
    txt =  "";
    cdv="<div><ul id='backul'><li><a href='index.html'>Back</a></li></div>";
    x = xmlDoc.getElementsByTagName("products");
    for(i=0; i < x.length; i++){  
        tre="<tr>";
        y=x[i].getElementsByTagName("pcat")[0].childNodes[0].nodeValue;

        if(y==="Monitors"){
            txt += "<td id='home'>";
            txt += "<img src='pics/"+x[i].getElementsByTagName("image")[0].childNodes[0].nodeValue+"' id='stockPic'>";
            txt += "<br>"+x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue+"";       
            txt += "<br>"+x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue+"";
            txt += "</td>";
            trs="</tr>"   
        } 
    }  
        document.getElementById("headtable2").innerHTML = cdv;
    document.getElementById("headtable").innerHTML = txt;
}
function storread(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status ==200){
            storwrite(this);
        }
    }
    xmlhttp.open("GET", "products.xml", true);
    xmlhttp.send();
}
function storwrite(xml){
    var x,i,xmlDoc,txt;
    xmlDoc = xml.responseXML;
    txt =  "";
    cdv="<div><ul id='backul'><li><a href='index.html'>Back</a></li></div>";
    x = xmlDoc.getElementsByTagName("products");
    for(i=0; i < x.length; i++){  
        
        y=x[i].getElementsByTagName("pcat")[0].childNodes[0].nodeValue;

        if(y==="Storage"){
            tre="<tr>";
            txt += "<td id='home'>";
            txt += "<img src='pics/"+x[i].getElementsByTagName("image")[0].childNodes[0].nodeValue+"' id='stockPic'>";
            txt += "<br>"+x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue+"";       
            txt += "<br>"+x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue+"";
            txt += "</td>";
            trs="</tr>"   
        } 
    }  
    document.getElementById("headtable2").innerHTML = cdv;
    document.getElementById("headtable").innerHTML = txt;
}

var myAjaxSetting = {
    context: { index: -1 },
    success: myCallback,
    responseType: "xml"
};

function myCallback(response, context) {
        var w = response.documentElement.getElementsByTagName("products");
        
        var k=0;
        for(i=0; i < w.length; i++){  
            var x = response.documentElement.getElementsByTagName("products")[k];
            var category = x.getElementsByTagName("pcat")[0].childNodes[0].nodeValue;
            if(category==="Motherboard"){
                var pics = x.getElementsByTagName("image")[0].childNodes[0].nodeValue;
                var price = x.getElementsByTagName("price")[0].childNodes[0].nodeValue;
                var category = x.getElementsByTagName("pcat")[0].childNodes[0].nodeValue;
                var name = x.getElementsByTagName("name")[0].childNodes[0].nodeValue;
                var txt =   "<table>"+
                "<tr>"+
                "<td>"+
                "<p id='specoffer'>Special Offer!!!</p></br>"+
                "<p id='cat'>"+category+"</p></br>"+
                "<p id='toolbor'>"+name+"</p></br>"+
                "<p id='toolbor'> Price: " + price + "</p>"+
                "</td>"+
                
                "<td>"+"<img src='pics/"+pics+"' id='stockPic'>"+"</td>"+
                "</tr>"+
                "<table>";
                
            return "<div>" +txt+ "</div>";
        }
        else{
            k+=1;
        }
        }
    }

var myAjaxSetting2 = {
    context: { index: -1 },
    success: myCallback2,
    responseType: "xml"
};
function myCallback2(response, context) {
        var w = response.documentElement.getElementsByTagName("products");
        var k=0;
        for(i=0; i < w.length; i++){  
            var x = response.documentElement.getElementsByTagName("products")[k];
            var category = x.getElementsByTagName("pcat")[0].childNodes[0].nodeValue;
            if(category==="Processors"){
                var pics = x.getElementsByTagName("image")[0].childNodes[0].nodeValue;
                var price = x.getElementsByTagName("price")[0].childNodes[0].nodeValue;
                var category = x.getElementsByTagName("pcat")[0].childNodes[0].nodeValue;
                var name = x.getElementsByTagName("name")[0].childNodes[0].nodeValue;
                var txt =   "<table>"+
                "<tr>"+
                "<td>"+
                "<p id='specoffer'>Special Offer!!!</p></br>"+
                "<p id='cat'>"+category+"</p></br>"+
                "<p id='toolbor'>"+name+"</p></br>"+
                "<p id='toolbor'> Price: " + price + "</p>"+
                "</td>"+
                
                "<td>"+"<img src='pics/"+pics+"' id='stockPic'>"+"</td>"+
                "</tr>"+
                "<table>";
                
            return "<div>" +txt+ "</div>";
        }
        else{
            k+=1;
        }
        }
}
var myAjaxSetting3 = {
    context: { index: -1 },
    success: myCallback3,
    responseType: "xml"
};
function myCallback3(response, context) {
        var w = response.documentElement.getElementsByTagName("products");
        var k=0;
        for(i=0; i < w.length; i++){  
            var x = response.documentElement.getElementsByTagName("products")[k];
            var category = x.getElementsByTagName("pcat")[0].childNodes[0].nodeValue;
            if(category==="Memory"){
                var pics = x.getElementsByTagName("image")[0].childNodes[0].nodeValue;
                var price = x.getElementsByTagName("price")[0].childNodes[0].nodeValue;
                var category = x.getElementsByTagName("pcat")[0].childNodes[0].nodeValue;
                var name = x.getElementsByTagName("name")[0].childNodes[0].nodeValue;
                var txt =   "<table>"+
                "<tr>"+
                "<td>"+
                "<p id='specoffer'>Special Offer!!!</p></br>"+
                "<p id='cat'>"+category+"</p></br>"+
                "<p id='toolbor'>"+name+"</p></br>"+
                "<p id='toolbor'> Price: " + price + "</p>"+
                "</td>"+
                
                "<td>"+"<img src='pics/"+pics+"' id='stockPic'>"+"</td>"+
                "</tr>"+
                "<table>";
                
            return "<div>" +txt+ "</div>";
        }
        else{
            k+=1;
        }
        }
}
var myAjaxSetting4 = {
    context: { index: -1 },
    success: myCallback4,
    responseType: "xml"
};
function myCallback4(response, context) {
        var w = response.documentElement.getElementsByTagName("products");
        var k=0;
        for(i=0; i < w.length; i++){  
            var x = response.documentElement.getElementsByTagName("products")[k];
            var category = x.getElementsByTagName("pcat")[0].childNodes[0].nodeValue;
            if(category==="Monitors"){
                var pics = x.getElementsByTagName("image")[0].childNodes[0].nodeValue;
                var price = x.getElementsByTagName("price")[0].childNodes[0].nodeValue;
                var category = x.getElementsByTagName("pcat")[0].childNodes[0].nodeValue;
                var name = x.getElementsByTagName("name")[0].childNodes[0].nodeValue;
                var txt =   "<table>"+
                "<tr>"+
                "<td>"+
                "<p id='specoffer'>Special Offer!!!</p></br>"+
                "<p id='cat'>"+category+"</p></br>"+
                "<p id='toolbor'>"+name+"</p></br>"+
                "<p id='toolbor'> Price: " + price + "</p>"+
                "</td>"+
                
                "<td>"+"<img src='pics/"+pics+"' id='stockPic'>"+"</td>"+
                "</tr>"+
                "<table>";
                
            return "<div>" +txt+ "</div>";
        }
        else{
            k+=1;
        }
        }
}
var myAjaxSetting5 = {
    context: { index: -1 },
    success: myCallback5,
    responseType: "xml"
};
function myCallback5(response, context) {
        var w = response.documentElement.getElementsByTagName("products");
        var k=0;
        for(i=0; i < w.length; i++){  
            var x = response.documentElement.getElementsByTagName("products")[k];
            var category = x.getElementsByTagName("pcat")[0].childNodes[0].nodeValue;
            if(category==="Storage"){
                var pics = x.getElementsByTagName("image")[0].childNodes[0].nodeValue;
                var price = x.getElementsByTagName("price")[0].childNodes[0].nodeValue;
                var category = x.getElementsByTagName("pcat")[0].childNodes[0].nodeValue;
                var name = x.getElementsByTagName("name")[0].childNodes[0].nodeValue;
                var txt =   "<table>"+
                "<tr>"+
                "<td>"+
                "<p id='specoffer'>Special Offer!!!</p></br>"+
                "<p id='cat'>"+category+"</p></br>"+
                "<p id='toolbor'>"+name+"</p></br>"+
                "<p id='toolbor'> Price: " + price + "</p>"+
                "</td>"+
                
                "<td>"+"<img src='pics/"+pics+"' id='stockPic'>"+"</td>"+
                "</tr>"+
                "<table>";
                
            return "<div>" +txt+ "</div>";
        }
        else{
            k+=1;
        }
        }
}
function intelread(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status ==200){
            intelwrite(this);
        }
    }
    xmlhttp.open("GET", "products.xml", true);
    xmlhttp.send();
}
function intelwrite(xml){
    var x,i,xmlDoc,txt;
    xmlDoc = xml.responseXML;
    txt =  "";
    x = xmlDoc.getElementsByTagName("products");
    cdv="<div><ul id='backul'><li><a href='index.html'>Back</a></li></div>";
    for(i=0; i < x.length; i++){
        y = x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
    

        tre="<tr>"
        if(y.includes("Intel")){
            txt += "<td id='home2'>";
            txt += "<img src='pics/"+x[i].getElementsByTagName("image")[0].childNodes[0].nodeValue+"' id='stockPic'>";
            txt += "<br>"+x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue+"";       
            txt += "<br>"+x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue+"";
            txt += "</td>";
            trs="</tr>"
        }
        
    
        }
        
        document.getElementById("bottable2").innerHTML = cdv;
    document.getElementById("bottable").innerHTML = txt;
}
function amdread(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status ==200){
            amdwrite(this);
        }
    }
    xmlhttp.open("GET", "products.xml", true);
    xmlhttp.send();
}
function amdwrite(xml){
    var x,i,xmlDoc,txt;
    xmlDoc = xml.responseXML;
    txt =  "";
    x = xmlDoc.getElementsByTagName("products");
    cdv="<div><ul id='backul'><li><a href='index.html'>Back</a></li></div>";
    for(i=0; i < x.length; i++){
        y = x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;        
        if(y.includes("AMD")){
            tre="<tr>"
            txt += "<td id='home2'>";
            txt += "<img src='pics/"+x[i].getElementsByTagName("image")[0].childNodes[0].nodeValue+"' id='stockPic'>";
            txt += "<br>"+x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue+"";       
            txt += "<br>"+x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue+"";
            txt += "</td>";
            trs="</tr>"
        }
        
    
        }
        
        document.getElementById("bottable2").innerHTML = cdv;    
    document.getElementById("bottable").innerHTML = txt;
}
function asusread(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status ==200){
            asuswrite(this);
        }
    }
    xmlhttp.open("GET", "products.xml", true);
    xmlhttp.send();
}
function asuswrite(xml){
    var x,i,xmlDoc,txt;
    xmlDoc = xml.responseXML;
    txt =  "";
    x = xmlDoc.getElementsByTagName("products");
    cdv="<div><ul id='backul'><li><a href='index.html'>Back</a></li></div>";
    for(i=0; i < x.length; i++){
        y = x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;

        tre="<tr>"
        if(y.includes("ASUS")){
            txt += "<td id='home2'>";
            txt += "<img src='pics/"+x[i].getElementsByTagName("image")[0].childNodes[0].nodeValue+"' id='stockPic'>";
            txt += "<br>"+x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue+"";       
            txt += "<br>"+x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue+"";
            txt += "</td>";
            trs="</tr>"
        }
        }
        
        document.getElementById("bottable2").innerHTML = cdv;    
    document.getElementById("bottable").innerHTML = txt;
}
function msiread(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status ==200){
            msiwrite(this);
        }
    }
    xmlhttp.open("GET", "products.xml", true);
    xmlhttp.send();
}
function msiwrite(xml){
    var x,i,xmlDoc,txt;
    xmlDoc = xml.responseXML;
    txt =  "";
    x = xmlDoc.getElementsByTagName("products");
    cdv="<div><ul id='backul'><li><a href='index.html'>Back</a></li></div>";
    for(i=0; i < x.length; i++){
        y = x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
        check =y.includes("MSI");

        tre="<tr>"
        if(y.includes("MSI")){
            txt += "<td id='home2'>";
            txt += "<img src='pics/"+x[i].getElementsByTagName("image")[0].childNodes[0].nodeValue+"' id='stockPic'>";
            txt += "<br>"+x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue+"";       
            txt += "<br>"+x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue+"";
            txt += "</td>";
            trs="</tr>"
        }
        
    
        }
        
        document.getElementById("bottable2").innerHTML = cdv;
    document.getElementById("bottable").innerHTML = txt;
}
function samread(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status ==200){
            samwrite(this);
        }
    }
    xmlhttp.open("GET", "products.xml", true);
    xmlhttp.send();
}
function samwrite(xml){
    var x,i,xmlDoc,txt;
    xmlDoc = xml.responseXML;
    txt =  "";
    x = xmlDoc.getElementsByTagName("products");
    cdv="<div><ul id='backul'><li><a href='index.html'>Back</a></li></div>";
    for(i=0; i < x.length; i++){
        y = x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue; 
        if(y.includes("SAMSUNG")){
            tre="<tr>"
            txt += "<td id='home2'>";
            txt += "<img src='pics/"+x[i].getElementsByTagName("image")[0].childNodes[0].nodeValue+"' id='stockPic'>";
            txt += "<br>"+x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue+"";       
            txt += "<br>"+x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue+"";
            txt += "</td>";
            trs="</tr>"
        }
        
    
        }
    document.getElementById("bottable2").innerHTML = cdv;
    document.getElementById("bottable").innerHTML = txt;
}
function gigaread(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status ==200){
            gigawrite(this);
        }
    }
    xmlhttp.open("GET", "products.xml", true);
    xmlhttp.send();
}
function gigawrite(xml){
    var x,i,xmlDoc,txt;
    xmlDoc = xml.responseXML;
    txt =  "";
    x = xmlDoc.getElementsByTagName("products");
    cdv="<div><ul id='backul'><li><a href='index.html'>Back</a></li></div>";
    for(i=0; i < x.length; i++){
        y = x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue; 
        if(y.includes("GIGABYTE")){
            tre="<tr>"
            txt += "<td id='home2'>";
            txt += "<img src='pics/"+x[i].getElementsByTagName("image")[0].childNodes[0].nodeValue+"' id='stockPic'>";
            txt += "<br>"+x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue+"";       
            txt += "<br>"+x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue+"";
            txt += "</td>";
            trs="</tr>"
        }
        
    
        }
    document.getElementById("bottable2").innerHTML = cdv;
    document.getElementById("bottable").innerHTML = txt;
}
function aocread(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status ==200){
            aocwrite(this);
        }
    }
    xmlhttp.open("GET", "products.xml", true);
    xmlhttp.send();
}
function aocwrite(xml){
    var x,i,xmlDoc,txt;
    xmlDoc = xml.responseXML;
    txt =  "";
    cdv="<div><ul id='backul'><li><a href='index.html'>Back</a></li></div>";
    x = xmlDoc.getElementsByTagName("products");
    for(i=0; i < x.length; i++){
        y = x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue; 
        if(y.includes("AOC")){
            tre="<tr>"
            txt += "<td id='home2'>";
            txt += "<img src='pics/"+x[i].getElementsByTagName("image")[0].childNodes[0].nodeValue+"' id='stockPic'>";
            txt += "<br>"+x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue+"";       
            txt += "<br>"+x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue+"";
            txt += "</td>";
            trs="</tr>"
        }
        
    
        }
        
    document.getElementById("bottable2").innerHTML = cdv;
    document.getElementById("bottable").innerHTML = txt;
}
function brandsread(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status ==200){
            brandswrite(this);
        }
    }
    xmlhttp.open("GET", "brands.xml", true);
    xmlhttp.send();
}
function brandswrite(xml){
    var x,i,xmlDoc,txt,y,str;
    xmlDoc = xml.responseXML;
    txt =  "";
    cdv="<div><label id='bot'>Popular Brands</label></div>";
   
    
    x = xmlDoc.getElementsByTagName("component");
        for(i=0; i < x.length; i++){
            y = x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;

            trs="<tr>"

            if(y==="samsung"){
                txt += "<td id='home', onclick='samread()'>";
            }
            else if(y==="asus"){
                txt += "<td id='home', onclick='asusread()'>";
            }
            else if(y==="gigabyte"){
                txt += "<td id='home', onclick='gigaread()'>";
            }
            else if(y==="msi"){
                txt += "<td id='home', onclick='msiread()'>";
            }
            else if(y==="intel"){
                txt += "<td id='home', onclick='intelread()'>";
            }
            else if(y==="amd"){
                txt += "<td id='home', onclick='amdread()'>";
            }
            else if(y==="aoc"){
                txt += "<td id='home', onclick='aocread()'>";
            }
            txt += "<img src='pics/"+x[i].getElementsByTagName("image")[0].childNodes[0].nodeValue+"' id='botPic'>";
            txt += "</td>";
            tre="</tr>"
        
            }
            document.getElementById("bottable2").innerHTML = cdv;
    
    document.getElementById("bottable").innerHTML = txt;
}
function start(){
    homeread();
    brandsread();
}
