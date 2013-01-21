
System.out.println('wydPlugin init started...')

binding {
	
}

routes {
	
}

before {
	
	//log.warning "Entering $request.requestURI"

	String msg = request.infoMessage
	if (msg != null) {
		request.infoMessage = msg
		log.info("Info Message = $msg")
	}

	msg = request.errorMessage
	if (msg != null) {
		request.errorMessage = msg
		log.info("Error Message = $msg")
	}

	String backUrl = request.backUrl
	if(backUrl != null) {
		request.backUrl = backuUrl
		log.info("Back URL = $backUrl")
	}
	
}

after {
	
	 //log.warning "Exiting $request.requestURI"
}

System.out.println('wydPlugin init finished...')