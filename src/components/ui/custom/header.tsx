import React from 'react';
import { Button } from '../button';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';




const Header = () => {
  return (
    <header className=''>
        <nav className='container py-5 flex items-center justify-around'>
            <div className=' flex items-center space-x-6'>
                <h2>Fresh <span className='text-primary'>Grocery</span></h2>
                
                <ul className='flex items-center space-x-5'>
                  <li className='hover:text-primary'><Link href={'/'}>Home</Link></li>
                  <li className='hover:text-primary'><Link href={'/'}>About Us</Link></li>
                  <li className='hover:text-primary'><Link href={'/'}>Services</Link></li>
                  <li className='hover:text-primary'><Link href={'/'}>Categories</Link></li>
                  <li className='hover:text-primary'><Link href={'/'}>Contact</Link></li>
                </ul>
                             
            </div>
            <div className='flex items-center space-x-4 relative'>
           <Link href={'/cart'}> <ShoppingCart className='hover:text-primary'/>
           </Link>
           <span className='absolute -top-1 h-5 w-5 flex items-center justify-center rounded-full bg-green-500  font-medium text-white'>1</span>
              <Button className='bg-primary'>Sign Up</Button>
              </div>
                            


        </nav>
    </header>
  )
}

export default Header;