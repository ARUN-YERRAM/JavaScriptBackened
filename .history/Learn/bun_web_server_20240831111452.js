import {serve} from 'bun';

serve({
    fetch(request){
        const url = new URL(request.url);
        if(url.pathname === '/'){
            return new Response("hello world",{status:200});
        }else if(url.pathname === '/ice-teas'){
            return new Response("hello ice teas",{status:200});
        }else{
            return new Response("hello 404",{status:404});
        }
    },
    port:3000,
    hostname:'127.0.0.1'
})