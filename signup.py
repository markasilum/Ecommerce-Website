#this one is for accepting inputs in signup
from tkinter.tix import Tree
from turtle import onclick
import xml.etree.ElementTree as ET
import cgi, cgitb
import string
import random
import os
import image
import cgi, cgitb
from datetime import date
print("Content-Type: text/html\n")

#formcaptcha
#realcaptaca
#submitform
#reloadform = boolean



#first generate image to display captcha
image_info = image.ImageCaptcha(width=250, height=100)
def id_generator(size=5, chars=string.ascii_uppercase + string.digits):
    return ''.join(random.choice(chars) for _ in range(size))


#first part. input boxes
form = cgi.FieldStorage()


regdate = date.today()
dateformat =regdate.strftime("%m/%d/%y")
Phone = form.getvalue('phone')
Email = form.getvalue('email')
Password = form.getvalue('password')
Captcha = form.getvalue('captcha')
realCaptcha = form.getvalue('realcaptcha')
submitform = form.getvalue('submit_button')
reloadform = form.getvalue('reload')
imagefilename=""
captcha_text =""
rightorwrong = ""
id = 0
tree = ET.parse("customers.xml")
root = tree.getroot()
for type_tag in tree.findall("customer"):
        id=id+1
# #if not Phone and not Email:

if Captcha != realCaptcha:
        os.remove(realCaptcha+'Captcha.png')
        captcha_text = id_generator()
        source = image_info.generate(captcha_text)
        image_info.write(captcha_text, captcha_text +'Captcha.png')
        imagefilename = captcha_text +'Captcha.png'
        rightorwrong = '<p id="wrong"> Wrong Captcha</p>'

elif Captcha == realCaptcha and submitform=="Submit":
        intid = id+1 
        newid = str(intid)        
        b = ET.SubElement(root, 'customer')
        cid = ET.SubElement(b, 'cid')
        cid.text = newid
        email = ET.SubElement(b, 'email')
        email.text = Email
        contact = ET.SubElement(b, 'contact')
        contact.text = Phone
        regisdate = ET.SubElement(b, 'regisdate')
        regisdate.text = dateformat
        password = ET.SubElement(b, 'password')
        password.text = Password

        b_xml=ET.tostring(root)
        with open('customers.xml', 'wb') as f:
                        f.write(b_xml)
        redirectURL = "http://127.0.0.1/login.py"
        print('<html>')
        print('  <head>')
        print('    <link rel="stylesheet" href="style.css">') 
        print('    <script src="functions.js"></script>') 
        print('    <meta http-equiv="refresh" content="0;url='+str(redirectURL)+'" />') 
        print('  </head>')
        os.remove(realCaptcha+'Captcha.png')

if realCaptcha is None:
        captcha_text = id_generator()
        source = image_info.generate(captcha_text)
        image_info.write(captcha_text, captcha_text +'Captcha.png')
        imagefilename = captcha_text +'Captcha.png'

if reloadform==1:
        os.remove(realCaptcha+'Captcha.png')
        rightorwrong = ""

head='''
        <html>
        <head>
        <link rel='stylesheet' href='style.css'>
        <script src="functions.js"></script>
        </head>'''
print(head)
print('<body>')
print('<div id="middle2">') 
print('<div id="login">')
print('<form method ="post" action="signup.py">') 
signupform1 = '''
            <label id="logB">Sign Up</label>

            <div>
            <input type="text" name="phone" id="phonein" required />
            <label id="phonelab">Phone Number</label>
            </div>

            <div>
            <input type="text" name="email" id="emailin" required />
            <label id="emailLab">Email</label>
            </div>

            <div>
            <input type="password" name="password" id="passUpin" required />
            <label id="passUplab">Password</label>
            </div>
            '''
captchaform ="<div id='captcha'> <img src='"+imagefilename+"'></div>"            
               
realcap = "<input type='hidden' name='realcaptcha' value="+captcha_text+" hidden>"

reload ='''
        <div>
        <form method ="POST" action="signup.py">
        <input type='hidden' name='reload' value="1" hidden>
        <input type='submit' name='reload_button' id='reload' value='Reload'>
        </form>
        </div>
        '''

entertext = '''
            <div>
            <input type="captcha" name="captcha" id="enterTextin" required />
            <label id="entertext">Enter Text</label>
            </div>
            '''            
submit1= '<div><input type="submit" name="submit_button" value="Submit" id="signup2"></div>'

print(signupform1)
print(captchaform)
print(realcap)
print(entertext)
print(rightorwrong)
print(submit1)
print("</form>")
print('<form method ="post" action="signup.py">') 
print(realcap)
print(reload)
print("</form>")

       
print('</div>')
print('</div>')
header = '''<header>
            <div id="header"></div>
            <ul class="headul">
            <li><a href="stock.py">StockIn</a></li>
            <li><a href="orders.py">Orders</a></li>
            <li><a href="customers.py">Customers</a></li>
            <li><a href="login.py">Login</a></li>
            </ul>
            <a href="index.py">
            <img src="pics/logo.png" id="logo">
            </a>
            <div id="inputs">
            <input type="text" id="insearch" required />
            <label id="labsearch">search product</label>
            </div>
            <img src="pics/cart.png" id="cart">
            </header>'''
print(header)
print('</body>')
print('</html>')





