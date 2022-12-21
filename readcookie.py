from http import cookies
import os

name = ""
email = ""
testname = ""
testemail = ""
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
        testname=mycookie['testname'].value
        testemail = mycookie['testemail'].value
        pics = mycookie['picture'].value
        username = mycookie['username'].value
        password = mycookie['password'].value
        
    except KeyError:
        name = ""
        email = ""
        picture = ""


print("Content-Type: text/html\n")
print("<h1>"+name+"<h1>")
print("<h1>"+email+"<h1>")
print("<h1>"+testname+"<h1>")
print("<h1>"+email+"<h1>")
print("<h1>"+testemail+"<h1>")
print("<h1>"+password+"<h1>")
print("<img src='"+pics+"'>")

print(pics)

