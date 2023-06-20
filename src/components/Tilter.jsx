import VanillaTilt from "vanilla-tilt";
import { useRef, useEffect } from "react";

const options = { max: 45, perspective: 150 };

const Tilter = (props) => {
  const boxEventRef = useRef();

  useEffect(() => {
    const boxEvent = boxEventRef.current;
    VanillaTilt.init(boxEvent, options);

    boxEvent.addEventListener("tiltChange", function (event) {
      props.setData(event.detail);

      return () => {
        boxEvent.vanillaTilt.destroy();
      };
    });
  });

  return (
    <div id="tilter" ref={boxEventRef}>
      {props.children}
    </div>
  );
};

export default Tilter;
