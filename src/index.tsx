/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import { Route, Router, Routes } from '@solidjs/router';
import { Suspense, lazy } from 'solid-js';
import { UseHeader } from './components/Header';
const Second = lazy(() => import('./routes/second/Second'));

// The import works
//import App from './routes/App';
const App = lazy(() => import('./routes/App'));

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}
//Example Data replacement for a store
const colorScheme = {
  scheme: "light",
}

//Basic version
render(() => 
  <Router>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/second" element={<Second lang='en'/>} />
    </Routes>
  </Router>
, root!);

//Using Suspense and a div for the color scheme
/*render(() => 
  <Router>
    <div id="scheme" classList={{
        "light": colorScheme.scheme == "light",
        "dark": colorScheme.scheme == "dark"
    }}/>
    <Routes>
      <Route path="/" element={<Suspense><App/></Suspense>} />
      <Route path="/second" element={<Suspense><Second lang='en'/></Suspense>} />
    </Routes>
  </Router>
, root!);*/

//Using Header Wrapper
/*render(() => 
  <Router>
    <div id="scheme" classList={{
        "light": colorScheme.scheme == "light",
        "dark": colorScheme.scheme == "dark"
    }}/>
    <Routes>
      <Route path="/" element={<UseHeader><App/></UseHeader>} />
      <Route path="/second" element={<UseHeader><Second lang='en'/></UseHeader>} />
    </Routes>
  </Router>
, root!);*/
