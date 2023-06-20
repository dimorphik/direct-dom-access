import { useRef, useEffect } from "react";

const TilterData = (props) => {
  const outputRef = useRef();

  useEffect(() => {
    const output = outputRef.current;
    const childNodes = Array.from(output.childNodes);
    const keys = Object.keys(props.data);

    childNodes.forEach((child) => child.remove());

    keys.forEach((key, index) => {
      const text = `${key}: ${parseFloat(props.data[key]).toFixed(2)}`;
      const textNode = document.createTextNode(text);

      output.insertBefore(textNode, output.firstChild);

      if (index < keys.length - 1) {
        output.insertBefore(document.createElement("br"), output.firstChild);
      }
    });
  }, [props.data]);

  return <div id="tilter-data" ref={outputRef}></div>;
};

export default TilterData;
