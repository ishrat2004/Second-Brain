import React from 'react'
import { Button } from './components/ui/Button'
import Plus from './icons/Plus'
import Share from './icons/Share'

const App = () => {
  return (
    <div>
      <Button variant="secondary" size="sm" text="Share" startIcon={<Share size="md"/>  }/>
      <Button variant="primary" size="md" text="Add content" startIcon={<Plus size="md" />}/>
      
    </div>
  )
}

export default App