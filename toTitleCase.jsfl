﻿/**@author Will Costahttp://www.williancosta.com/blogwillian87@gmail.comChanges the text of the selected TextField's to title case(the first letter of each word is capitalized, the rest are lower case.);**/var n = fl.getDocumentDOM().selection.length;var textField;var text;for(var i = 0; i < n; i++){	textField = fl.getDocumentDOM().selection[i];	text = textField.getTextString();	textField.setTextString(toTitleCase(text));}function toTitleCase(string){	var strOut = "";	while ((/(\b\w)(\S+\s*)/g.exec(string)) != null)    strOut += RegExp.$1.toUpperCase() + RegExp.$2.toLowerCase();    return strOut;}