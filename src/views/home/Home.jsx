import { Outlet, useLocation } from 'react-router'
import Style from '@/style/Home.module.scss'

function Home() {

  return (
    <div className={`${Style.Home}`}>
      <Outlet></Outlet>
    </div>
  )
}
export default Home