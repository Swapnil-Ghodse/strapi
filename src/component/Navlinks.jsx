import { useGlobalContext } from "../Context";
import sublinks from "../data"


function Navlinks() {

const {setPageId} = useGlobalContext();

  return (
        <div className="nav-links">
            {sublinks.map( (sublink) =>{
                const {pageId, page} = sublink;
                console.log(pageId);
                return <button key={pageId}  className="nav-link" onMouseEnter={()=>setPageId(pageId)} >
                {page}</button>
            })}
        </div>
    )
}

export default Navlinks