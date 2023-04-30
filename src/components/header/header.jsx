import Image from "next/image"
export const Header=()=>(
    <header>
      <div>
        <div className="top-nav">
            <Image src={'https://images.unsplash.com/photo-1608889476561-6242cfdbf622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'} width={50} height={50} alt='logo'/>
            <nav>
                <ul>
                    <li> <a href='/'>Home</a></li>
                    <li> <a href='/aboutus'>About us</a></li>
                    <li><a href='/events'>Events</a></li>
   
                </ul>
               
               
                
            </nav>
        </div>
            <h1> Event management System</h1>
        
        </div>
    </header>
)

