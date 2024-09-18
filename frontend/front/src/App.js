import './App.css';
import { useEffect, useState } from "react"
function App() {
  function onSubmit() {

  }
  const [ticketType, setTicketType] = useState("")
  const [center, setCenter] = useState("")
  useEffect(() => {
    console.log(ticketType)


  }, [ticketType])

  return (
    <div className="App">
      <p>Submit Ticket Form</p>
      <form onSubmit={onSubmit} className='form'>
        <div className='inputDiv'>
          <label for="empName">Employee Name</label>
          <input type="text" id="empName" required placeholder="Enter Employee Name"></input>
        </div>
        <div className='inputDiv'>
          <label for="issueDate">Employee Name</label>
          <input type="text" id="issueDate" required placeholder="Enter Employee Name"></input>
        </div>
        <div className='inputDiv'> <label for="ticket">Ticket Type</label>
          <select name="ticket" id="ticket" onChange={(e) => {
            setTicketType(e.target.value)
          }}>
            <option value="Hardware">Hardware</option>
            <option value="Software">Software</option>
          </select>
          </div>
        <div className='inputDiv'> <label for="ticket">Ticket Type</label>
          <select name="center" id="center" onChange={(e) => {
            setCenter(e.target.value)
          }}>
            <option value="Hardware">Hardware</option>
            <option value="Software">Software</option>
          </select>
          </div>

        <button>Submit</button>


      </form>
    </div>
  );
}

export default App;
