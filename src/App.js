// import logo from './logo.svg';
import "./App.css";
import myImage from './img/1675232570338.jpg'; 

function App() {
//   const itemStyleaa = {
//     backgroundImage: {myImage},
//     backgroundPosition: 'calc(50% + 4.59302px) calc(50% + 9.92481px)',
//   };
//   const itemStyle1 = {
//     transform: "translate3d(0px, 0px, 0px)",
//     transition: "all 0s ease 0s; width: 1462px",
//   };
//   const itemStyle2 = {
//     width: "198.75px",
//     marginRight: "10px",
//   };
//   const itemStyle3 = {
//     transform: "translate3d(0px, 0px, 0px)",
//     transition: "all 0s ease 0s; width: 1275px",
//   };
  // const itemStyle4 = {
  //     width: '426px',
  //     marginRight: '10px',
  //   };
//   const itemStyle5 = {
//     backgroundImage: "url(&quot;./img/main_photo.jpg&quot;)",
//     backgroundPosition: "calc(50% + -3.96875px) calc(50% + 7.85634px)",
//   };
  //   const itemStyle6 = {
  //     transform: 'translate3d(-872px, 0px, 0px)',
  //     transition: 'all 0s ease 0s; width: 2616px',
  //   };
  return (
    <div class="page-scroll">
      <div
        id="page_container"
        class="page-container bg-move-effect animated transition-flip-in-right"
        data-animation="transition-flip-in-right"
      >
        {/* <!-- Header --> */}
        <header id="site_header" class="header">
          <div class="header-content clearfix">
            {/* <!-- Text Logo --> */}
            <div class="text-logo">
              <a href="index.html">
                <div class="logo-symbol">S</div>
                <div class="logo-text">Supagon </div>
              </a>
            </div>
            {/* <!-- /Text Logo -->

            <!-- Navigation --> */}
            <div class="site-nav mobile-menu-hide">
              <ul class="leven-classic-menu site-main-menu">
                <li class="menu-item menu-item-has-children ">
                  {/* <a href="index.html">About Me</a> */}
                  {/* <ul class="sub-menu">
                    <li class="menu-item current-menu-item">
                      <a href="index.html">About Me 1</a>
                    </li>
                    <li class="menu-item">
                      <a href="index-2.html">About Me 2</a>
                    </li>
                  </ul> */}
                </li>

                <li class="menu-item">
                  <a href="resume.html">Resume</a>
                </li>

                {/* <li class="menu-item menu-item-has-children">
                  <a href="portfolio.html">Portfolio</a>
                  <ul class="sub-menu">
                    <li class="menu-item">
                      <a href="portfolio-2-columns.html">Portfolio 2 Columns</a>
                    </li>
                    <li class="menu-item">
                      <a href="portfolio.html">Portfolio 3 Columns</a>
                    </li>
                    <li class="menu-item">
                      <a href="portfolio-4-columns.html">Portfolio 4 Columns</a>
                    </li>
                    <li class="menu-item">
                      <a href="portfolio-5-columns.html">Portfolio 5 Columns</a>
                    </li>
                  </ul>
                </li> */}

                {/* <li class="menu-item menu-item-has-children">
                  <a href="blog.html">Blog</a>
                  <ul class="sub-menu">
                    <li class="menu-item">
                      <a href="blog.html">Blog 2 Columns</a>
                    </li>
                    <li class="menu-item">
                      <a href="blog-3-columns.html">Blog 3 Columns</a>
                    </li>
                  </ul>
                </li> */}

                <li class="menu-item">
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>

            {/* <!-- Mobile Menu Toggle -->
            <a class="menu-toggle">
              <i class="fa fa-bars"></i>
            </a> */}
            {/* <!-- Mobile Menu Toggle --> */}
          </div>
        </header>
        {/* <!-- /Header --> */}

        <div id="main" class="site-main">
          <div id="main-content" class="single-page-content">
            <div id="primary" class="content-area">
              <div
                id="content"
                class="page-content site-content single-post"
                role="main"
              >
                {/* <!-- Home Page Top Part --> */}
                <div class="row">
                  <div class=" col-xs-12 col-sm-12">
                    <div class="home-content">
                      <div class="row flex-v-align">
                        <div class="col-sm-12 col-md-5 col-lg-5">
                          <div class="home-photo">
                            <div class="hp-inner" >
                            <img src={myImage} alt="Description of the image" class="picture" />
                            </div>
                          </div>
                        </div>

                        <div class="col-sm-12 col-md-7 col-lg-7">
                          <div class="home-text hp-left">
                            <div class="owl-carousel text-rotation owl-loaded owl-drag">
                            <div class="hp-inner"  >
                            </div>
                              {/* <div class="owl-stage-outer"><div class="owl-stage" style={itemStyle6}><div class="owl-item cloned" style={itemStyle4}><div class="item">
                                <h4>Frontend-developer</h4>
                              </div></div><div class="owl-item cloned" style={itemStyle4}><div class="item">
                                <h4>Web Designer</h4>
                              </div></div><div class="owl-item active" style={itemStyle4}><div class="item">
                                <h4>Frontend-developer</h4>
                              </div></div><div class="owl-item" style={itemStyle4}><div class="item">
                                <h4>Web Designer</h4>
                              </div></div><div class="owl-item cloned" style={itemStyle4}><div class="item">
                                <h4>Frontend-developer</h4>
                              </div></div><div class="owl-item cloned" style={itemStyle4}><div class="item">
                                <h4>Web Designer</h4>
                              </div></div></div></div><div class="owl-nav disabled"><div class="owl-prev">prev</div><div class="owl-next">next</div></div><div class="owl-dots disabled"></div></div> */}
{/* <div class="hp-inner" style="background-image: D:\งานsin\training\react\test\frontend_react_firsttime\src\img\1677151734161.jpg; background-position: calc(50% + -4.15698px) calc(50% + 6.15325px);"> */}
                            </div>
                              <h1>Supagon Boonsuwan</h1>
                              <p>
                                Hello,My Name is Supagon Boonsuwan.I'm a junior developer.
                                I am currently studying at KING MONGKUT'S UNIVERSITY OF TECHNOLOGY NORTH BANGKOK, 4th year, currently interning at a Humanica company.
                                GPAX (3.07) and can contact me at <b>Supagon.9211@gmail.com</b> 
                                 
                              </p>
                              
                              
                              <a href="https://github.com/Cosec45" ><img width="64" height="64" src="https://img.icons8.com/sf-black-filled/64/github.png" alt="github"/>GitHub</a>
                              {/* <div class="home-buttons">
                              <div target="_blank" class="btn btn-muted">Download CV</div>
                              <div target="_self" class="btn btn-muted">Contact</div>
                            </div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Home Page Top Part --> */}

                  {/* <!-- Services --> */}
                  <div class="row">
                    <div class="col-xs-12 col-sm-12">
                      <div class="p-50"></div>

                      <div class="block-title">
                        <h2>Projects</h2>
                      </div>
                    </div>
                  </div>

                  <div class="row m-3">
                    <div class="col-xs-12 col-sm-6">
                      <div class="info-list-w-icon">
                        <div class="info-block-w-icon">
                          <div class="ci-icon">
                          <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/fine-print.png" alt="fine-print"/>
                          </div>

                          <div class="ci-text">
                            <h4>IT Audit System Design</h4>
                            <p>
                            System design for IT Audit website follow User require by Microsoft Visio,Figma and Canva 
                            </p>
                            {/* <p></p> */}
                          </div>
                        </div>

                        <div class="info-block-w-icon">
                          <div class="ci-icon">
                          <img width="60" height="60" src="https://img.icons8.com/ios-glyphs/60/vegan-clothing.png" alt="vegan-clothing"/>
                          </div>

                          <div class="ci-text">
                            <h4>RUCHI BHATI STORE</h4>
                            <p>
                              Create a dashboard for analyzing data by Power bi.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-xs-12 col-sm-6">
                      <div class="info-list-w-icon">
                        <div class="info-block-w-icon">
                          <div class="ci-icon">
                          <img width="52" height="52" src="https://img.icons8.com/metro/52/coffee.png" alt="coffee"/>
                          </div>

                          <div class="ci-text">
                            <h4>Coffee Shop</h4>
                            <p>
                              Coffee shop system design and programming by
                              C#,Microsoft SQL Server,Visual Studio and
                              Microsoft Visio
                            </p>
                          </div>
                        </div>

                        <div class="info-block-w-icon">
                          <div class="ci-icon">
                          <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/pet-commands-stay.png" alt="pet-commands-stay"/>
                          </div>

                          <div class="ci-text">
                            <h4>CatCare</h4>
                            <p>
                              A website for adopting cats by Angular+Express{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- /Services --> */}

                  <div class="row">
                    <div class="col-xs-12 col-sm-12">
                      <div class="p-20"></div>

                      <div class="p-40"></div>
                      {/* <!-- Fun Facts --> */}
                      <div class="row">
                        <div class="col-xs-12 col-sm-12">
                          <div class="block-title">
                            <h2>Personal Skills</h2>
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-xs-12 col-sm-3">
                          <div class="lm-info-block gray-default">
                            <i class="linecons linecons-heart"></i>
                            <h4>Time Management</h4>
                            {/* <span class="lm-info-block-value">578</span> */}
                            <span class="lm-info-block-text"></span>
                          </div>
                        </div>

                        <div class="col-xs-12 col-sm-3">
                          <div class="lm-info-block gray-default">
                            <i class="linecons linecons-clock"></i>
                            <h4>Teamwork</h4>
                            {/* <span class="lm-info-block-value">4,780</span> */}
                            <span class="lm-info-block-text"></span>
                          </div>
                        </div>

                        <div class="col-xs-12 col-sm-3 ">
                          <div class="lm-info-block gray-default">
                            <i class="linecons linecons-star"></i>
                            <h4>Creativity</h4>
                            {/* <span class="lm-info-block-value">15</span> */}
                            <span class="lm-info-block-text"></span>
                          </div>
                        </div>

                        <div class="col-xs-12 col-sm-3 ">
                          <div class="lm-info-block gray-default">
                            <i class="linecons linecons-cup"></i>
                            <h4>Problem Solving</h4>
                            {/* <span class="lm-info-block-value">1,286</span> */}
                            <span class="lm-info-block-text"></span>
                          </div>
                        </div>
                      </div>
                      {/* <!-- /Fun Facts --> */}

                      <div class="p-40"></div>

                      {/* <!-- Pricing --> */}
                      <div class="row">
                        <div class=" col-xs-12 col-sm-12 ">
                          <div class="block-title">
                            <h2>Specific Skills</h2>
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class=" col-xs-12 col-sm-12 ">
                          <div class="fw-pricing clearfix row">
                            <div class="fw-package-wrap col-md-4 ">
                              <div class="fw-package">
                                <div class="fw-heading-row">
                                  <span>Programming</span>
                                </div>

                                <div class="fw-pricing-row">
                                  {/* <span>$64</span> */}
                                  <img width="99" height="99" src="https://img.icons8.com/external-smashingstocks-hand-drawn-black-smashing-stocks/99/external-programing-data-analytics-smashingstocks-hand-drawn-black-smashing-stocks.png" alt="external-programing-data-analytics-smashingstocks-hand-drawn-black-smashing-stocks"/>
                                  {/* <small>per month</small> */}
                                </div>

                                <div class="fw-button-row">
                                  {/* <a href="#" target="_self" class="btn btn-secondary">Free Trial</a> */}
                                </div>

                                <div class="fw-default-row">
                                HTML, CSS,
                                </div>
                                <div class="fw-default-row">
                                JavaScript, SQL,Golang
                                </div>
                                {/* <div class="fw-default-row">
                                  Morbi eu sagittis
                                </div> */}
                              </div>
                            </div>

                            <div class="fw-package-wrap col-md-4 highlight-col ">
                              <div class="fw-package">
                                <div class="fw-heading-row">
                                  <span>Other</span>
                                </div>

                                <div class="fw-pricing-row">
                                <img width="96" height="96" src="https://img.icons8.com/small/96/settings-3.png" alt="settings-3"/>
                                </div>

                                <div class="fw-button-row">
                                  {/* <a href="#" target="_self" class="btn btn-primary">Free Trial</a> */}
                                </div>

                                <div class="fw-default-row">
                                Angular, NodeJs, Express.js,  
                                </div>
                                <div class="fw-default-row">
                                Bootstrap5, Microsoft Visio, 
                                </div>
                                <div class="fw-default-row">
                                Visual studio code, 
                                </div>
                                <div class="fw-default-row">Microsoft office</div>
                                <div class="fw-default-row"></div>
                              </div>
                            </div>

                            <div class="fw-package-wrap col-md-4 default-col ">
                              <div class="fw-package">
                                <div class="fw-heading-row">
                                  <span>Data Visualization Tools</span>
                                </div>

                                <div class="fw-pricing-row">
                                {/* <img width="100" height="100" src="https://img.icons8.com/external-others-pike-picture/100/external-Visualization-processing-others-pike-picture-2.png" alt="external-Visualization-processing-others-pike-picture-2"/> */}
                                <img width="100" height="100" src="https://img.icons8.com/ios/100/total-sales-1.png" alt="total-sales-1"/>
                                </div>

                                <div class="fw-button-row">
                                  {/* <a href="#" target="_self" class="btn btn-primary">Free Trial</a> */}
                                </div>

                                <div class="fw-default-row">
                                Tableau,
                                </div>
                                <div class="fw-default-row">
                                Microsoft Power bi
                                </div>
                                {/* <div class="fw-default-row">
                                  Morbi eu sagittis
                                </div>
                                <div class="fw-default-row">Donec non diam</div>
                                <div class="fw-default-row">
                                  Aenean nec libero
                                </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!-- /Pricing --> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Footer --> */}
              <footer class="site-footer clearfix">
                <div class="footer-social">
                  <ul class="footer-social-links">
                    <li>{/* <a href="#" target="_blank">Twitter</a> */}</li>

                    <li>{/* <a href="#" target="_blank">Facebook</a> */}</li>

                    <li>{/* <a href="#" target="_blank">Instagram</a> */}</li>
                  </ul>
                </div>

                <div class="footer-copyrights">
                  <p>© 2020 All rights reserved. AmCosec.</p>
                </div>
              </footer>
              {/* <!-- /Footer --> */}
            </div>
          </div>
        </div>
      </div>
    // </div>
    // </div>
    // </div>
    // </div>
  );
}

export default App;
