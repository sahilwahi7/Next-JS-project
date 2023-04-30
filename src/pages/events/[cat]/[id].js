import EventsPage from '..';
import Image from 'next/image';
import { useRef } from 'react';
import { useRouter } from 'next/router';

export async function getStaticPaths(){
    const {allEvents}= await import('/data/data.json');
    const allPaths= allEvents.map((e)=>{
        return{
            params:{
                cat:e.city,
                id:e.id
            }
            
        }
    })
    
    return{
        paths:allPaths,
        fallback:false
    }
}

export async function getStaticProps(context){
    const {allEvents}=await import('/data/data.json')
    console.log(context)
    const id=context.params.id;
    const data= allEvents.find((e)=> (e.id===id))
    const total=data.emails_registered.length
    console.log(data)
    console.log(total)
    return{
        props:{
            data:data,
            total:total
        },
    }
    

}

export default function SingleEventsPage(props){
    const inputEmail=useRef();
    const router=useRouter();
    
    const onSubmit=async(e)=>{
        
        e.preventDefault();
        const emailValue=inputEmail.current.value;
        const eventId= router?.query.id;

        try{
          const resp=await fetch('/api/emailRegistration',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                email:emailValue, eventId
            })

            

          })
         if(!resp.ok) throw new Error(`Error: ${resp.status}`)
          const data= await resp.json()
          console.log('POST',data)
          
          console.log(props.total)
        }catch(e){
            console.log(e,'ERROR')
        }
    };
    return(
        
        <div className='event_single_page'>
       
        <Image atl={props.data.title} width={200} height={100} src={props.data.image}/>   
        <h2>{props.data.title}</h2> 
        <p> {props.data.description}</p> 

        <form onSubmit={onSubmit} className="email_registration">
            <label> Get registered for event</label>
            <input ref={inputEmail} type="text" placeholder="enter your email here" id="email"></input>
            <button>Submit</button>
        </form>
        
        <h3> Number of already registerted:{props.total} </h3>
   
        
        
        </div>
    )
}

