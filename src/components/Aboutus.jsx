import React, { useEffect } from 'react'

const Aboutus = () => {

  useEffect(() => {
    document.title = "About Us | Red Blazer";
  }, []);

  return (
    <div>Aboutus</div>
  )
}

export default Aboutus