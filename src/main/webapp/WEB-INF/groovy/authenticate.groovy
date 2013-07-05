if(!session) {
	session = request.getSession(true);
}
session.role = 'user';

response.contentType = 'text/json'

println '''
{
    "code": 0,
    "description": "Success logged in..."
}
'''