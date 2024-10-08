import React from 'react';
import './About.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Femjur from '../Assets/Images/ImgPages/femjurStyrelse.jpg';

function About() {
    return (
        <div className="about-us-container">
            <h1 className="text-center mb-5 pt-5" style={{ color: '#C471C4' }}>Om Oss</h1>

            {/* Larger box at the top with restricted width */}
            <div className="container">
                <div className="row mb-4 justify-content-center">
                    <div className="col-12 col-lg-10">
                        <div className="about-card about-card-large custom-bg p-5 shadow rounded">
                            <div className="about-image">
                            { /* }
                                <img
                                    src="https://via.placeholder.com/1200x500"
                                    alt="Large Image"
                                    className="img-fluid rounded w-100"
                                />
                                /*}
                                {/* Optional larger image from assets */}
                                <img src={Femjur} alt="Femjur" style={{ width: '100%', height: 'auto%', margin: '0 15px' }} />
                            </div>
                            <div className="about-text mt-3">
                                <h2 style={{ color: '#C471C4' }}>Förtroendevalda till Styrelsen</h2>
                                <p style={{ color: '#555' }}>
                                    (Vänster till höger) Saga, Vera, Helga, ordförande Agnes, vice ordförande Hannah, Linnea och Miranda!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Grid layout: two smaller boxes in each row */}
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center mb-4">
                        <div className="about-card custom-bg p-4 shadow rounded">
                            <div className="about-image">
                                <img
                                    src="https://via.placeholder.com/500x500"
                                    alt="Team Member"
                                    className="img-fluid rounded"
                                />
                            </div>
                            <div className="about-text mt-3">
                                <h3 style={{ color: '#C471C4' }}>Vår Vision</h3>
                                <p style={{ color: '#555' }}>
                                    Här kan vi skriva om er vision!
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 d-flex justify-content-center mb-4">
                        <div className="about-card custom-bg p-4 shadow rounded">
                            <div className="about-image">
                                <img
                                    src="https://via.placeholder.com/500x500"
                                    alt="Team Member"
                                    className="img-fluid rounded"
                                />
                            </div>
                            <div className="about-text mt-3">
                                <h3 style={{ color: '#C471C4' }}>Våra Värderingar</h3>
                                <p style={{ color: '#555' }}>
                                    Vi tror på våra värderingar!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Next row of two smaller boxes */}
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center mb-4">
                        <div className="about-card custom-bg p-4 shadow rounded">
                            <div className="about-image">
                                <img
                                    src="https://via.placeholder.com/500x500"
                                    alt="Team Member"
                                    className="img-fluid rounded"
                                />
                            </div>
                            <div className="about-text mt-3">
                                <h3 style={{ color: '#C471C4' }}>Vårt Engagemang</h3>
                                <p style={{ color: '#555' }}>
                                    Vi engagerar oss för att skapa bra studier!
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 d-flex justify-content-center mb-4">
                        <div className="about-card custom-bg p-4 shadow rounded">
                            <div className="about-image">
                                <img
                                    src="https://via.placeholder.com/500x500"
                                    alt="Team Member"
                                    className="img-fluid rounded"
                                />
                            </div>
                            <div className="about-text mt-3">
                                <h3 style={{ color: '#C471C4' }}>Engagera Dig!</h3>
                                <p style={{ color: '#555' }}>
                                    Engagera dig och bidra till vårt arbete!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
