import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <p>Helix CRM Platform</p>
      </div>
      <div className="ms-auto">
        <p>Helix CRM Admin Platform</p>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
