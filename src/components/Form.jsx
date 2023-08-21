import React, {useState} from 'react'

function Form({onFoodSearch}) {
  const [searchTerm, setSearchTerm] = useState(''); 


  
  const handleChange = (e) => { //this updates state the input 
    console.log(e.target.value)
    setSearchTerm (e.target.value); //updates to what you write
    
}




  const handleSubmit = (e) => {    
    e.preventDefault();
    onFoodSearch(searchTerm);
}



  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
        {/* <input type="text" name="city" placeholder="city" onChange={handleChange}/> //using the weather app as a refrence point here */}
        <input type="text" 
        value={searchTerm} 
        onChange={handleChange}
        />

        <input type="submit" 
        value="Search" 
        />
        </form>
      </div>
    </>
  )
}

export default Form