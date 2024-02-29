import {React, useRef} from 'react'
import sublinks from '../data';
import { useGlobalContext } from '../Context';

function Submenu() {

  const {pageID, setPageId} = useGlobalContext();
  const currentPage = sublinks.find( (item)=>item.pageId === pageID );
  
  const subMenuContainer = useRef(null);

  const handleMouseLeave = (event)=>{
    const submenu = subMenuContainer.current;
    const {left, right, bottom} = submenu.getBoundingClientRect();

    const {clientX, clientY} = event;

    if (clientX < left + 1 || clientX > right - 1 || clientY > bottom - 1) {
      setPageId(null);
    }


  }


  return (
    <div className={currentPage?'show-submenu submenu' : 'submenu'} onMouseLeave={handleMouseLeave} ref={subMenuContainer}>
      <h5>{currentPage?.page}</h5>
      <div
      className='submenu-links'
      style={{
        gridTemplateColumns: currentPage?.links?.length > 3 ? '1fr 1fr' : '1fr', 
      }}
      >
        {currentPage?.links?.map(
          (link)=>{
            const {id, url, label, icon } = link;

            return <a key={id} href={url}>{icon}{label}</a>
          }
        )}
      </div>
    </div>
    )
}

export default Submenu