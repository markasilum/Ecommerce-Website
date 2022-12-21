from http import cookies
import cgi, cgitb

form = cgi.FieldStorage()

pics = form.getvalue('pics')
name = form.getvalue('name')
email = form.getvalue('email')
username = form.getvalue('username')
passw = form.getvalue('password')

expires = 0
mycookie = cookies.SimpleCookie()

mycookie['name'] = name
mycookie['email'] = email
mycookie['picture'] = pics
mycookie['username'] = username
mycookie['password'] = passw
mycookie['email']['expires'] = expires
mycookie['name']['expires'] = expires
mycookie['picture']['expires'] = expires
mycookie['username']['expires'] = expires
mycookie['password']['expires'] = expires
print(mycookie)
print("Content-Type: text/html\n")
#print( "<script> location.href ='http://localhost/index.py';</script>")
print( "<script>window.open('http://127.0.0.1/home.py');</script>")
print( "<script>window.close();</script>")
