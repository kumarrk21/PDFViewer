({

	loadpdf:function(component,event){
		try{
			var pdfData = component.get('v.pdfData');
			var pdfjsframe = component.find('pdfFrame')
			if(typeof pdfData != 'undefined'){
				pdfjsframe.getElement().contentWindow.postMessage(pdfData,'*');	
			}
		}catch(e){
			alert('Error: ' + e.message);
		}
	}
})