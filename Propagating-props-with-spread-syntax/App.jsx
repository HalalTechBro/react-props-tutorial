import PropTypes from "prop-types"

const Avatar = (props) => {
  const { person } = props

  return (
    <div>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <p>Occupation: {person.occupation}</p>
      <p>Country: {person.country}</p>
    </div>
  )
}

Avatar.propTypes = {
  person: PropTypes.node.isRequired,
}

function Profile(props) {
  return (
    <div>
      <Avatar {...props} />
    </div>
  )
}

const App = () => {
  const avatarProps = {
    person: {
      name: "John Doe",
      age: 23,
      occupation: "Software Engineer",
      country: "Nigeria",
    },
  }

  return (
    <div>
      <h1>Person Information</h1>
      <Profile {...avatarProps} />
    </div>
  )
}

export default App
