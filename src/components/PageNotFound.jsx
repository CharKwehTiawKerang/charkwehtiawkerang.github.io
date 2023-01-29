import React, { useEffect } from 'react'
import { Typography } from 'antd'

const PageNotFound = () => {

  useEffect(() => {
    document.title = "Page Not Found | Red Blazer";
  }, []);

  return (
    <>
      <div className='error-404'>
        <Typography className='page-title'>404</Typography>
        <div>
          <Typography className=''>File Not Found</Typography>
          <Typography className=''>We apologize, it seems like the URL link that you follows are broken or does not exists.</Typography>
          <Typography className=''>~ αdmıns, (red blazer logo)</Typography>
        </div>
      </div>
    </>
    
  )
}

export default PageNotFound