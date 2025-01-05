import { Button} from './components/Button'
import { Card } from './components/Card'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'

function App() {
  

  return (
  <div className='p-4'> 
    <div className='flex justify-end gap-4'>
      <Button variant="primary" text="Add content" startIcon={<PlusIcon/>}></Button> 
      <Button variant="secondary" text="Share brain" startIcon={<ShareIcon/>}></Button>
    </div>
    <div className='flex gap-4'>
      <Card type="twitter" link="https://twitter.com/kirat_tw/status/1633685473821425666"
      title="First tweet"/>
      <Card type="youtube" link="https://www.youtube.com/watch?v=vflWLItnwfA"
      title="First tweet"/>
    </div>
  </div>
       
  )
}

export default App
