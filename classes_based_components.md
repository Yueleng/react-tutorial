# Class Based Components

- What and Why
- Working with classes based components
- Error Boundaries

## Class-based components: An alternative to functions

- Functionial components are regular Javascript functions which return renderable results (typically JSX) (Modern Approach)
- Components can also be defined as JS classes where a `render()` method defines the to-be-rendered output. (Traditional Approach)
- Nowadarys, exception of error boundaries, there is no reason to go for class-based components
- Class-based components _Can not use_ React Hooks.
- In class based component, function is not defined inside the `render` method. Instead, we define inside the class definition, parallele with `render()` method.
- Classes based component is the only kind of component that can handle state before 16.8 React.
- State in classes based component is always an object, while after 16.8 state can be primitive or object.
- In class-based component, `this.setState({})` will merge the new filed with old state while in modern react, `setStateFunc(newState)` will overwrite the state. This makes sense, since in class-based component, all states is managed in current component as `this.state` while in modern react functional component, we can destruct all the states and define fine-grained multiple states by calling multiple `useState` hooks function.

## Class based component life-cycle

- `componentDidMount`: Called once component mounted(was evaluated & rendered) adding `useEffect(...[])` with empty dependencies is equivalent with `componentDidMount(...)`.
- `componentDidUpdate`: Called once component updated(was evaluated & rendered) `useEffect(...,[someValue])`
- `componentWillUnmount`: Called right before component is unmounted (removed from DOM). `useEffect(() => {...}}, [])`
- `componentDidMount` is the place where we send http request. Since logic inside this life cycle will only run once when the component did mount, avoid sending multiple http request.

## Context

- Class based component context usage example: `App.js`, `UserFinder.js`, `users-context.js` in `react-class-based-components-proj/` folder.
