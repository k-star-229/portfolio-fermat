import React, { Component } from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"

class TabsTwo extends Component {
  render() {
    let tab1 = "Main skills",
      tab2 = "Education & Certification"
    const { tabStyle } = this.props
    return (
      <div>
        {/* Start Tabs Area */}
        <div className="tabs-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Tabs>
                  <TabList className={`${tabStyle}`}>
                    <Tab>{tab1}</Tab>
                    <Tab>{tab2}</Tab>
                  </TabList>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="#service">
                            Web Development <span> - Development</span>
                          </a>
                          Build websites and web apps using javascript,
                          typescript and their frameworks. I use technologies
                          like HTML, CSS, Javascript, typescript, and tools
                          like: VSCode ,React JS ,Next JS, Redux, Mongodb, Git,
                          Github, Vite, and more.
                        </li>
                        <li>
                          <a href="#service">
                            Web and user interface design<span> - Design</span>
                          </a>
                          I have experience building UI, Websites, Apps, Photos,
                          Logos with tools like Photoshop, Illustrator, Figma,
                          Pen {"&"} Paper
                        </li>
                        <li>
                          <a href="#service">
                            Mechanical Engineering <span> - Engineering</span>
                          </a>
                          Mechanical Design, Problem Solving, Building, Fixing,
                          Designing. I use tools like AutoCAD, SolidWorks, Pen
                          {"&"} Paper, ToolBox.
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  {/* <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="/service">
                            Awwwards.com <span>- Winner</span>
                          </a>{" "}
                          2019 - 2020
                        </li>
                        <li>
                          <a href="/service">
                            CSS Design Awards <span>- Winner</span>
                          </a>{" "}
                          2017 - 2018
                        </li>
                        <li>
                          <a href="/service">
                            Design nominees <span>- site of the day</span>
                          </a>{" "}
                          2013- 2014
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="/service">
                            Sr. Front-end Engineer<span> - Google</span>
                          </a>{" "}
                          2018 - Current
                        </li>
                        <li>
                          <a href="/service">
                            Front-end Engineer<span> - Microsoft</span>
                          </a>{" "}
                          2017 - 2018
                        </li>
                        <li>
                          <a href="/service">
                            Software Engineer<span> - Alibaba </span>
                          </a>{" "}
                          2013- 2014
                        </li>
                      </ul>
                    </div>
                  </TabPanel> */}

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="/service">
                            Mechanical Engineering
                            <span> - Mosul University, Iraq, 2019</span>
                          </a>{" "}
                          Bachelor's degree in applied science from the collage
                          of mechanical engineering in Mosul, Iraq.
                        </li>
                        <li>
                          <a href="/service">
                            Full-Stack web development certification
                            <span> - Kodluyoruz, Turkey, 2021</span>
                          </a>{" "}
                          In-depth 2-month-long full-stack coding bootcamp in
                          Turkey with technologies like Python, Javascript and
                          Angular.
                        </li>
                        <li>
                          <a href="/service">
                            React Development certification
                            <span> - Re:Coded, Iraq, 2021</span>
                          </a>{" "}
                          Immersive 5-month-long course, with over 400 hours of
                          coding and an acceptance rate of {"<6%"}.<br />
                          HTML, CSS, Javascript, React Additional Coursework on
                          teamwork, project management, agile methodologies and
                          technologies and tools like Redux state management
                          library, Firebase Firestore Cloud database, Jest
                          testing framework, Figma prototype and UX/ UI design
                          tool, continuous integration and Agile software
                          development. Designed user interfaces using Figma and
                          converted sketches and wireframes to functional
                          reusable UI components using React JavaScript. Built
                          projects from zero to production level.
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
        {/* End Tabs Area */}
      </div>
    )
  }
}

export default TabsTwo
