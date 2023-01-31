import React from "react";

const GoogleMap = () => {
  return (
    <div>
      <iframe
        width="100%"
        height="853"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=9&ie=UTF8&iwloc=&output=embed"
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
      ></iframe>
    </div>
  );
};

export default GoogleMap;
