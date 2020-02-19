import React, { Component } from "react";
import { MDBNotification, MDBContainer } from "mdbreact";

export const Notification = (notitication) => {

    <MDBContainer style={{width: "auto", position: "fixed", top: "10px", right: "10px", zIndex: 9999 }}>
        <MDBNotification
            show
            fade
            iconClassName="text-primary"
            title={notitication.title}
            message={notitication.message}
            text="just now"
        />
    </MDBContainer>

}
