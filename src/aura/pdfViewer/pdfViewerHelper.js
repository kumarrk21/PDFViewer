({

	loadpdf:function(component,event){
		try{
			var pdfData = component.get('v.pdfData');
			var pdfjsframe = component.find('pdfFrame')
			var cloned = JSON.parse(JSON.stringify(pdfjsframe));
			pdfjsframe.getElement().contentWindow.postMessage(pdfData,'*');
		}catch(e){
			alert('Error: ' + e.message);
		}
	}
})