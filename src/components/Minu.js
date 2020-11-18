import React from "react";
import PropTypes from "prop-types";
import { Button } from "antd";
import "./minu.less";

Minu.propTypes = {
  age: PropTypes.number,
  name: PropTypes.string,

  // 必传校验
  gender: PropTypes.string.isRequired,
};

Minu.defaultProps = {
  fav: "默认值",
};

function Minu(props) {
  return (
    <div>
      <div>props type</div>

      <div>number: {props.age}</div>
      <div>string:{props.name}</div>
      <div>gender: {props.gender}</div>
      <div>fav: {props.fav}</div>
      <br />
      <Button>antd</Button>
    </div>
  );
}

export default Minu;
