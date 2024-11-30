export default function About() {
    return (
        <>
            {/*About Us*/}
            <section className="page-section bg-primary" id="about">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h2 className="text-white mt-0">We've got what you need!</h2>
                            <hr className="divider divider-light"/>
                            <p className="text-white-75 mb-4">At I-Droid Tech, we are a leading software development
                                company dedicated to providing high-quality solutions for all your tech needs. With our
                                team of experienced developers, we offer a wide range of services including web
                                development, mobile app development, and custom software development.</p>
                            <p className="text-white-75 mb-4">So, if you are looking for a reliable software development
                                company that can help you achieve your business goals, look no further than I-Droid
                                Tech. Contact us today to discuss your project and let us bring your vision to life.</p>
                            <a className="btn btn-light btn-xl" href="#services">Find Out More</a>
                        </div>
                    </div>
                </div>
            </section>
            {/*Services*/}
            <section className="page-section" id="services">
                <div className="container px-4 px-lg-5">
                    <h2 className="text-center mt-0">At Your Service</h2>
                    <hr className="divider"/>
                    <div className="row gx-4 gx-lg-5">
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="mt-5">
                                <div className="mb-2"><i className="bi-globe fs-1 text-primary"></i></div>
                                <h3 className="h4 mb-2">Software Engineering</h3>
                                <p className="text-muted mb-0">We can develop Enterprise-level system to meet your
                                    requirements</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="mt-5">
                                <div className="mb-2"><i className="bi-laptop fs-1 text-primary"></i></div>
                                <h3 className="h4 mb-2">System Administration</h3>
                                <p className="text-muted mb-0">We'll help you to maintain high performance, high
                                    availability and low latency servers</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="mt-5">
                                <div className="mb-2"><i className="bi-gem fs-1 text-primary"></i></div>
                                <h3 className="h4 mb-2">Security Consultant</h3>
                                <p className="text-muted mb-0">Our security consultants are experts in identifying
                                    vulnerabilities and implementing
                                    robust security measures to protect your systems and data.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 text-center">
                            <div className="mt-5">
                                <div className="mb-2"><i className="bi-heart fs-1 text-primary"></i></div>
                                <h3 className="h4 mb-2">Made with Love</h3>
                                <p className="text-muted mb-0">We not work to finish project and get paid, we love our
                                    work this is what make our work unique</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}