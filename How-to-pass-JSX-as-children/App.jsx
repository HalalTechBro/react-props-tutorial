import PropTypes from "prop-types"

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