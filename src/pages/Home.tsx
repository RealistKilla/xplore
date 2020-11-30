import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonLoading,
} from "@ionic/react";
import React, { useState } from "react";

const Home: React.FC = () => {
  const [showLoading, setShowLoading] = useState(false);

  //custom styles
  const titleStyle = {
    textAlign: "center",
    fontFamily: "'Nunito', sans-serif",
  };

  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>
            <img
              className="logoimg"
              src="/assets/icon/title-logo.svg"
              alt="Xplore Logo"
            />
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard href="https://xplore.glitch.me/">
          <br />
          <div className="home-logos-container">
            <img
              alt="Location Marker"
              src="/assets/img/location-logo.svg"
              className="h-30"
            />
          </div>

          <IonCardHeader>
            <IonCardTitle style={titleStyle}>
              <b>Geo-Location Augmented Reality</b>
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <b>Geo-Location Augmented Reality</b> shows you points of interest
            within a <b>1 km radius</b>, right now clicking on them will give
            you the name of the location and the current distance from you. More
            features coming soon!
          </IonCardContent>
        </IonCard>
        <IonCard href="#">
          <br />
          <div className="home-logos-container">
            <img alt="Map" src="/assets/img/map-logo.svg" className="h-30" />
          </div>

          <IonCardHeader>
            <IonCardTitle style={titleStyle}>
              <b>Augmented Map</b>
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <b>Coming Soon!</b> This feature allows you to point your phone at a
            map and view landmarks overlayed above the map, clicking on these
            landmarks will give you details and the ability to see the 360
            scenes of the location.
          </IonCardContent>
        </IonCard>

        <IonLoading
          isOpen={showLoading}
          onDidDismiss={() => setShowLoading(false)}
          message={"Please Wait..."}
          duration={35000}
        />
      </IonContent>
    </IonPage>
  );
};

export default Home;
