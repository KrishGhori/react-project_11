# Redux Counter App

A modern and responsive Counter Application built using **React** and **Redux Toolkit** for global state management.

---

##  Features

- Increment counter
- Decrement counter
- Reset counter
- Increment by custom amount
- Clean and modern UI
- Responsive card layout
- Organized Redux state management

---

##  Technologies Used

- React
- Redux Toolkit
- React Redux
- CSS3

---
##  Project Structure

```
src/
│
├── Feature/
│ └── CounterSlice.js
│
├── App.jsx
├── App.css
├── main.jsx
└── store/
└── store.js
```

---

##  How It Works

- Redux Toolkit `createSlice` manages counter state.
- Actions: `increment`, `decrement`, `reset`, `incrementByAmount`
- `useSelector` reads state.
- `useDispatch` updates state.
- Global store configured using `configureStore`.

---

##  UI Overview

- Gradient background
- Centered card layout
- Styled buttons with hover effects
- Number input for custom increment

---
##  Description

Redux Counter App is a structured frontend application built with React and Redux Toolkit to demonstrate modern state management practices.

The application uses a centralized Redux store to manage counter state. All state updates are handled through clearly defined slice reducers and dispatched actions, ensuring predictable and maintainable state transitions.

The project highlights:

- Implementation of `createSlice` for defining reducers and actions
- Store configuration using `configureStore`
- Integration of Redux with React via `useSelector` and `useDispatch`
- Controlled form input for dynamic state updates
- Clean UI structure with modular styling

This project serves as a foundational example for understanding scalable state management in React applications.
