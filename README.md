# Solid Router Error when hosted
### The error
When loading the [page](https://solid.mabla.name) links to the [second page](https://solid.mabla.name/second) are not working. Also when loading the first page an error is thrown in the console: `index-7a7343c2.js:1 Uncaught (in promise) Error: Make sure your app is wrapped in a <Router />`

### Conditions
- The error only occurs when the app is hosted on my Hetzner web server.
- The error only occurs on the `/` page. When loading the `/second` page directly the error does never occur.
- The error only occurs when using `const Second = lazy(() => import('./routes/second/Second'));` not when using `import App from './routes/App';` instead.