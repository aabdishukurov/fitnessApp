import React from "react";
import styles from "./Loader.module.scss";
import { ColorRing } from "react-loader-spinner";
const Loader = () => {
  return (
    <>
      <div className={styles.container}>
        <ColorRing
          visible={true}
          height="250"
          width="250"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </div>
    </>
  );
};

export default Loader;
