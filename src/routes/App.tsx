import type { Component } from 'solid-js';

import logo from '../assets/logo.svg';
import styles from './App.module.css';
import { A } from '@solidjs/router';
import { resource } from '../sampleResource';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Main Page. <A href="/second">Second Page</A>
        </p>
        <p>
          Some Resource:
          {resource()}
        </p>
    </div>
  );
};

export default App;
