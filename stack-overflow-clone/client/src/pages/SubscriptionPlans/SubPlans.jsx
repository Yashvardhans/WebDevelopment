import {useEffect , useState} from 'react';
import axios from 'axios';
import './SubPlans.css'


const SubPlans = () => {

    
    const [ prices , setPrices] = useState([])

    const createSession = async (priceId)=>{
        const {data : response} = await axios.post("http://localhost:5000/subs/session", {priceId});

        window.location.href = response.url ;

    }

    


    useEffect(() => {
         fetchPrices()
    } , []) 

    

    const fetchPrices = async() =>{
        const response = await axios.get('http://localhost:5000/subs/prices');
        setPrices(response.data.data)
        
    }
    return (
        <div className='plans'>
            {prices.map((price) =>
        
                <div className='plans-card'>
                    <div>{price.name}</div>
                    <div>Rs. {price.amount}</div>
                    <button onClick={()=>{createSession(price.id)}}>Buy now</button>
                    {console.log(price.name)}
                    
                </div>

               
            )}
        </div>
       
    )
};

export default SubPlans;