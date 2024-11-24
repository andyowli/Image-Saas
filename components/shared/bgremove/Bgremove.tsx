import Navbar from '../Navbar';
import Footer from '../Footer';

import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Bgremove() {
  return (
    <div className='mx-auto px-4 min-h-screen flex flex-col'>
      <Navbar />

      {/* 调整主要内容区域的响应式布局 */}
      <div className='flex-1 lg:mx-40 xl:mx-40'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto my-8 md:my-16'>
          {/* 左边卡片 */}
          <Card className='w-full'>
            <CardHeader>
              <CardTitle>Original</CardTitle>
            </CardHeader>
            <CardContent>
              <img 
                src="/images/image_w_bg.png" 
                alt="original"
                className='w-full h-auto object-cover rounded-md' 
              />
            </CardContent>
          </Card>

          {/* 右边卡片 */}
          <Card className='w-full'>
            <CardHeader>
              <CardTitle>Background Removed</CardTitle>
            </CardHeader>
            <CardContent>
              <img 
                src="/images/image_wo_bg.png" 
                alt="original"
                className='w-full h-auto object-cover rounded-md' 
              />
            </CardContent>
          </Card>
        </div>

        {/* 按钮组响应式布局 */}
        <div className='flex flex-col sm:flex-row justify-center sm:justify-end items-center gap-4 max-w-6xl mx-auto mb-16'>
          <Button 
            className='text-violet-600 w-full sm:w-auto'
            variant="outline"
          >
            Try another image
          </Button>
          <Button
            className='bg-gradient-to-r from-violet-600 to-fuchsia-600 w-full sm:w-auto'
          >
            Download image
          </Button>
        </div>
      </div>

      <Footer />
    </div>

  )
}
