def root = new XmlSlurper().parseText('temp/t.txt')

def options = root.options
for(int i = 0; i < options.size(); i++) {
//  <option data-offset="-36000" value="Hawaii" >(GMT-10:00) Hawaii</option>	
	def option = options[i];
	println '\t{'
	println '\t\t"dataOffset" : "' + option.data-offset + '",'
	println '\t\t"value" : "' + option.value + '", '
	println '\t\t"displayValue" : "' + option.text() + '"'
	if(i+1 == options.size()) {
		println '\t} ' 
	}
	else {
		println '\t}, '
	}  
}