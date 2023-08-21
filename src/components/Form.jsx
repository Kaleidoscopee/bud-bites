import React, {useState} from 'react'

function Form({onFoodSearch}) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFoodSearch(searchTerm);
}



  return (
    <>
      <div>
        <form on Submit={handleSubmit}>
        {/* <input type="text" name="city" placeholder="city" onChange={handleChange}/> //using the weather app as a refrence point here */}
        <input type="text" value={searchTerm} onSubmit={handleSubmit}/>
        <input type="submit" value="Search" />
        </form>
      </div>
    </>
  )
}

export default Form