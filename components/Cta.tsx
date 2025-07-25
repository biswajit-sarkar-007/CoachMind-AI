import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'

const Cta = () => {
  return (
    <section className='w-full  '>
        <div className='mx-auto py-24 bg-gradient-to-b from-gray-400 via-gray-200 to-gray-600rounded-lg'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto'>
                <h2 className='text-3xl font-bold tracking-tighter text-primary-foreground sm:text-4xl md:text-5xl'>Fuel Your Career Growth Today. </h2>
                <p className='mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl'>Smarter career decisions start here—join the AI movement powering professional growth.</p>

                <Link href={"/dashboard"} passHref>
                <Button
                size="lg"
                variant="secondary"
                className='h-11 mt-5 animate-bounce' 
                
                >

                    Take Charge of Your Career Today <ArrowRight className='ml-2 h-4 w-4'/>

                </Button>

                
                </Link>

            </div>
        </div>
    </section>
  )
}

export default Cta
