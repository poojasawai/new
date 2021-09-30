<!DOCTYPE html>
<html lang="en">
<head>
          <meta charset="UTF-8">
          <title>Document</title>

</head>
<body>
       <p id="myp">I am para <!--  this is comment --></p>
          <h1 id="myh1"> I am H1</h1>
          <div id="mydiv">
                    <span id="myspan">Hello</span>
           </div>
           <p id="para">I am para2</p>
           <h2 id="myh2">I am h2</h2>
          <script> 
          document.write("------- p Element------<br>");

          var elm=document.getElementById("myp");
           document.write(elm.nodeName+"<br>");
           document.write(elm.nodeValue+"<br>");
           document.write(elm.nodeType+"<br>");
           console.log(elm.nodeName);
           console.log(elm.nodeValue);
           console.log(elm.nodeType);
           document.write("------- p text------<br>");
           var txt=document.getElementById("myp");
           document.write(txt.firstChild.nodeName+"<br>");
           document.write(txt.firstChild.nodeValue+"<br>");
           document.write(txt.firstChild.nodeType+"<br>");
            console.log(txt.firstChild.nodeName);
            console.log(txt.firstChild.nodeValue);
            console.log(txt.firstChild.nodeType);
            document.write("------- p comment------<br>");
            var cmt=document.getElementById("myp");
            document.write(cmt.firstChild.nextSibling.nodeName+"<br>");
            document.write(cmt.firstChild.nextSibling.nodeValue+"<br>");
            document.write(cmt.firstChild.nextSibling.nodeType+"<br>");

            console.log(cmt.firstChild.nextSibling.nodeName);
            console.log(cmt.firstChild.nextSibling.nodeValue);
            console.log(cmt.firstChild.nextSibling.nodeType);
           
            document.write("-------h1 Element------<br>");
            var elm=document.getElementById("myh1");
            document.write(elm.nodeName+"<br>");
            document.write(elm.nodeValue+"<br>");
            document.write(elm.nodeType+"<br>");
            console.log(elm.nodeName);
            console.log(elm.nodeValue);
            console.log(elm.nodeType);
            document.write("-------text------<br>");
           var txt=document.getElementById("myh1");
           document.write(txt.firstChild.nodeName+"<br>");
           document.write(txt.firstChild.nodeValue+"<br>");
           document.write(txt.firstChild.nodeType+"<br>");
            console.log(txt.firstChild.nodeName);
            console.log(txt.firstChild.nodeValue);
            console.log(txt.firstChild.nodeType);
            document.write("-------  DIV Element------<br>");
            var elm=document.getElementById("mydiv");
           document.write(elm.nodeName+"<br>");
           document.write(elm.nodeValue+"<br>");
           document.write(elm.nodeType+"<br>");
           console.log(elm.nodeName);
           console.log(elm.nodeValue);
           console.log(elm.nodeType);
           document.write("-------  span Element------<br>");
           var elm=document.getElementById("mydiv");
           document.write(elm.firstChild.nextSibling.nodeName+"<br>");
           document.write(elm.firstChild.nextSibling.nodeValue+"<br>");
           document.write(elm.firstChild.nextSibling.nodeType+"<br>");
           console.log(elm.firstChild.nextSibling.nodeName);
           console.log(elm.firstChild.nextSibling.nodeValue);
           console.log(elm.firstChild.nextSibling.nodeType);
          // document.write(cmt.firstChild.nextSibling.nodeName+"<br>");
          document.write("------- span text------<br>");
            var elm1=document.getElementById("myspan");
            document.write(elm1.firstChild.nodeName+"<br>");
           document.write(elm1.firstChild.nodeValue+"<br>");
           document.write(elm1.firstChild.nodeType+"<br>");
           console.log(elm1.firstChild.nodeName);
           console.log(elm1.firstChild.nodeValue);
           console.log(elm1.firstChild.nodeType);
           document.write("------- p Element------<br>");
           var elm=document.getElementById("para");
           document.write(elm.nodeName+"<br>");
           document.write(elm.nodeValue+"<br>");
           document.write(elm.nodeType+"<br>");
           console.log(elm.nodeName);
           console.log(elm.nodeValue);
           console.log(elm.nodeType);
           document.write("------- p text------<br>");
           var elm=document.getElementById("para");
           document.write(elm.firstChild.nodeName+"<br>");
           document.write(elm.firstChild.nodeValue+"<br>");
           document.write(elm.firstChild.nodeType+"<br>");
           console.log(elm.firstChild.nodeName);
           console.log(elm.firstChild.nodeValue);
           console.log(elm.firstChild.nodeType);
           document.write("------- h2 Element------<br>");
           var elm=document.getElementById("myh2");
           document.write(elm.nodeName+"<br>");
           document.write(elm.nodeValue+"<br>");
           document.write(elm.nodeType);
           console.log(elm.nodeName);
           console.log(elm.nodeValue);
           console.log(elm.nodeType);
           document.write("------- h2 text------<br>");
           var elm=document.getElementById("myh2");
           document.write(elm.firstChild.nodeName+"<br>");
           document.write(elm.firstChild.nodeValue+"<br>");
           document.write(elm.firstChild.nodeType+"<br>");
           console.log(elm.firstChild.nodeName);
           console.log(elm.firstChild.nodeValue);
           console.log(elm.firstChild.nodeValue);











           









</script>  
</body>
</html>