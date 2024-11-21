

import { NextPage } from 'next'
import Stats from '../components/dashboard/Stats'
import LeaveApplicationList from '../components/dashboard/LeaveApplicationList'
import AttendanceChart from '../components/dashboard/AttendanceChart'

type Props = object

const Page: NextPage<Props> = ({}) => {
  return <div className=' p-5 bg-gray-200 min-h-screen grid grid-cols-1 lg:grid-cols-10 gap-10'>
    {/* Dashboard Stats */}
   <div className='lg:col-span-2 flex justify-center' >
   <Stats/>
   </div>
    {/* Attendance Chart */}
    <div className='lg:col-span-5'>
    <AttendanceChart/>
   </div>
    

    {/* Leave Application */}
    <div className='lg:col-span-3'>
    <LeaveApplicationList/>
   </div>
    
  </div>
}

export default Page