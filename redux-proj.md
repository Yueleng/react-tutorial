# Redux Project

- `npm install redux react-redux`
- `npm install @reduxjs/toolkit`

## Dive Deeper

- Handling Async Tasks with Redux
- Where to Put out Code
- The Redux DevTools

## Side Effects, Async Tasks & Redux

Reducers must be pure, side-effect free, synchronous functions.

## Where should side-effect and async tasks executed?

- Inside the components (e.g. useEffect())
- Inside the action creators

## Fat Reducers VS Fat Component VS Fat Actions

- Synchronous, side-effect free code (i.e. data transformations), Prefer fat reducers, avoid action creators or components.

- Async code or with side-effects: prefer Action Creators or Components, Never use Reducers
