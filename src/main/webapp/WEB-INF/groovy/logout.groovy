if(!session) {
	session = request.getSession(true);
}
session.removeAttribute('role');

forward 'index'