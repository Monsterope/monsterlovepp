import React, { Component } from 'react';
import logo from './logo.svg';
import myope from './img/IMG_1860.jpg'
import proope from './img/IMG_18612.jpg'
import photogexp from './img/IMG_9794.jpg'
import progexp from './img/programLan.jpg'
import workss from './img/works.jpg'
import students from './img/student-registration.jpg'
import pythonlogo from './img/python-logo.jpg'
import javalogo from './img/java.jpg'
import kotlinlogo from './img/kotlin.png'
import phplogo from './img/php-logo.png'
import nodejslogo from './img/nodejss.png'
import swiftlogo from './img/swift.jpg'

import androidStulogo from './img/android-logo.jpg'
import vuelogo from './img/vue-logos.png'
import reactlogo from './img/react-logos.png'
import reduxlogo from './img/redux-logos.jpg'
import xcodelogo from './img/xcode-logos.png'

import seleniumlogo from './img/selenium-logo.png'
import robotlogo from './img/robot-logo.jpg'
import cypresslogo from './img/cypress-logos.png'
import espressologo from './img/espresso-logo.png'

import premlogo from './img/pr-logo.png'
import lrlogo from './img/lr-logo.jpg'
import phoslogo from './img/photoshop-logo.png'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div class="uk-text-center">
          <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
            <div class="uk-inline">
              <a><img src={myope} alt="" width="1000px" /></a>
              <div class="uk-position-center-right uk-overlay uk-overlay-default">
                <p>Touch Or Pointing mouse</p>
                <p>เพื่อแสดงรายละเอียด</p>
              </div>
            </div>
            <div class="uk-height-small uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
              <h3 class="uk-margin-remove">Dachawat Fangnok</h3>
              <p class="uk-margin-remove">Software Tester</p>
              <p class="uk-margin-remove">088-0542049</p>
              <p class="uk-margin-remove">dachawat.fang57@sskru.ac.th</p>
            </div>
          </div>
        </div>

        <div uk-slider="center: true">
          <div class="uk-child-width-1-1@m uk-position-relative uk-visible-toggle uk-light uk-padding" tabindex="-1">
            <h1 class="uk-article-title uk-text-bold uk-text-success"><p>My Profile</p></h1>
            <ul class="uk-slider-items uk-child-width-1-2@s uk-grid">
              <li>
                <div>
                  <div class="uk-card uk-card-default">
                    <div class="uk-card-body">
                      <h3 class="uk-card-title uk-text-bold">Career History</h3>
                      <p>นักศึกษาฝึกงาน: Developer บริษัทโค้ดโมบายส์ จำกัด</p>
                      <p>บัจจุบัน: Software Tester Avesta co. ltd</p>
                    </div>
                    <div class="uk-card-media-bottom">
                      <img src={workss} alt="" />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                      <img src={students} alt="" />
                    </div>
                    <div class="uk-card-body">
                      <h3 class="uk-card-title uk-text-bold">Education</h3>
                      <p>มัธยมศึกษาตอนปลาย: โรงเรียนไกรภักดีวิทยาคม</p>
                      <p>ปริญญาตรี: วิศวกรรมซอฟต์แวร์ มหาวิทยาลัยราชภัฏศรีสะเกษ</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
            <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

          </div>

        </div>

        {/* <article class="uk-article uk-margin-top uk-padding">
          <h1 class="uk-article-title uk-text-bold uk-text-success"><p>My Profile</p></h1>
          <div class="uk-child-width-1-3@m uk-flex uk-flex-center" uk-grid>
            <div>
              <div class="uk-card uk-card-default">
                <div class="uk-card-media-left">
                  <img src={students} alt="" />
                </div>
                <div class="uk-card-body">
                  <h3 class="uk-card-title uk-text-bold">Education</h3>
                  <p>มัธยมศึกษาตอนปลาย: โรงเรียนไกรภักดีวิทยาคม</p>
                  <p>ปริญญาตรี: วิศวกรรมซอฟต์แวร์ มหาวิทยาลัยราชภัฏศรีสะเกษ</p>
                </div>
              </div>
            </div>
            <div>
              <div class="uk-card uk-card-default">
                <div class="uk-card-body">
                  <h3 class="uk-card-title uk-text-bold">Career History</h3>
                  <p>นักศึกษาฝึกงาน บริษัทโค้ดโมบายส์ จำกัด</p>
                  <p>บัจจุบัน: Software Tester Avesta co. ltd</p>
                </div>
                <div class="uk-card-media-bottom">
                  <img src={workss} alt="" />
                </div>
              </div>
            </div>
          </div>
        </article> */}




        {/* <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="animation: push; ratio: 14:4; autoplay: true; autoplay-interval: 10000">
          <ul class="uk-slideshow-items">
            <li>
              <img src={myope} alt="" uk-cover />
              <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center">
                <img class="uk-border-circle" width="70" height="70" src={proope}></img>
                <h3 class="uk-margin-remove">Dachawat Fangnok</h3>
                <p class="uk-margin-remove">Software Tester</p>
                <p class="uk-margin-remove">088-0542049</p>
                <p class="uk-margin-remove">dachawat.fang57@sskru.ac.th</p>
              </div>
            </li>
            <li>
              <img src={myopes} alt="" uk-cover />
              <div class="uk-overlay uk-overlay-primary uk-position-right uk-text-center uk-transition-slide-right uk-width-medium">
                <img class="uk-border-circle" width="70" height="70" src={proope}></img>
                <h3 class="uk-margin-remove">Dachawat Fangnok</h3>
                <p class="uk-margin-remove">Software Tester</p>
                <p class="uk-margin-remove">088-0542049</p>
                <p class="uk-margin-remove">dachawat.fang57@sskru.ac.th</p>
              </div>
            </li>
          </ul>

          <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
          <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

        </div> */}

        <h1 class="uk-article-title uk-text-bold uk-text-success"><p>Skill</p></h1>

        <ul class="uk-flex uk-flex-center uk-subnav uk-margin-remove-right uk-subnav-pill " uk-switcher="animation: uk-animation-slide-left-medium, uk-animation-slide-right-medium">
          <li><a href="#">Programimg</a></li>
          <li><a href="#">Web Stack And Tools</a></li>
          <li><a href="#">Automate Test</a></li>
          <li><a href="#">Photo Design</a></li>
        </ul>

        <ul class="uk-switcher ">
          <li>
            <div uk-slider="center: true" class="uk-padding">
              <div class="uk-child-width-1-2@s uk-position-relative uk-visible-toggle uk-light" tabindex="-1">
                <ul class="uk-slider-items uk-child-width-1-2@s uk-grid">
                  <li>
                    <div class="uk-card uk-card-default">
                      <div class="uk-card-media-top">
                        <img src={pythonlogo} alt="" />
                      </div>
                      <div class="uk-card-body">
                        <h3 class="uk-card-title">Python 3</h3>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="uk-card uk-card-default">
                      <div class="uk-card-media-top">
                        <img src={kotlinlogo} alt="" />
                      </div>
                      <div class="uk-card-body">
                        <h3 class="uk-card-title">Kotlin</h3>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="uk-card uk-card-default">
                      <div class="uk-card-media-top">
                        <img src={nodejslogo} alt="" />
                      </div>
                      <div class="uk-card-body">
                        <h3 class="uk-card-title">Node js</h3>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="uk-card uk-card-default">
                      <div class="uk-card-media-top">
                        <img src={javalogo} alt="" />
                      </div>
                      <div class="uk-card-body">
                        <h3 class="uk-card-title">Java</h3>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="uk-card uk-card-default">
                      <div class="uk-card-media-top">
                        <img src={phplogo} alt="" />
                      </div>
                      <div class="uk-card-body">
                        <h3 class="uk-card-title">PHP 5</h3>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="uk-card uk-card-default">
                      <div class="uk-card-media-top">
                        <img src={swiftlogo} alt="" />
                      </div>
                      <div class="uk-card-body">
                        <h3 class="uk-card-title">Swift 4</h3>
                      </div>
                    </div>
                  </li>
                </ul>

                <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
                <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>
              </div>
            </div>
          </li>
          <li>
          <div uk-slider="center: true" class="uk-padding">
              <div class="uk-child-width-1-2@s uk-position-relative uk-visible-toggle uk-light" tabindex="-1">
                <ul class="uk-slider-items uk-child-width-1-2@s uk-grid">

                  <li>
                    <div class="uk-card uk-card-default">
                      <div class="uk-card-media-top">
                        <img src={androidStulogo} alt="" />
                      </div>
                      <div class="uk-card-body">
                        <h3 class="uk-card-title">Android Studio</h3>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="uk-card uk-card-default">
                      <div class="uk-card-media-top">
                        <img src={vuelogo} alt="" />
                      </div>
                      <div class="uk-card-body">
                        <h3 class="uk-card-title">Vue</h3>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="uk-card uk-card-default">
                      <div class="uk-card-media-top">
                        <img src={reactlogo} alt="" />
                      </div>
                      <div class="uk-card-body">
                        <h3 class="uk-card-title">React</h3>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="uk-card uk-card-default">
                      <div class="uk-card-media-top">
                        <img src={reduxlogo} alt="" />
                      </div>
                      <div class="uk-card-body">
                        <h3 class="uk-card-title">Redux</h3>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="uk-card uk-card-default">
                      <div class="uk-card-media-top">
                        <img src={xcodelogo} alt="" />
                      </div>
                      <div class="uk-card-body">
                        <h3 class="uk-card-title">Xcode</h3>
                      </div>
                    </div>
                  </li>
                </ul>

                <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
                <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>
              </div>
            </div>
          </li>
          <li>
          <div uk-slider="center: true" class="uk-padding">
              <div class="uk-child-width-1-2@s uk-position-relative uk-visible-toggle uk-light" tabindex="-1">
                <ul class="uk-slider-items uk-child-width-1-2@s uk-grid">
                  <li>
                    <div class="uk-card uk-card-default">
                      <div class="uk-card-media-top">
                        <img src={seleniumlogo} alt="" />
                      </div>
                      <div class="uk-card-body">
                        <h3 class="uk-card-title">Selenium Python</h3>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="uk-card uk-card-default">
                      <div class="uk-card-media-top">
                        <img src={robotlogo} alt="" />
                      </div>
                      <div class="uk-card-body">
                        <h3 class="uk-card-title">Robot Framework</h3>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="uk-card uk-card-default">
                      <div class="uk-card-media-top">
                        <img src={cypresslogo} alt="" />
                      </div>
                      <div class="uk-card-body">
                        <h3 class="uk-card-title">Cypress</h3>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="uk-card uk-card-default">
                      <div class="uk-card-media-top">
                        <img src={espressologo} alt="" />
                      </div>
                      <div class="uk-card-body">
                        <h3 class="uk-card-title">Espresso</h3>
                      </div>
                    </div>
                  </li>
                </ul>

                <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
                <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>
              </div>
            </div>

          </li>

          <li>
            <div uk-slider="center: true" class="uk-padding">
              <div class="uk-child-width-1-2@s uk-position-relative uk-visible-toggle uk-light" tabindex="-1">
                <ul class="uk-slider-items uk-child-width-1-2@s uk-grid">

                  <li>
                    <div class="uk-card uk-card-default">
                      <div class="uk-card-media-top">
                        <img src={photogexp} alt="" />
                      </div>
                      <div class="uk-card-body">
                        <h3 class="uk-card-title">Photograph</h3>
                        <a class="uk-link-heading" href="https://photos.app.goo.gl/VrjYCrs1AX6Oe4IE3" target="_blank">คลิกเพื่อดูภาพเพิ่มเติม</a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="uk-card uk-card-default">
                      <div class="uk-card-media-top">
                        <img src={lrlogo} alt="" />
                      </div>
                      <div class="uk-card-body">
                        <h3 class="uk-card-title">Adobe Lightroom</h3>
                        <label>งานอดิเรก</label>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="uk-card uk-card-default">
                      <div class="uk-card-media-top">
                        <img src={premlogo} alt="" />
                      </div>
                      <div class="uk-card-body">
                      <h3 class="uk-card-title">Adobe Premiere Pro</h3>
                        <label>งานอดิเรก</label>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="uk-card uk-card-default">
                      <div class="uk-card-media-top">
                        <img src={phoslogo} alt="" />
                      </div>
                      <div class="uk-card-body">
                      <h3 class="uk-card-title">Adobe Photoshop</h3>
                        <label>งานอดิเรก</label>
                      </div>
                    </div>
                  </li>
                  
                </ul>

                <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
                <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>
              </div>
            </div>
          </li>
        </ul>



        {/* <header className="App-headers">
          <img src={logo} className="App-logo" alt="logo" />


          <p>Skill</p>



          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;
