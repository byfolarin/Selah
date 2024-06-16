import React from 'react'

const Fetch = () => {

    const url = 'https://api.example.com/data'; // Replace with the actual API endpoint


    fetch(url)

      .then(response => {

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`); // Throw an error for non-200 status codes
          }
          return response.json(); // Parse the response as JSON
      })

      .then(data => {
        console.log('Fetched data:', data); // Do something with the fetched data
      })
      
      .catch(error => {
        console.error('Error fetching data:', error); // Handle errors
      });



  return (
    <div>
      
    </div>
  )
}

export default Fetch
