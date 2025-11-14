import { Timeline } from '../components/Timeline'
import { experiences } from '../constants'


function Experiances() {
  return (
    <div id='work' className='w-full scroll-mt-24'>
        <Timeline data={experiences}/>
    </div>
  )
}

export default Experiances