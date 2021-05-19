import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
  console.log("My Demoouput running");
  return (
    <MyParagraph>
      <p>{props.show ? "This is new!" : ""}</p>
    </MyParagraph>
  );
};

export default React.memo(DemoOutput);
