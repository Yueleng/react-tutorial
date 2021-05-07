# Effects, Reducers & Context

- Working with (Side) Effects
- Managing more complex state with Reducers
- Managing App-Wide or Component-Wide State with Context

## React Main Job

- Render UI & React to User Input
  - Evaluate & render JSX
  - Manage State & Props
  - React to (User) Events & Input
  - Re-evaluate Component upon State & Prop Changes
  - This is all "baked into" React via the "tools" and features covered in this course (i.e. useState(), Hook, Props, etc).

## Side Effects

- Anything Else
  - Store Data in Browser Storage
  - Send Http Request to Backend Servers
  - Set & Manage Timers
  - These tasks must happen outside of the normal component evaluation and render cycle - especially since they block/delay rendering (e.g. Http requests)
  - You could create infinite loop if side effect(http request) was run every time componenet is re-evalated.

## Handling Side Effects with the useEffect() Hook.

- `useEffect(() => {...}, [dependencies]);`;
- The `useEffect` function consists of two parts;
- The first part: A function that should be executed after every component evalution if the specified dependencies changed. (Your side effect goes into this function)
- Dependencies of this effect - the function only runs if the dependencies changed. (Specify your dependencies of your function here)

## How could infinite loop happen

```js
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

  if (storedUserLoggedInInformation === "1") {
    setIsLoggedIn(true);
  }
  ...
}
```
We here introduce a new function from `react`: `useEffect`