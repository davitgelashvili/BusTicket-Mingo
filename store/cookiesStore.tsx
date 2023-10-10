
import { setCookie } from 'cookies-next';
 
async function cookiesStore(data:any) {
    
    setCookie('mytickets', {
            reserved: data.reserved, 
            seat_id: data.seat_id,
            _id: data._id,
        }, { maxAge: 30000 });
}

export default cookiesStore