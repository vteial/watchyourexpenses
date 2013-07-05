
get "/favicon.ico", redirect: "/assets/img/fav-icon.png"

get  '/',		       forward : '/index.groovy'
get  '/index',	       forward : '/index.groovy'
post '/register', 	   forward : '/register.groovy'
post '/resetPassword', forward : '/resetPassword.groovy'
post '/authenticate',  forward : '/authenticate.groovy'
get  '/logout',	       forward : '/logout.groovy'


