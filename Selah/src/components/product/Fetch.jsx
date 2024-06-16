import React from 'react'

const Fetch = () => {

    const url = 'https://api.example.com/data'; // Replace with the actual API endpoint
    fetch(url)
      .then(response => {
        // Handle the response here
      })
      .catch(error => {
        // Handle errors here
      });

  return (
    <div>
      
    </div>
  )
}

export default Fetch
