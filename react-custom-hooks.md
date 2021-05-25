# React Custom Hooks

## Rules of Hooks

- Only call React Hooks in React Functions

  - React Component Functions
  - Custom Hooks

- Only call React Hooks at Top Level

  - Don't call them in nested functions
  - Don't call them in any block statements

- Always add everythin you refer to inside of useEffect() as a dependency.

## Custom Hooks

- Outsorce stateful logic into re-usable functions. Unlike 'regular functions', custom hooks can use other React hooks and React state.
- One way to solve the code duplication problem.

