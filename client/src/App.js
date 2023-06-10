import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <header id="header" class="fixed-top d-flex align-items-cente">
        <div class="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
          <a href="index" class="logo me-auto me-lg-0">
            <img
              src="https://i.postimg.cc/fThfP8dw/get-sde-ready-logo-removebg-preview.png"
              alt=""
              class="img-fluid"
              width="70px"
            />
          </a>
          <nav id="navbar" class="navbar order-last order-lg-0">
            <ul>
              <li>
                <a class="nav-link scrollto active" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#about">
                  About
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#importance">
                  Learning
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#why-us">
                  Application
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#specials">
                  Curriculum
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#faq">
                  FAQ
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#devs">
                  Instructors
                </a>
              </li>
              <li>
                <a class="nav-link scrollto" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
          <a href="#contact" class=" scrollto d-none d-lg-flex"></a>
        </div>
      </header>

      <section id="hero" class="d-flex align-items-center">
        <div
          class="container position-relative text-center text-lg-start"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div class="row">
            <div class="col-lg-8">
              <h1>
                <span style={{color:"black"}}>Get SDE Ready</span>
              </h1>
              <br />
              <h2 style={{ fontWeight: "bold" }}>
                Fast-Track Your Success that Empower, Innovate, and Accelerate
                Your Tech Journey
              </h2>
              <br />

              <div class="btns">
                <a href="#contact" class="btn-menu animated fadeInUp scrollto">
                  Buy now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main id="main">
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div
                className="col-lg-6 order-1 order-lg-2"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="about-img">
                  <img
                    src="https://i.postimg.cc/fThfP8dw/get-sde-ready-logo-removebg-preview.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content mt-5">
                <h3>
                  Looking to fast-track your journey to become a Software
                  Development Engineer?
                </h3>
                <h3> What are you waiting for!</h3>
                <br />
                <ul>
                  <li>
                    <i className="bi bi-check-circle"></i> Our courses are
                    designed based on real-world coding scenarios, giving you an
                    unparalleled insight into the life of a Software Development
                    Engineer
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i> Each lesson and
                    module has been carefully curated and tested, based on the
                    latest industry practices and frameworks.
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i> Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since
                    the 1500s,
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i> Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since
                    the 1500s,
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="importance" class="importance">
          <div class="container" data-aos="fade-up">
            <div class="section-title text-center">
              <p>Best Learning Experience!</p>
            </div>
            <p
              class="fst-italic text-center"
              style={{ "font-size": "larger", color: "black" }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
        </section>

        <section id="why-us" class="why-us">
          <div class="container" data-aos="fade-up">
            <div class="section-title">
              <p>Application Process</p>
            </div>

            <div class="row">
              <div class="col-lg-4">
                <div class="box" data-aos="zoom-in" data-aos-delay="100">
                  <span>01</span>
                  <h4>Step-1-Name</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </div>

              <div class="col-lg-4 mt-4 mt-lg-0">
                <div class="box" data-aos="zoom-in" data-aos-delay="200">
                  <span>02</span>
                  <h4>Step-2-Name</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </div>

              <div class="col-lg-4 mt-4 mt-lg-0">
                <div class="box" data-aos="zoom-in" data-aos-delay="300">
                  <span>03</span>
                  <h4>Step-3-Name</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="specials" class="specials">
          <div class="container" data-aos="fade-up">
            <div class="section-title">
              <p>Course Curriculum</p>
            </div>

            <div class="row" data-aos="fade-up" data-aos-delay="100">
              <div class="col-lg-3">
                <ul class="nav nav-tabs flex-column">
                  <li class="nav-item">
                    <a
                      class="nav-link active show"
                      data-bs-toggle="tab"
                      href="#tab-1"
                    >
                      Data Structure and Algorithm
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#tab-2">
                      Low level design
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#tab-3">
                      High level design
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-9 mt-4 mt-lg-0">
                <div class="tab-content">
                  <div class="tab-pane active show" id="tab-1">
                    <div class="row">
                      <div class="col-lg-12 details order-2 order-lg-1">
                        <h3>Data Structure and Algorithm</h3>
                        <p
                          class="fst-italic"
                          style={{ fontSize: "1.2rem", color: "black" }}
                        >
                          ● Math &nbsp; ● Bit Manipulation &nbsp; ● Searching I
                          &nbsp; ● Searching II &nbsp; ● Array Rotation &nbsp; ●
                          Recursion &nbsp; ● Backtracking &nbsp; <br></br>
                          <br></br>
                          <span style={{ fontWeight: "bold" }}>
                            Contest 1
                          </span>{" "}
                          <br></br>
                          <br></br>● Sorting I &nbsp; ● Sorting II &nbsp; ● Two
                          Pointer &nbsp; ● Hashing I &nbsp; ● Hashing II &nbsp;
                          ● Strings &nbsp; ● Stacks &nbsp; ● Queues &nbsp; ●
                          Linked List &nbsp;
                          <br></br>
                          <br></br>
                          <span style={{ fontWeight: "bold" }}>
                            Contest 2
                          </span>{" "}
                          <br></br>
                          <br></br>● DP I &nbsp; ● DP II &nbsp; ● Greedy &nbsp;
                          ● Trees I &nbsp; ● Trees II &nbsp; ● BST &nbsp; I
                          &nbsp; ● BST II &nbsp; <br></br>
                          <br></br>
                          <span style={{ fontWeight: "bold" }}>
                            Contest 3
                          </span>{" "}
                          <br></br>
                          <br></br>● Heap &nbsp; ● DP III &nbsp; ● Graph I
                          &nbsp; ● Graph II &nbsp; ● Trie &nbsp; ● Segment Trees
                          (Optional) <br></br>
                          <br></br>
                          <span style={{ fontWeight: "bold" }}>Contest 4</span>
                        </p>
                      </div>
                      {/* <div class="col-lg-2 text-center order-1 order-lg-2">
                        <img
                          src="https://i.postimg.cc/HW5481Lj/pl2-removebg-preview.png"
                          alt=""
                          class="img-fluid"
                        />
                      </div> */}
                    </div>
                  </div>
                  <div class="tab-pane" id="tab-2">
                    <div class="row">
                      <div class="col-lg-12 details order-2 order-lg-1">
                        <h3>Low Level Design</h3>
                        <p class="fst-italic"></p>
                      </div>
                      {/* <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img
                          src="https://i.postimg.cc/CLbhGmRq/pl-removebg-preview.png"
                          alt=""
                          class="img-fluid"
                        />
                      </div> */}
                    </div>
                  </div>
                  <div class="tab-pane" id="tab-3">
                    <div class="row">
                      <div class="col-lg-12 details order-2 order-lg-1">
                        <h3>High Level Design</h3>
                        <p class="fst-italic"></p>
                      </div>
                      {/* <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img
                          src="https://i.postimg.cc/7hcpRvp5/pl33rem.png"
                          alt=""
                          class="img-fluid"
                        />
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div class="faq-div container-fluid" id="faq">
          <div class="row d-flex flex-column align-items-center justify-content-center">
            <section id="faq" class="faq section-bg">
              <div class="container" data-aos="fade-up">
                <div class="section-title">
                  <p>Frequently Asked Questions</p>
                </div>

                <div class="faq-list">
                  <ul>
                    <li
                      data-aos="fade-up"
                      style={{
                        "background-color": "black",
                        color: "rgb(52, 207, 235)",
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
                        "background-color": "black",
                        color: "rgb(52, 207, 235)",
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
                        "background-color": "black",
                        color: "rgb(52, 207, 235)",
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
                        "background-color": "black",
                        color: "rgb(52, 207, 235)",
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
                        "background-color": "black",
                        color: "rgb(52, 207, 235)",
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

        <section id="devs" class="devs">
          <div class="container" data-aos="fade-up">
            <div class="section-title">
              <p>Course Instructors</p>
            </div>

            <div class="row">
              <div class="col-lg-4 col-md-6">
                <div class="member" data-aos="zoom-in" data-aos-delay="100">
                  <img
                    src="https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/07/23090714/nature-1024x682.jpeg"
                    class="img-fluid"
                    alt=""
                  />
                  <div class="member-info">
                    <div class="member-info-content">
                      <h4>Jaydip Dey</h4>
                      <span>Student</span>
                    </div>
                    <div class="social">
                      <a href="https://github.com" target="_blank">
                        <i class="bi bi-github"></i>
                      </a>
                      <a href="https://www.linkedin.com" target="_blank">
                        <i class="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6">
                <div class="member" data-aos="zoom-in" data-aos-delay="100">
                  <img
                    src="https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/07/23090714/nature-1024x682.jpeg"
                    class="img-fluid"
                    alt=""
                  />
                  <div class="member-info">
                    <div class="member-info-content">
                      <h4>Jaydip Dey</h4>
                      <span>Student</span>
                    </div>
                    <div class="social">
                      <a href="https://github.com" target="_blank">
                        <i class="bi bi-github"></i>
                      </a>
                      <a href="https://www.linkedin.com" target="_blank">
                        <i class="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-md-6">
                <div class="member" data-aos="zoom-in" data-aos-delay="100">
                  <img
                    src="https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/07/23090714/nature-1024x682.jpeg"
                    class="img-fluid"
                    alt=""
                  />
                  <div class="member-info">
                    <div class="member-info-content">
                      <h4>Jaydip Dey</h4>
                      <span>Student</span>
                    </div>
                    <div class="social">
                      <a href="https://github.com" target="_blank">
                        <i class="bi bi-github"></i>
                      </a>
                      <a href="https://www.linkedin.com" target="_blank">
                        <i class="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" class="contact">
          <div class="container" data-aos="fade-up">
            <div class="section-title">
              <p>Contact Us</p>
              <br />
              {/* <p style="color: rgb(89, 252, 184);font-size: larger;">
                Then visit our shop or contact through the following form.
              </p> */}
            </div>
          </div>

          <div data-aos="fade-up">
            {/* <iframe
              style="border:0; width: 100%; height: 350px;"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.04096688468!2d88.39386771503831!3d22.540138085199477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0276a208cb6793%3A0x676bbf22d04354e8!2sScience%20City!5e0!3m2!1sen!2sin!4v1633349302702!5m2!1sen!2sin"
              frameborder="0"
              allowfullscreen
            ></iframe> */}
          </div>

          <div class="container" data-aos="fade-up">
            <div class="row mt-5">
              <div class="col-lg-4">
                <div class="info">
                  <div class="address">
                    <i class="bi bi-geo-alt"></i>
                    <h4 style={{ color: "black" }}>Location:</h4>
                    <p style={{ color: "black" }}>Kolkata-700046</p>
                  </div>

                  <div class="open-hours">
                    <i class="bi bi-clock"></i>
                    <h4 style={{ color: "black" }}>Open Hours:</h4>
                    <p style={{ color: "black" }}>
                      Monday-Saturday:
                      <br />
                      11:00 AM - 08:00 PM
                    </p>
                  </div>

                  <div class="email">
                    <i class="bi bi-envelope"></i>
                    <h4 style={{ color: "black" }}>Email:</h4>
                    <p style={{ color: "black" }}>getsdeready@gmail.com</p>
                  </div>

                  <div class="phone">
                    <i class="bi bi-phone"></i>
                    <h4 style={{ color: "black" }}>Call:</h4>
                    <p style={{ color: "black" }}>+91 9876543210</p>
                  </div>
                </div>
              </div>

              <div class="col-lg-8 mt-5 mt-lg-0">
                <form
                  action="https://formspree.io/f/mayakbkj"
                  method="post"
                  role="form"
                  class="email-form"
                  id="my-form"
                >
                  <div class="row">
                    <div class="col-md-6 form-group">
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        id="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div class="col-md-6 form-group mt-3 mt-md-0">
                      <input
                        type="email"
                        class="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>
                  <div class="form-group mt-3">
                    <input
                      type="text"
                      class="form-control"
                      name="subject"
                      id="subject"
                      placeholder="You Phone No."
                      required
                    />
                  </div>
                  <div class="form-group mt-3">
                    <textarea
                      class="form-control"
                      name="message"
                      rows="8"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                  <div class="text-center">
                    <button type="submit">Send Message</button>
                  </div>
                  <p id="my-form-status"></p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer">
        <div class="container">
          <div class="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>Get SDE Ready</span>
            </strong>
            . All Rights Reserved
          </div>
          {/* <div class="credits">
            Designed by{" "}
            <a
              href="https://github.com/jaydip1235/Responsive-Vantage"
              target="_blank"
            >
              Alpha
            </a>
          </div> */}
        </div>
      </footer>

      {/* <div id="preloader"></div> */}
      <a
        href="#"
        class="back-to-top d-flex align-items-center justify-content-center"
      >
        <i class="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
}

export default App;
