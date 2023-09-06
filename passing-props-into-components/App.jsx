import propTypes from "prop-types"

const Message = (props) => {
  return (
    <div>
      <p>{props.greeting}</p>
    </div>
  )
}

Message.propTypes = {
  greeting: propTypes.node.isRequired,
}

const App = () => {
  return (
    <div>
      <Message greeting="Hello world. This is a React Component" />
    </div>
  )
}

export default App
