import Card from "../components/card";
import img1 from '../img/img1.jpg'
import car2 from '../img/car2.webp'
import carou from '../img/carou.JPG'
import { Carousel } from "react-bootstrap";


export default function PanelesSolares() {

    return (
        <div>
        
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
            <Card title={'Paneles solares argentinos: Calidad asegurada'} description={'Los paneles que ofrecemos son integrados en laboratorios de nuestro país donde se fabricaron todos los paneles solares acoplados a los satélites construidos en la República Argentina, bajo estricto cumplimiento de todos los ensayos de aceptación y calificación de las Normas Vigentes.'} src={img1} />
            </Carousel.Item>
            <Carousel.Item>
            <Card title={'Procedimientos certificados para paneles solares'} description={'La integración de las celdas a los paneles se realiza con los mismos procedimientos aprobados por los organismos internacionales, con realización de ciclados térmicos en vacío y en atmósfera controlada.'} src={car2} />
                
            </Carousel.Item>
            <Carousel.Item>
            <Card title={'Garantía de calidad en cada panel solar'} description={'A cada panel se le realiza los informes de Aislamiento de continuidad entre celdas y sustrato y verificaciones de funcionamiento, Flash e inspecciones visuales de las celdas solares.'} src={carou   } />
            </Carousel.Item>
        </Carousel>
        </div>
    )


}