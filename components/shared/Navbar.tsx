
export default function Navbar() {
  return (
    <div>
        {/* 导航栏 */}
        <nav className="flex items-center justify-between mx-4 py-3 lg:mx-44">
            <img src="/images/logo.svg" alt="bg.removal" className="w-32 sm:w-44" />
            <button 
                className="bg-black text-white px-4 py-2 rounded-lg"
            >
                Get started →
            </button>
        </nav>
    </div>
  )
}
