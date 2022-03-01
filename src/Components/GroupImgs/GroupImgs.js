



export default function GroupImgs({ source }) {
    return (

    <ul className="groupImgs__images" >

        {source.map((listitem) => (
            <li className="groupImgs__imgItemWrapper" key={listitem.index}>
                {listitem.link ? 
                <a className="groupImgs__imgItemLink" key={listitem.index} href={listitem.link}> 
                    <img className="groupImgs__imgItem" src={listitem.img} alt={listitem.altText}></img>
                </a>
                : 
                <img className="groupImgs__imgItem" src={listitem.img} alt={listitem.altText}></img>}
               
            </li>
        ))}

    </ul>  

    );
  }
  
  