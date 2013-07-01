
get "/favicon.ico", redirect: "/assets/img/fav-icon.png"

get  '/',		       forward : '/index.groovy'
get  '/index',	       forward : '/index.groovy'
post '/authenticate',  forward : '/authenticate.groovy'
get  '/logout',	       forward : '/logout.groovy'


