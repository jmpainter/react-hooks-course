import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const styles = {
  content: {
    fontSize: "35px",
    position: "absolute",
    left: "0",
    right: "0",
    marginTop: "20px",
    textAlign: "center"
  }
};

export default function Loading(props) {
  const [content, setContent] = useState(props.text);

  const id = useRef();

  useEffect(() => {
    const { speed, text } = props;
    id.current = window.setInterval(() => {
      console.log(content);
      content === text + "..."
        ? setContent(text)
        : setContent(value => value + ".");
    }, speed);
    return () => window.clearInterval(id.current);
  }, []);
  return <p style={styles.content}>{content}</p>;
}

Loading.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired
};

Loading.defaultProps = {
  text: "Loading",
  speed: 300
};
