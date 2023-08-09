export default function Card({title,description,src}){
    
    return(

        <div className="cardcontainer">
            <img src={src} alt="img-slide"/>
            <div className="cardtext">
                <h2>{title}</h2>
                <p className="carouselText">{description}</p>
            </div>
        </div>
    )

}
