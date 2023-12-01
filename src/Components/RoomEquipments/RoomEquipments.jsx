import ReserverBtn from "../ReserverBtn/ReservezBtn";


export default function Salon({imageSrc1, imageSrc2, imageSrc3, title2, text, li1, li2, li3, li4, li5, li6, li7, li8, li9, li10, li11}) {
    return (
        <article className="salon">
            <div className="salon__div1" >
               <div  className="salon__div1-img" style={{
                    backgroundImage: `url(${imageSrc1})`
                }} data-aos="fade-right"></div>
            </div>
            <div className="salon__div2" data-aos="fade-left">
                <h3 className="salon__div2-title">{title2}</h3>
                <ul className="salon__div2-list">
                    {li1 &&<li className="salon__div2-list-item">{li1}</li>}
                    {li2 &&<li className="salon__div2-list-item">{li2}</li>}
                    {li3 &&<li className="salon__div2-list-item">{li3}</li>}
                    {li4 &&<li className="salon__div2-list-item">{li4}</li>}
                    {li5 &&<li className="salon__div2-list-item">{li5}</li>}
                    {li6 &&<li className="salon__div2-list-item">{li6}</li>}
                    {li7 &&<li className="salon__div2-list-item">{li7}</li>}
                    {li8 &&<li className="salon__div2-list-item">{li8}</li>}
                    {li9 &&<li className="salon__div2-list-item">{li9}</li>}
                    {li10 &&<li className="salon__div2-list-item">{li10}</li>}
                    {li11 &&<li className="salon__div2-list-item">{li11}</li>}
                </ul>
                <div className="btn__equipments">
                    <ReserverBtn/>
                </div>
            </div>
            <div className="salon__div3" style={{
                    backgroundImage: `url(${imageSrc2})`
                }} data-aos="fade-right"/>
            
            <div className="salon__div4" style={{
                    backgroundImage: `url(${imageSrc3})`
                }} data-aos="fade-up"/>
                
        </article>
    );
}