import './App.css';
function Course() {

    return (
        <>
            <div className="course-container">
                <div className="course-header"><h1 className='display-2'>This is a header</h1></div>
                <div className='course-content'>
                    <div className='course-dropdowns'>
                        <div class="faq-div container-fluid" id="faq">
                            <div class="row d-flex flex-column align-items-center justify-content-center">
                                <section id="faq" class="faq section-bg">
                                    <div class="container" data-aos="fade-up">
                                        <div class="section-title text-center">
                                            <p>Frequently Asked Questions</p>
                                        </div>

                                        <div class="faq-list">
                                            <ul>
                                                <li
                                                    data-aos="fade-up"
                                                    style={{
                                                        "background-color": "#f0efef",
                                                        color: "black",
                                                    }}
                                                >
                                                    <i class="bx bx-help-circle icon-help"></i>{" "}
                                                    <a
                                                        data-bs-toggle="collapse"
                                                        class="collapse"
                                                        data-bs-target="#faq-list-1"
                                                    >
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit?
                                                        <i class="bx bx-chevron-down icon-show"></i>
                                                        <i class="bx bx-chevron-up icon-close"></i>
                                                    </a>
                                                    <div
                                                        id="faq-list-1"
                                                        class="collapse show"
                                                        data-bs-parent=".faq-list"
                                                    >
                                                        <p>
                                                            Lorem ipsum dolor sit amet consectetur adipisicing
                                                            elitLorem ipsum dolor sit amet consectetur adipisicing
                                                            elit
                                                        </p>
                                                    </div>
                                                </li>

                                                <li
                                                    data-aos="fade-up"
                                                    data-aos-delay="200"
                                                    style={{
                                                        "background-color": "#f0efef",
                                                        color: "black",
                                                    }}
                                                >
                                                    <i class="bx bx-help-circle icon-help"></i>{" "}
                                                    <a
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#faq-list-3"
                                                        class="collapsed"
                                                    >
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                                                        <i class="bx bx-chevron-down icon-show"></i>
                                                        <i class="bx bx-chevron-up icon-close"></i>
                                                    </a>
                                                    <div
                                                        id="faq-list-3"
                                                        class="collapse"
                                                        data-bs-parent=".faq-list"
                                                    >
                                                        <p>
                                                            Lorem ipsum dolor sit amet consectetur adipisicing
                                                            elitLorem ipsum dolor sit amet consectetur adipisicing
                                                            elit
                                                        </p>
                                                    </div>
                                                </li>

                                                <li
                                                    data-aos="fade-up"
                                                    data-aos-delay="300"
                                                    style={{
                                                        "background-color": "#f0efef",
                                                        color: "black",
                                                    }}
                                                >
                                                    <i class="bx bx-help-circle icon-help"></i>{" "}
                                                    <a
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#faq-list-4"
                                                        class="collapsed"
                                                    >
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                                                        <i class="bx bx-chevron-down icon-show"></i>
                                                        <i class="bx bx-chevron-up icon-close"></i>
                                                    </a>
                                                    <div
                                                        id="faq-list-4"
                                                        class="collapse"
                                                        data-bs-parent=".faq-list"
                                                    >
                                                        <p>
                                                            Lorem ipsum dolor sit amet consectetur adipisicing
                                                            elitLorem ipsum dolor sit amet consectetur adipisicing
                                                            elit
                                                        </p>
                                                    </div>
                                                </li>

                                                <li
                                                    data-aos="fade-up"
                                                    data-aos-delay="300"
                                                    style={{
                                                        "background-color": "#f0efef",
                                                        color: "black",
                                                    }}
                                                >
                                                    <i class="bx bx-help-circle icon-help"></i>{" "}
                                                    <a
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#faq-list-5"
                                                        class="collapsed"
                                                    >
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                                                        <i class="bx bx-chevron-down icon-show"></i>
                                                        <i class="bx bx-chevron-up icon-close"></i>
                                                    </a>
                                                    <div
                                                        id="faq-list-5"
                                                        class="collapse"
                                                        data-bs-parent=".faq-list"
                                                    >
                                                        <p>
                                                            Lorem ipsum dolor sit amet consectetur adipisicing
                                                            elitLorem ipsum dolor sit amet consectetur adipisicing
                                                            elit
                                                        </p>
                                                    </div>
                                                </li>

                                                <li
                                                    data-aos="fade-up"
                                                    data-aos-delay="300"
                                                    style={{
                                                        "background-color": "#f0efef",
                                                        color: "black",
                                                    }}
                                                >
                                                    <i class="bx bx-help-circle icon-help"></i>{" "}
                                                    <a
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#faq-list-6"
                                                        class="collapsed"
                                                    >
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                                                        <i class="bx bx-chevron-down icon-show"></i>
                                                        <i class="bx bx-chevron-up icon-close"></i>
                                                    </a>
                                                    <div
                                                        id="faq-list-6"
                                                        class="collapse"
                                                        data-bs-parent=".faq-list"
                                                    >
                                                        <p>
                                                            Lorem ipsum dolor sit amet consectetur adipisicing
                                                            elitLorem ipsum dolor sit amet consectetur adipisicing
                                                            elit
                                                        </p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>

                    </div>
                    <div className='course-card'>
                        <div class="card">
                            <iframe src="https://www.youtube.com/embed/pWahNIMRxR0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <div class="card-body">
                                <h5 class="card-title">Random course</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className='d-flex'>
                                <h5 class="card-title me-5">10000</h5>
                                <h5 class="card-title me-5"><del>50000</del></h5>
                                </div>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Course;