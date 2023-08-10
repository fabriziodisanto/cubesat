import Card from "../components/card";
import img1 from '../img/img1.jpg'
import car2 from '../img/car23.png'
import carou from '../img/carou.JPG'
import logo from '../img/logonew (1).png'
import imgor from '../img/4tocar.jpg'
import { Carousel } from "react-bootstrap";

export default function Whole() {

    return (
        <div>
            <section id='aboutUsSection' className="aboutus">
                <p className="aboutusdescription">S&L con varios años presente en el mercado integrando y comercializando Sensores Solares Gruesos (CSS) para empresas locales y del MERCOSUR dedicadas a la fabricación de Microsatélites, apuesta al crecimiento del sector Espacial y sale al mercado con un producto necesario para la integración de CUBESAT, contando para ello con el respaldo de la experiencia de Laboratorios Nacionales especializados en la materia.</p>
            </section>

            <section id='carouselSection'>
                <Carousel data-bs-theme="dark" className="carouselview">
                    <Carousel.Item>
                        <Card title={'Paneles Solares Argentinos: Calidad Asegurada'} description={'Los paneles que ofrecemos son integrados en laboratorios de nuestro país donde se fabricaron todos los paneles solares acoplados a los satélites construidos en la República Argentina, bajo estricto cumplimiento de todos los ensayos de aceptación y calificación de las Normas Vigentes.'} src={img1} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card title={'Producto Fiel'} description={'A cada panel se le realizan los informes de Aislamiento de continuidad entre celdas y sustrato y verificaciones de funcionamiento, Flash e inspecciones visuales de las celdas solares.'} src={imgor} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card title={'Procedimientos Certificados para Paneles Solares'} description={'La integración de las celdas a los paneles se realiza con los mismos procedimientos aprobados por los organismos internacionales, con realización de ciclados térmicos en vacío y en atmósfera controlada.'} src={car2} />

                    </Carousel.Item>
                    <Carousel.Item>
                        <Card title={'Integración Personalizada'} description={'Nuestros paneles solares son compatibles con CUBESAT con opciones personalizadas a pedido en tamaño de 1-6U. Sus celdas calificadas para vuelo del tipo triple juntura tienen una eficiencia estimada del 28%. El circuito impreso (PCB) de FR4 hace de sustrato del panel solar.'} src={carou} />
                    </Carousel.Item>
                </Carousel>
            </section>

            <section id='contactoSection' className="contacto">
                <img id='logo' src={logo} alt="logo" />
                <p>SOLUCIONES & LOGISTICA</p>
                <i className="bi bi-envelope-at icons"> <a href="mailto:solylog@gmail.com"> solylog@gmail.com</a></i>
                <i className="bi bi-telephone icons">  <a href="tel:1144407032">(11)4440-7032</a></i>
                <p >Asesor Técnico: Ing.Jose Di Santo</p>
            </section>
        </div>
    )



}


