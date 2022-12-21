from xml.dom.minidom import parse
import xml.dom.minidom

DOMTree = xml.dom.minidom.parse("products.xml")
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
orders = collection.getElementsByTagName("products")
print('<div id="middle2">')
print('<div id="middle3">')      
print('<table id="stkTable" class="cell-border hover" class="hover">')        
print('<thead>')
print('<tr>')
print('<th>Product ID</th>')
print('<th>Product Category</th>')
print('<th>Picture</th>')
print('<th>Product Name</th>')
print('<th>Product Price</th>')
print('<th>Quantity</th>')
print('<th>Date Ordered</th>')
print('</tr>')
print('</thead>')

for order in orders:
    print('<tr>')
    pid = order.getElementsByTagName('pid')[0]
    print('<td>'+ pid.childNodes[0].data+'</td>')

    pcat = order.getElementsByTagName('pcat')[0]
    print('<td>'+ pcat.childNodes[0].data+'</td>')

    image = order.getElementsByTagName('image')[0]
    print('<td>'+'<img src="pics/'+image.childNodes[0].data+'" id="stockPic"></td>')

    name = order.getElementsByTagName('name')[0]
    print('<td>'+ name.childNodes[0].data+'</td>')

    price = order.getElementsByTagName('price')[0]
    print('<td>'+ price.childNodes[0].data+'</td>')

    quantity = order.getElementsByTagName('quantity')[0]
    print('<td>'+ quantity.childNodes[0].data+'</td>')

    date = order.getElementsByTagName('date')[0]
    print('<td>'+ date.childNodes[0].data+'</td>')

    print('</tr>')
print('</table>')
print('</div>') 

print('<div id="stockin">')

print('<div>')            
print('<label id="stockTitle">Stock In</label>')                
print('</div>')            
    
print('<div>')           
print('<input type="text" name="prodid" value=""id="prodIdin" required />')                
print('<label id="prodIdlab">Product ID</label>')                
print('</div>')            
    
print('<div>')           
print('<input type="text" name="prodcat" value="" id="prodCatin" required />')                
print('<label id="prodCatlab">Product Category</label>')                
print('</div>')  

print('<div>')            
print('<input type="text" name="prodname" value=""id="prodNamein" required />')                
print('<label id="prodNamelab">Product Name</label>')                
print('</div>') 

print('<div>')            
print('<input type="text" name="prodprice" value="" id="prodPricein" required />')                
print('<label id="prodPricelab">Product Price</label>')                
print('</div>')  

print('<div>')            
print('<input type="text" name="prodquan" value="" id="prodQuanin" required />')                
print('<label id="prodQuanlab">Quantity</label>')                
print('</div>') 

print('<div>')    
print('<input type="file" id="filein" required />')            
print(' <label id="filelab">Picture</label>')                
print('</div>')  

print('</div>')                    
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
