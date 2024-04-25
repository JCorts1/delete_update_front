import axios from "axios"

const Delete = ({update}) => {

    function handleSubmit(event) {
    event.preventDefault();
    axios.delete(`http://127.0.0.1:3000/users/${id}`)
    .then(() => update())
    .catch(error => console.error("Error deleting user:", error));
    }

  return (
    <div className=''>
      <button className='w-40 h-12 bg-[#626262] text-white' type='submit' onSubmit={handleSubmit}>Delete</button>
    </div>
  )
}

export default Delete
