const tabsData = [
  {
    id: 1,
    title: 'JSX',
    content: 'It is called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.'
  },
  {
    id: 2,
    title: 'Stateless Component',
    content: 'Stateless functional components are useful for dumb/presentational components. Presentational components focus on the UI rather than behavior, so it’s important to avoid using state in presentational components. Instead, state should be managed by higher-level “container” components, or via Flux/Redux/etc. Stateless functional components don’t support state or lifecycle methods. This is a good thing. Why? Because it protects from laziness.'
  }
];

export default tabsData;
