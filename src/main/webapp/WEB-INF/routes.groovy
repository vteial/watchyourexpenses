
get "/", forward: "wydIndex.groovy"

get "/index.groovy", forward: "wydIndex.groovy"

get "/favicon.ico", redirect: "/images/gaelyk-small-favicon.png"
