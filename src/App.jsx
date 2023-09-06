// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// const Message = (props) => {
//   return (
//     <div>
//       <p>{props.greeting}</p>
//     </div>
//   )
// }

// Message.propTypes = {
//   greeting: propTypes.node.isRequired
// }

// const Profiles = ({ name = 'John Doe', age }) => {
//   return (
//     <div>
//       <p>
//         Hello {name}. Your age is {age}
//       </p>
//     </div>
//   )
// }

// Profiles.propTypes = {
//   name: propTypes.node.isRequired,
//   age: propTypes.node.isRequired
// }

import PropTypes from "prop-types"

// const Avatar = (props) => {
//   const { person } = props

//   return (
//     <div>
//       <p>Name: {person.name}</p>
//       <p>Age: {person.age}</p>
//       <p>Occupation: {person.occupation}</p>
//       <p>Country: {person.country}</p>
//     </div>
//   )
// }

// Avatar.propTypes = {
//   person: PropTypes.node.isRequired,
// }

// function Profile(props) {
//   return (
//     <div>
//       <Avatar {...props} />
//     </div>
//   )
// }

// const App = () => {
//   const avatarProps = {
//     person: {
//       name: "John Doe",
//       age: 23,
//       occupation: "Software Engineer",
//       country: "Nigeria",
//     },
//   }

//   return (
//     <div>
//       <h1>Person Information</h1>
//       <Profile {...avatarProps} />
//     </div>
//   )
// }

// export default App



const Modal = ({ children }) => {
  return <div>{children}</div>
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
}

const App = () => {
  return (
    <div>
      <Modal>
        <h2>Welcome to the Modal!</h2>
        <p>This is some content within the modal.</p>
      </Modal>
    </div>
  )
}

export default App