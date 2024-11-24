import Navbar from '../Navbar';
import Footer from '../Footer';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { Button } from '@/components/ui/button';

export default function BuyCredit() {
  return (
    <div className='mx-auto container'>
        <Navbar />

        <div className='mt-28 mb-80 lg:mt-32 lg:mb-[21rem] lg:mx-44'>
            <h2 className='text-center text-3xl sm:text-3xl lg:text-4xl font-bold text-[#353535] p-8'>Choose the plan that’s right for you</h2>
            
            <div className='grid  justify-items-center grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8 sm:mt-12 lg:mt-16'>
                <Card className="w-[350px] max-[640px]:w-[250px] 2xl:w-[380px] xl:w-[290px] lg:w-[320px] md:w-[370px] sm:w-[300px]">
                    <CardHeader>
                        <CardTitle>Basic</CardTitle>
                        <CardDescription>Best for personal use.</CardDescription>
                    </CardHeader>

                    <CardContent>
                    <span className='text-2xl'>$10</span>
                    <span className='mx-2'>/</span>
                    <span className=''>100 credits</span>
                    </CardContent>

                    <CardFooter>
                        <Button className='w-full'>Get start</Button>
                    </CardFooter>
                </Card>

                <Card className="w-[350px] max-[640px]:w-[250px] 2xl:w-[380px] xl:w-[290px] lg:w-[320px] md:w-[370px] sm:w-[300px]">
                    <CardHeader>
                        <CardTitle>Advanced</CardTitle>
                        <CardDescription>Best for business use.</CardDescription>
                    </CardHeader>

                    <CardContent>
                    <span className='text-2xl'>$50</span>
                    <span className='mx-2'>/</span>
                    <span className=''>500 credits</span>
                    </CardContent>

                    <CardFooter>
                        <Button className='w-full'>Get start</Button>
                    </CardFooter>
                </Card>

                <Card className="w-[350px] max-[640px]:w-[250px] 2xl:w-[380px] xl:w-[290px] lg:w-[320px] md:w-[370px] sm:w-[300px]">
                    <CardHeader>
                        <CardTitle>Business</CardTitle>
                        <CardDescription>Best for enterprise use.</CardDescription>
                    </CardHeader>

                    <CardContent>
                    <span className='text-2xl'>$250</span>
                    <span className='mx-2'>/</span>
                    <span className=''>15000 credits</span>
                    </CardContent>

                    <CardFooter>
                        <Button className='w-full'>Get start</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>

        <Footer />
    </div>
  )
}
