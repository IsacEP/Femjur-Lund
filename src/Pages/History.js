// src/Pages/History.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './History.css';
import startImage from '../Assets/Images/start.jpg';

function History() {
    return (
        <Container className="my-5 history-page">
            <h1 className="text-center mb-4">Historia</h1>
            <Row className="justify-content-center">
                <Col md={8}>
                    <section className="mb-5">
                        <h3>2015 - Start & Grundandet</h3>
                        <p>
                        Feministiska Juriststudenter Lund grundades 14 mars 2015 som en reaktion på bristen av ett normkritiskt 
                        och intersektionalistiskt perspektiv på juristutbildningen. Sporrade av att ingen tog problemet på allvar 
                        och inspirerade av FEMJUR i Uppsala och Göteborg tog vi saken i egna händer. 

                        Vi kände ett starkt behov av en plattform där ett fungerande påverkansarbete kunde bedrivas och konstruktiv kritik 
                        framföras i syfte att uppnå märkbar förändring på juristprogrammet. Lika viktigt var att skapa ett forum där vi kunde 
                        ventilera våra upplevelser på utbildningen, samla kraft och få utrymme att vara upprörda, arga och ledsna över saker vi var med om. 

                        </p>

                        <div className="text-center mt-4">
                            <img src={startImage} alt="History Start" className="img-fluid rounded" />
                            <p className="image-caption mt-2">
                                Grundande medlemmar av FEMJUR Lund: 
                                Hanna Rosqvist, Sonja Román, Caroline Beck-Friis*, Tina Asgharian, Frida Lindén, 
                                Mathilda Schlyter, Linnea Rosenkvist, Charlotta Svending*, Hugo Lundberg, Sanja Gojkovic och 
                                Andrea Wohlström. *Är inte med på bild. 
                                </p>
                        </div>

                    </section>

                    <section className="mb-5">
                        <h3>2020 - Corona-pandemin: vilandeförklaring och uppstart</h3>
                        <p>
                        På grund av då rådande pandemi blev föreningen år 2021 tvungen att vilandeförklara sin verksamhet. 
                        År 2022 kunde FEMJUR Lund starta upp sin verksamhet igen. Arbetet som låg framför föreningen var att 
                        återigen etablera sig på Juridiska fakulteten och juristutbildningen för att kunna bidra med ett normkritiskt 
                        och intersektionalistiskt perspektiv på programmet. 
                        </p>
                    </section>

                    <section className="mb-5">
                        <h3>2015 - Utökad Verksamhet</h3>
                        <p>
                            Genom åren expanderade föreningen sina aktiviteter med fler seminarier, workshops och
                            nätverksträffar. Vid detta tillfälle hade Feministiska juriststudenter Lund etablerat sig som
                            en viktig aktör för att lyfta jämställdhetsfrågor inom juridikstudierna.
                        </p>
                    </section>

                    <section className="mb-5">
                        <h3>Nutid</h3>
                        <p>
                        Idag fortsätter arbetet med att etablera sig bland juriststudenter i Lund. 
                        Läs mer om vårt arbete här (länkat till rubrik om vårt arbete) och bli medlem av 
                        Feministiska Juriststudenter Lund här (länk till formuläret)! 
                        </p>
                    </section>

                </Col>
            </Row>
        </Container>
    );
}

export default History;
