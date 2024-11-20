import { NextPage } from 'next'
import Stats from '../components/dashboard/Stats'
import LeaveApplicationList from '../components/dashboard/LeaveApplicationList'

type Props = object

const Page: NextPage<Props> = ({}) => {
  return <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
    {/* Dashboard Stats */}
    <Stats/>


    {/* Leave Application */}
    <LeaveApplicationList/>
  </div>
}

export default Page