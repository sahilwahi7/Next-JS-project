import Image from 'next/image';

export async function getStaticPaths(){
    const {events_categories}= await import('/data/data.json');
    const allPaths= events_categories.map((e)=>{
        return {
            params: {
                cat: e.id.toString(),
            },
        };
    });
    console.log(allPaths)

    return{
        paths: allPaths,
        fallback: false
    };
}

export async function getStaticProps(context){
    
    const id= context?.params.cat; //get  variable from all paths
    
    const {allEvents}= await import('/data/data.json');
    const data=allEvents.filter((e)=>e.city.toLowerCase()===id);
    console.log(data)
    return {
        props:{data},
    };
}

const eventPage=({data})=>{
    return(
        <div>
        {data.map(e => 
            <a key={e.id} href={`/events/${e.city}/${e.id}`}>
                  <Image atl={e.title} width={200} height={100} src={e.image}/>   
                  <h2>{e.title}</h2> 
                  <p> {e.description}</p> 
             </a>
           )
   }
</div>
    )
}
 
export default eventPage