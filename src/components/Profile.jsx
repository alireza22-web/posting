import Link from 'next/link'
import aks from '../../public/profile.jpg'
import ThemeToggle from './ThemeToggle'
export const Profile = ()=>{
  return (
    <div className='flex justify-between items-center bg-gray-200 dark:bg-gray-900 rounded-md dark:text-white py-2  px-4'>
      <Link href={`https://alirezakh.vercel.app/`} target='_blank'>
        <div className='profile flex gap-2 items-center'>
          <img src={`../../profile.jpg`} className='w-14 h-14 rounded-full' alt="" />
          <div className='text-lg'>
            <span>علیرضا خوندابی</span>
          </div>
        </div>
      </Link>
      <div className='dark'>
        <ThemeToggle/>
      </div>
    </div>
  )
}