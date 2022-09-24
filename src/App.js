import { useState } from "react";
import ReactDOM from "react-dom/client";

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
    <div className="flexChildren">
    <label>Nom:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
    </div>
    <div className="flexChildren">
    <label>Âge:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
    </div>
      <div className="flexChildren">
      <label>
          Email:
          <input 
            type="email"
            name="email"
            value={inputs.email}
            onChange={handleChange}
            />

        </label>
      </div>
        <div className="flexChildren">
        <input type="submit" />
        </div>
        
    </form>
  )
}

export default MyForm;
