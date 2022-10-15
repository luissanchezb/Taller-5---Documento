function Abrirventana(){
	myWindow = window.open('', 'Ventana Secundaria', 'width=300, height=200');
	myWindow.document.write('<html>');
	myWindow.document.write('<head>'); 
	myWindow.document.write('<title>APLICACIONES WEB 1 - VENTANA SECUNDARIA.</title>');
	myWindow.document.write('</head>'); 
	myWindow.document.write('<body><center>'); 
	myWindow.document.write('APELLIDOS Y NOMBRES: ');
	myWindow.document.write('<p style=" color:#F65010"> SANCHEZ BRIONES LUIS ALFREDO.  </p>'); 
	myWindow.document.writeln('SE UTILIZARON LAS MEDIDAS. '); 
	myWindow.document.write('<ul> WIDTH = 300 </ul>  <ul> HEIGHT = 200</ul>'); 
	myWindow.document.write('<button onclick="window.close();"> CERRAR ESTA VENTANA </button><br> ');
    myWindow.document.write('<background-color: #acacacdc> '); 
	myWindow.document.write('</center></body>'); 
	myWindow.document.write('</html>');
};
