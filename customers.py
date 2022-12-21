from xml.dom.minidom import parse
import xml.dom.minidom

DOMTree = xml.dom.minidom.parse("customers.xml")
collection = DOMTree.documentElement

print("Content-Type: text/html\n")
print('<html>')
a="""<head>
        <link rel="stylesheet" href="jquery.dataTables.min.css" />
    
        <script type="text/javascript" src="jquery-3.6.0.min.js">
        
        </script>
        
        <script type="text/javascript" src="jquery.dataTables.min.js"></script>
        
        <script src="functions.js" type="text/javascript"></script>
        
        <link rel='stylesheet' href='style.css'>
        <link href="tooltip.css" rel="stylesheet" type="text/css" />
        <script src="tooltip.js" type="text/javascript"></script>
    </head>"""
print(a)
print("<body >")
customers = collection.getElementsByTagName("customer")
print('<div id="middle2">')    
print('<table id="cusTable" class="cell-border hover" class="hover">')        
print('<thead>')
print('<tr>')
print('<th>Customer ID</th>')
print('<th>Email Address</th>')
print('<th>Contact Number</th>')
print('<th>Registration Date</th>')
print('</tr>')
print('</thead>')

for customer in customers:
    print('<tr>')
    cid = customer.getElementsByTagName('cid')[0]
    print('<td>'+ cid.childNodes[0].data+'</td>')
    email = customer.getElementsByTagName('email')[0]
    print('<td>'+ email.childNodes[0].data+'</td>')
    contact = customer.getElementsByTagName('contact')[0]
    print('<td>'+ contact.childNodes[0].data+'</td>')
    regisdate = customer.getElementsByTagName('regisdate')[0]
    print('<td>'+ regisdate.childNodes[0].data+'</td>')
    print('</tr>')

print('</table>')            
print('</div>')       
print('<header>')    
print('<div id="header"></div>')    
print('<ul class="headul">')        
print('<li><a href="stock.py">StockIn</a></li>')        
print('<li><a href="orders.py">Orders</a></li>')            
print('<li><a href="customers.py">Customers</a></li>')            
print('<li><a href="login.py">Logout</a></li>')            
print('</ul>')            
print('<a href="index.py">')        
print('<img src="pics/logo.png" id="logo">')        
print('</a>')            
print('<div id="inputs">')        
print('<input type="text" id="insearch" required />')        
print('<label id="labsearch">search product</label>')            
print('</div>')            
print('<img src="pics/cart.png" id="cart">')        
print('</header>')        
print('</body>')    
print('</html>')
