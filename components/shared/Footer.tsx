
export default function Footer() {
  return (
    <div>
        <footer className='flex items-center justify-between gap-4 px-4 lg:px-28 mt-32 mb-4'>
            <img 
                src="/images/logo.svg" 
                alt="footer" 
                className='h-8'
            />
            <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>Copyright @GreatStack.dev | All right reserved.</p>

            <div className="flex gap-1">
                {['twitter_icon', 'facebook_icon', 'google_plus_icon'].map((social) => (
                    <a key={social} href={`#${social}`} className="text-gray-400 hover:text-gray-600">
                        <img src={`/images/${social}.svg`} alt={social} className="w-10 h-10" />
                    </a>
                ))}
            </div>
        </footer>
    </div>
  )
}
