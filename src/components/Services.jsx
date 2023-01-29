import React, { useEffect } from 'react'

const Services = () => {

  useEffect(() => {
    document.title = "Services | Red Blazer";
  }, []);

  return (
    <div>Services</div>
  )
}

export default Services