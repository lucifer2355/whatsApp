import React from "react";
import { Circle } from "better-react-spinkit";

const Loading = () => {
  return (
    <center>
      <div>
        <img
          src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png'
          alt='logo'
          height={200}
          style={{ marginBottom: 10 }}
        />
      </div>

      <Circle color='#3CBC28' size={60} />
    </center>
  );
};

export default Loading;
