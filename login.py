from http import cookies
import os
import cgi, cgitb
from certifi import where
from xml.dom.minidom import parse
import xml.dom.minidom

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
password = ""


head = '''
 <!DOCTYPE html>
<html>
<head>
    <link rel='stylesheet' href='style.css'>
    <script src="functions.js"></script>

</head>
'''
bodyhead = '''<body>
    <div id="middle2">
    <div id="login">'''

bodyform='''
        <form  method="post" action="cookies.py">
        <div>
            <label id="logB">Login</label>
        </div>
        
        <div>
        <input type="text" name="username" id="logIn" required />
            <label id="logLab">Your Username</label>
        </div>
        
        <div>
            <input type="password" name="password" id="passIn" required />
            <label id="passLab">Password</label>
        </div>

        <div>            
            <input type="submit" name="signin" value="Sign In" id="signin" onclick=signin()>
        </div>
        </form>

        
        '''
        

tosignup = '''
    <form method ="post" action="cookies.py">
        <div>
            <input type='hidden' name='google' value="1" hidden>
            <img src="pics/btn_google_signin_dark_normal_web.png" id="google" onclick=openWin()>
           
        </div>
        <div>
            <a id="signup" href="signup.py">New here? Register</a>
        </div>
    </div>
    </div>
    </form>
    '''

bottom = '''    <header>
        <div id="header"></div>
        <ul class="headul">
            <li><a href="login.py">Login</a></li>
            <li><a href="signup.py">Register</a></li>
        </ul>'''
userpic =   "<div id='user'><img src='"+pics+"'id='user'></div>"        
bottom3='''        <a href="index.py">
            <img src="pics/logo.png" id="logo">
        </a>
        <div id="inputs2">
            <input type="text" id="insearch" required />
            <label id="labsearch">search product</label>
        </div>
        <img src="pics/cart.png" id="cart2">
    </header>
    
</body>
</html>   
'''
print("Content-Type: text/html\n")
print(head)
print(bodyhead)
print(bodyform)
print(tosignup)
print(bottom)
print(userpic)
print(bottom3)

