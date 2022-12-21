from http import cookies
import os
import cgi, cgitb
from certifi import where

name = ""
email = ""
pics = ""
username = ""
password = ""
if 'HTTP_COOKIE' in os.environ:
    cookie_string=os.environ.get('HTTP_COOKIE')
    mycookie=cookies.SimpleCookie()
    mycookie.load(cookie_string)
    try:
        name=mycookie['name'].value
        email = mycookie['email'].value
        pics = mycookie['picture'].value
        username = mycookie['username'].value
        password = mycookie['password'].value
        
    except KeyError:
        name = ""
        email = ""
        picture = ""
        username = ""
head = '''
    <html>
    <head>
    <link rel="stylesheet" href="jquery.dataTables.min.css" />
    <script type="text/javascript" src="jquery-3.6.0.min.js"></script>
    <script type="text/javascript" src="jquery.dataTables.min.js"></script>
    <script src="functions.js"></script>
    <link rel='stylesheet' href='style.css'>
    <link href="tooltip.css" rel="stylesheet" type="text/css" />
    <script src="tooltip.js" type="text/javascript"></script>   
    </head>
    '''
body = '''
<body onload="start()" >
    <div id="middle">
        
        <table id="headtable2"></table>
        <table id="headtable"></table>
    </div>
'''
header = '''
    <header>
        <div id="header"></div>
        <button type="button" id="logout" onclick="logOut()">Logout</button>
        <ul class="headul">
            <li><a href="stock.py">StockIn</a></li>
            <li><a href="orders.py">Orders</a></li>
            <li><a href="customers.py">Customers</a></li>  
        </ul>
        
        <a href="index.py">
            <img src="pics/logo.png" id="logo">
        </a>
        <div id="inputs2">
            <input type="text" id="insearch" required />
            <label id="labsearch">search product</label>
        </div>
        <img src="pics/cart.png" id="cart2">
    </header>
'''
userpic =   "<div id='user'><img src='"+pics+"'id='userpfp'></div>"
bottom = '''
<div id="bottom">
        <table id="bottable2" >  
        </table>
        <table id="bottable" >
        </table>
        
    </div>
    </div>
</body>
</html>
'''
print("Content-Type: text/html\n")
print(head)
print(body)
print(header)
print(userpic)
print(bottom)
