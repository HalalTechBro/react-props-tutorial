import propTypes from "prop-types"

const Profiles = ({ name, age }) => {
  return (
    <div>
      <p>
        Hello {name}. Your age is {age}
      </p>
    </div>
  )
}

Profiles.propTypes = {
  name: propTypes.node.isRequired,
  age: propTypes.node.isRequired,
}

const App = () => {
  const name = "Munir"
  const age = 23
  return (
    <div>
      {/* <Message greeting="Greetings from the Child Component" /> */}
      <Profiles name={name} age={age} />
    </div>
  )
}

export default App