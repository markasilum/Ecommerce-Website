from http import cookies
import os
import cgi, cgitb
from xml.dom.minidom import parse
import xml.dom.minidom
form = cgi.FieldStorage()

pics = form.getvalue('pics')
name = form.getvalue('name')
email = form.getvalue('email')
google = form.getvalue('google')


username = form.getvalue('username')
passw = form.getvalue('password')
signin = form.getvalue('signin')

expires = 60*60
mycookie = cookies.SimpleCookie()

mycookie['name'] = name
mycookie['email'] = email
mycookie['picture'] = pics
mycookie['username'] = username
mycookie['password'] = passw
mycookie['email']['expires'] = expires

DOMTree = xml.dom.minidom.parse("customers.xml")
collection = DOMTree.documentElement
customers = collection.getElementsByTagName("customer")

arremail = []
arrPass = []
for customer in customers:
    useremail = customer.getElementsByTagName('email')[0].childNodes[0].data
    arremail.append(useremail)
    userpassword = customer.getElementsByTagName('password')[0].childNodes[0].data
    arrPass.append(userpassword)

valid = "<script>window.open('http://127.0.0.1/index.py');</script>"

invalid = "<script>window.open('http://127.0.0.1/login.py');</script>"
print(mycookie)

print("Content-Type: text/html\n")
print(google)
# if username in arremail and passw in arrPass:
#     print(valid)
# elif username not in arremail and passw not in arrPass:
#     print(invalid)
# else:
#     print(valid)

# print( "<script>window.close();</script>")

