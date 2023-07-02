import type { Component } from 'solid-js';

import logo from '../../assets/logo.svg';
import styles from '../App.module.css';
import { A } from '@solidjs/router';

const Second: Component<{lang:"en" | "de"}> = (props) => {
  return (
    <div class={styles.App}>
      <img src={logo} class={styles.logo} alt="logo" />
      <p>
        Seond Page. <A href="/">Main Page</A>
      </p>
      <p>
        Lang: {props.lang}
      </p>
    </div>
  );
};

export default Second;
