import team2 from './team2.jpg';
import './logo.css'
export function Getimage()
{
return(
    <>
    <div className='logo'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ratione cum provident assumenda ullam veniam animi. Libero illo minima quia, nobis consequuntur molestiae deleniti beatae odio asperiores architecto quibusdam explicabo?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum magnam ex labore cumque error doloremque, sunt debitis autem aspernatur quis, ad tempore? Pariatur doloremque autem quibusdam voluptatem, accusantium ea impedit.</p>
        <img src={team2} style={{height:"100px",width:"100px"}}alt="" />
    </div>
    </>
)
}