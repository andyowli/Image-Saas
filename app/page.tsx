import Navbar from '@/components/shared/Navbar';
import Section from '@/components/shared/Section';
import Footer from '@/components/shared/Footer';

export default function page() {
  return (
    <div className='mx-auto min-h-screen'>
        {/* 导航栏 */}
        <Navbar />

        {/* 中间内容 */}
        <Section />

        {/* 底部 */}
        <Footer />
    </div>
  )
}
