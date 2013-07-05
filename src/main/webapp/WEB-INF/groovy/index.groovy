
if(session != null && session.role) {
	forward 'home.gsp'
	return
}
forward 'index.gsp'