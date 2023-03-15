import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Logo } from '../Navbar/Logo/Logo';
import { Link } from 'react-router-dom';
export const Footer = React.memo(() => {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom container'>
                <div className='me-5 d-none d-lg-block'>
                    <span>Nuestras redes sociales:</span>
                </div>

                <div>
                    <a href='https://www.facebook.com/' className='me-4 text-reset' target="_blank" rel="noreferrer">
                        <MDBIcon fab icon="facebook-f" />
                    </a>
                    <a href='https://twitter.com/' className='me-4 text-reset' target="_blank" rel="noreferrer">
                        <MDBIcon fab icon="twitter" />
                    </a>
                    <a href='https://behance.net/' className='me-4 text-reset' target="_blank" rel="noreferrer">
                        <MDBIcon fab icon="behance" />
                    </a>
                    <a href='https://www.instagram.com/' className='me-4 text-reset' target="_blank" rel="noreferrer">
                        <MDBIcon fab icon="instagram" />
                    </a>
                    <a href='https://www.linkedin.com/in/paul-dennis-buitron-velarde-a65328147/'  className='me-4 text-reset' target="_blank" rel="noreferrer">
                        <MDBIcon fab icon="linkedin" />
                    </a>
                    <a href='https://github.com/pbuitron' className='me-4 text-reset' target="_blank" rel="noreferrer">
                        <MDBIcon fab icon="github" />
                    </a>
                </div>
            </section>

            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md="3" lg="5" xl="3" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>

                                <Logo nombreLogo={`Virgo`} />
                            </h6>
                            <p>
                                "Productos de yoga de alta calidad. Ofrecemos esterillas, ropa, accesorios y recursos para mejorar tu práctica. ¡Visítanos ahora!"
                            </p>
                        </MDBCol>

  

                        <MDBCol md="3" lg="" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Categorias</h6>
                            <Link className="dropdown-item" to={`category/accesorios-de-pilates`} >Accesorios de Pilates</Link>
                            <Link className="dropdown-item" to={`category/accesorios-de-yoga`} >Accesorios de Yoga</Link>
                            <Link className="dropdown-item" to={`category/cuidado-personal`} >Cuidado Personal</Link>
                            <Link className="dropdown-item" to={`category/mats`} >Mats</Link>
                            <Link className="dropdown-item" to={`category/ropa-de-yoga`} >Ropa de Yoga</Link>
                        </MDBCol>

                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p>
                                <MDBIcon icon="home" className="me-2" />
                                El Agustino, Lima, Perú
                            </p>
                            <p>
                                <MDBIcon icon="envelope" className="me-3" />
                                ventas@industrial-iot.us
                            </p>
                            <p>
                                <MDBIcon icon="phone" className="me-3" /> + 51 936312086
                            </p>
                           
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2023 Copyright-
                <a className='text-reset fw-bold' href='https://github.com/pbuitron' target="_blank">
                     Paul Buitrón
                </a>
            </div>
        </MDBFooter>
    );
})