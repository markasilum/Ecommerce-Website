from http import cookies

import cgi, cgitb
from xml.dom.minidom import parse
import xml.dom.minidom

username =""
pasword = ""
testname = ""
testemail = ""

form = cgi.FieldStorage()

username = form.getvalue('username')
passw = form.getvalue('password')
signin = form.getvalue('signin')

expires = 60*60
mycookie = cookies.SimpleCookie()
mycookie['username'] = username
mycookie['password'] = passw
mycookie["testname"] = testname
mycookie["testemail"] =  testemail

print(mycookie)
print("Content-Type: text/html\n")
# print( "<script>window.open('http://127.0.0.1/index.py');</script>")
# print( "<script>window.close();</script>")
# print("<h1>"+username+"<h1>")
# print("<h1>"+passw+"<h1>")