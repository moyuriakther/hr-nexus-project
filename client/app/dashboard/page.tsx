import { NextPage } from 'next'
import Stats from '../components/dashboard/Stats'

type Props = object

const Page: NextPage<Props> = ({}) => {
  return <div>
    {/* Dashboard Stats */}
    <Stats/>
  </div>
}

export default Page