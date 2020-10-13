import React from "react";
import "../Nav.css";

const BackDrop = ({ close }) => {
    return <div onClick={close} className="backdrop" />;
};

export default BackDrop;