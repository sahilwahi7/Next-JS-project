import Image from "next/image"
export const HomePage=({data})=>{
    return(
    <div className="homeBody">
    {data.map(e => 
               <a className="card" key={e.id} href={`/events/${e.id}`}>
                     <Image atl={e.title} width={600} height={200} src={e.image}/>  
                     <div className="contents">
                           <h2>{e.title}</h2> 
                           <h2>{e.description}</h2>
                     </div> 
                </a>
                
              )
      }

  </div>)

}
