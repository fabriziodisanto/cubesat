export default function Card({title,description,src}){
    
    return(

        <div className="cardcontainer">
            <img src={src} alt="img-slide"/>
            <div className="cardtext">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )

}
