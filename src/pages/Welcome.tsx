import {
  IonContent,
  IonSlides,
  IonPage,
  IonSlide,
  IonIcon,
  IonButton,
} from "@ionic/react";
import React from "react";
import { Link } from "react-router-dom";

import { arrowForward } from "ionicons/icons";

const Welcome: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen id="appContent">
        <IonSlides>
          <IonSlide>
            <div className="welcome-screen">
              <div className="img-illustration">
                <img
                  className="img-logo"
                  alt="Xplore Logo"
                  src="assets/icon/logo.svg"
                />
                <div className="intro-content">
                  <h3>Welcome!</h3>
                  <p>
                    The aim of <b>Xplore</b> is to augment the way we experience
                    finding places, the applications of this technology are
                    endless. This experience is meant to highlight the
                    possibilities of adapting it for specific use cases.
                    <br />
                    <br />
                    By scanning a QR code on a flyer or pamphlet we can tailor
                    this type of experience to specific use cases.
                    <br />
                    <br />
                    <b>
                      No more downloads, no more updates, just pure experience!
                    </b>{" "}
                  </p>
                </div>
                <div className="illustration-container">
                  <img
                    className="img-illustration"
                    alt="Welcome Illustration"
                    src="assets/img/welcome-image.svg"
                  />
                </div>
              </div>
            </div>
            <IonButton fill="clear" color="primary" disabled>
              Swipe to Continue{" "}
              <span className="swipeAnim">
                <IonIcon slot="end" icon={arrowForward}></IonIcon>
              </span>{" "}
            </IonButton>
            <br />
            <br />
          </IonSlide>
          <IonSlide>
            <div className="intro-screen">
              <div className="img-illustration">
                <div className="intro-content">
                  <h3>Instructions</h3>
                  <div className="landmark-img">
                    <img alt="Map Marker" src="/assets/img/map-marker.svg" />
                  </div>

                  <p>
                    <br />
                    <br />
                    <b>Location Markers</b> are displayed on the screen, tap
                    them to interact.
                  </p>
                </div>
                <div className="intro-content">
                  <div className="overlay-text-container">
                    <div className="icon-container">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="map-marked-alt"
                        className="svg-inline--fa fa-map-marked-alt fa-w-18"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M288 0c-69.59 0-126 56.41-126 126 0 56.26 82.35 158.8 113.9 196.02 6.39 7.54 17.82 7.54 24.2 0C331.65 284.8 414 182.26 414 126 414 56.41 357.59 0 288 0zm0 168c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42zM20.12 215.95A32.006 32.006 0 0 0 0 245.66v250.32c0 11.32 11.43 19.06 21.94 14.86L160 448V214.92c-8.84-15.98-16.07-31.54-21.25-46.42L20.12 215.95zM288 359.67c-14.07 0-27.38-6.18-36.51-16.96-19.66-23.2-40.57-49.62-59.49-76.72v182l192 64V266c-18.92 27.09-39.82 53.52-59.49 76.72-9.13 10.77-22.44 16.95-36.51 16.95zm266.06-198.51L416 224v288l139.88-55.95A31.996 31.996 0 0 0 576 426.34V176.02c0-11.32-11.43-19.06-21.94-14.86z"
                        ></path>
                      </svg>
                    </div>

                    <span id="location-name" className="overlay-text">
                      <div>Select Landmark</div>
                    </span>
                  </div>

                  <p>
                    <br />
                    <br />
                    <b>The Select Landmark Indicator</b> changes to the name of
                    the <b>Location Marker</b> you select and shows the distance
                    from your current location. them to interact.
                  </p>
                </div>
                <div className="intro-content">
                  <div className="coming-soon-text">
                    <p>Coming Soon!</p>
                  </div>

                  <p>
                    <br />
                    <br />
                    <b>New Features</b> coming soon!
                  </p>
                </div>
              </div>
            </div>
            <IonButton
              fill="clear"
              color="primary"
              className="nextSlideBtn"
              disabled
            >
              {" "}
              Swipe to Continue{" "}
              <span className="swipeAnim">
                <IonIcon slot="end" icon={arrowForward}></IonIcon>
              </span>
            </IonButton>
            <br />
            <br />
          </IonSlide>
          <IonSlide>
            <div className="ready-screen">
              <div>
                <h3>Ready to Explore?</h3>
              </div>
              <div>
                <Link to="/home">
                  <IonButton fill="outline" color="primary" id="showOptsBtn">
                    {" "}
                    Continue <IonIcon slot="end" icon={arrowForward}></IonIcon>
                  </IonButton>
                </Link>
              </div>
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div className="rocket">
                <img alt="rocket" src="/assets/img/rocket.png" />
              </div>
              <div className="smokes">
                <img
                  className="dark-smoke"
                  alt="dark smoke"
                  src="/assets/img/smoke-dark.png"
                />
                <img
                  className="medium-smoke"
                  alt="medium smoke"
                  src="/assets/img/smoke-medium.png"
                />
                <img
                  className="light-smoke"
                  alt="light smoke"
                  src="/assets/img/smoke-light.png"
                />
              </div>
            </div>
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  );
};

export default Welcome;
