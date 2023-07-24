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
          colors={["#0164e7", "#0164e7", "#0164e7", "#0164e7", "#0164e7"]}
        />
      </div>
    </>
  );
};

export default Loader;
