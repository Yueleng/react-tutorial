# React Behind the Scene

- How does React work behind the scenes?
- Understanding the virtual DOM & DOM Updates
- Understanding State & State Updates

## How does React work behind the scenes

- React does not know the web, it does know nothing about the browser in the end. React know how to work with components.
- ReactDom actually needs to bring real HTML elements to the screen.
- React is a library that manages components that manages state. React only cares about components.
- React determines how the component tree currently looks like and what it should look like.
- ReacDom receives the difference and then manipulates the real DOM to match the virtual DOM.
- Re-evaluating components does not mean re-rendering the DOM.
  - Re-evaluate whenever props, state or context changes.
  - React executes component functions
  - Changes to the real DOM are only made for differences between evaluations.
  - Making a virtual dom comparison (between current state n previous state) is fairly cheep and easy to do. While working with the real DOM is an expensive rendering task.
  - It does the virtual dom diffing. It will pin to the place where needed to change.
- Re-evaluation of parent component will always leads to re-evalation of child component. And of course, does mean that real dom is touched.