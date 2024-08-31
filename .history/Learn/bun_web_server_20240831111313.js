import {serve} from 'bun';

server({
    fetch(request){
        const url = new URL(request.url);
        if(url.pathname === '/'){
            return new Response("hello world",{status:200});
        }else if(url.pathname === '/ice-teas'){
            
        }
    }
})