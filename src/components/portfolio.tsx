export default function Portfolio() {
    const imgFluidStyles = {
        height: "236px",
        width: "100%"
    }
    return (
        <>
            <div id="portfolio">
                <div className="container-fluid p-0">
                    <div className="row g-0">
                        <div className="col-lg-4 col-sm-6">
                            <a className="portfolio-box" href="../src/assets/img/portfolio/fullsize/1.jpg"
                               title="Project Name">
                                <img className="img-fluid" src="../src/assets/img/portfolio/thumbnails/1.jpg" alt="..."/>
                                <div className="portfolio-box-caption">
                                    <div className="project-category text-white-50">Software Engineering</div>
                                    <div className="project-name">AirBnB Clone</div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <a className="portfolio-box" href="../src/assets/img/portfolio/fullsize/2.jpg"
                               title="Project Name">
                                <img className="img-fluid" src="../src/assets/img/portfolio/thumbnails/2.jpg" alt="..."/>
                                <div className="portfolio-box-caption">
                                    <div className="project-category text-white-50">Software Engineering</div>
                                    <div className="project-name">UNIX Shell</div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <a className="portfolio-box" href="../src/assets/img/portfolio/fullsize/3.jpg"
                               title="Project Name">
                                <img className="img-fluid" src="../src/assets/img/portfolio/thumbnails/3.jpg" alt="..."/>
                                <div className="portfolio-box-caption">
                                    <div className="project-category text-white-50">Software Engineering</div>
                                    <div className="project-name">Ecommerce web Application</div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <a className="portfolio-box" href="../src/assets/img/portfolio/fullsize/4.jpg"
                               title="Project Name">
                                <img className="img-fluid" src="../src/assets/img/portfolio/thumbnails/4.jpg" alt="..."
                                     style={imgFluidStyles}/>
                                <div className="portfolio-box-caption">
                                    <div className="project-category text-white-50">Security Consultant</div>
                                    <div className="project-name">Analyzed Some Companies system for security issues
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <a className="portfolio-box" href="../src/assets/img/portfolio/fullsize/5.jpg"
                               title="Project Name">
                                <img className="img-fluid" src="../src/assets/img/portfolio/thumbnails/5.jpg" alt="..."
                                     style={imgFluidStyles}/>
                                <div className="portfolio-box-caption">
                                    <div className="project-category text-white-50">System Administration</div>
                                    <div className="project-name">Manage Data center</div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <a className="portfolio-box" href="../src/assets/img/portfolio/fullsize/6.jpeg"
                               title="Project Name">
                                <img className="img-fluid" src="../src/assets/img/portfolio/thumbnails/6.jpeg" alt="..."
                                     style={imgFluidStyles}/>
                                <div className="portfolio-box-caption p-3">
                                    <div className="project-category text-white-50">Category</div>
                                    <div className="project-name">Project Name</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}