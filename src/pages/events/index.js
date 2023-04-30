import Image from 'next/image';
const EventsPage= ({data})=>{
    return(
        <div>
             {data.map(e => 
                 <a key={e.id} href={`/events/${e.id}`}>
                       <Image atl={e.title} width={200} height={100} src={e.image}/>   
                       <h2>{e.title}</h2> 
                       <p> {e.description}</p> 
                  </a>
                )
        }
   </div>)
}

export async function getStaticProps(){
    const {events_categories}= await import('/data/data.json');
    return{
        props:{
            data: events_categories,
        },
    };
}

export default EventsPage;