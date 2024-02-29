import sublinks from "../data.jsx";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../Context";

function Sidebar() {
  const { isSidebaropen, closeSidebar} = useGlobalContext();

  return (
    <aside className="sidebar">
      <div className="sidebar-container">
        <button className="close-btn">
          <FaTimes />
        </button>

        <div className="sidebar-links">
          {
            sublinks.map(
            
              (sublink)=>{
                
              const {links, page, pageid} = sublink;
                return (
                  <article key={pageid}>
                    <h4>{page}</h4>
                    <div className="sidebar-links" >
                      {links.map(
                        (link)=>{
                          const {url, icon, label, id} = link;
                          return <a key={id} href={url}>
                            {icon}
                            {label}
                          </a>
                        }
                      )}
                    </div>
                  </article>
                );
              }
            )
          }
        </div>
      </div>
    </aside>
    )
}

export default Sidebar