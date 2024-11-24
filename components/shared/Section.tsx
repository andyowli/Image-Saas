import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

export default function Section() {
    const steps = [
        {
          title: 'Upload image',
          description: 'This is a demo text, will replace it later',
          icon: '/images/upload_icon.svg'
        },
        {
          title: 'Remove background',
          description: 'This is a demo text, will replace it later',
          icon: '/images/remove_bg_icon.svg'
        },
        {
          title: 'Download image',
          description: 'This is a demo text, will replace it later',
          icon: '/images/download_icon.svg'
        }
    ]
  return (
    <div>
        <section>
            <div className="flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20">
                <div>
                    <h1 className="text-5xl font-bold leading-tight">
                        Remove the
                    <br />
                    <span className="text-purple-600">background </span>
                        from 
                        <br />
                        images for free.
                    </h1>
                    <p className="mt-6 text-gray-600">
                        Lorem ipsum simply dummy text of the printing and typesetting industry.
                    </p>
                    <button className="mt-8 bg-purple-600 text-white px-6 py-3 rounded-lg flex items-center gap-2">
                        <img src="/images/upload_btn_icon.svg" alt="upload" />
                        Upload your image
                    </button>
                </div>

                <div className="w-full max-w-md">
                    <img 
                        src="/images/header_img.png" 
                        alt="Demo" 
                    />
                </div>
            </div>


            <div className='py-28'>
                <h2 className="text-3xl font-bold text-center mb-12">
                    Steps to remove background image in seconds
                </h2>
                
                <div className="flex items-start flex-wrap gap-4 mt-16 xl:mt-24 justify-center">
                    {steps.map((step, index) => (
                        <div key={index} className="flex items-start gap-4 bg-white border drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500">
                            <img src={step.icon} alt={step.title} className="max-w-9" />
                            <div>
                                <p className="text-xl font-medium">{step.title}</p>
                                <p className="text-sm text-neutral-500 mt-1">{step.description}</p>
                            </div>
                            
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h2 className="text-3xl font-bold text-center mb-12">
                    Remove Background With High
                    Quality and Accuracy
                </h2>

                <div className='mt-16 mb-8 w-2/4 mx-auto'>
                    <ReactCompareSlider
                        className='rounded-lg'
                        itemOne={<ReactCompareSliderImage src="/images/image_w_bg.png" srcSet="/images/image_w_bg.png" alt="Image one" />}
                        itemTwo={<ReactCompareSliderImage src="/images/image_wo_bg.png" srcSet="/images/image_wo_bg.png" alt="Image two" />}
                    />
                </div>
            </div>

            <div className='mt-28'>
                <h2 className="text-3xl font-bold text-center mb-12">
                    See the magic. Try now
                </h2>

                <div className='mt-16w-2/4 mx-auto'>
                    <button className="text-sm bg-purple-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 mx-auto hover:scale-105 transition-all duration-700">
                        <img 
                            src="/images/upload_btn_icon.svg" 
                            alt="upload" 
                            className='w-5 h-5'
                        />
                        Upload your image
                    </button>
                </div>
            </div>
        </section>
    </div>
  )
}
