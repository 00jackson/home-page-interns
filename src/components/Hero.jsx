const Hero = () => {
    return (

        <div className="relative flex flex-row items-center justify-between h-[640px] max-w-full bg-cover bg-center" style={{ backgroundImage: "url('https://storyvord.com/img/banner-bg.png')" }}>
            <div className="relative text-left flex-col p-0 px-3 lg:py-4 py-1 lg:ml-24 xl:w-1/2 lg:top-[-40px] top-[-95px] text-white">
                <h6 className="text-[16px] font-bold tracking-[4px] antialiased font-barlow-2"><span className="bold-30 font-barlow tracking-[-.075em]">-----------------------</span> STORYVORD</h6>
                <h1 className="text-[48px] lg:text-[64px] font-bold leading-none tracking-[1px] font-barlow-2 py-2">WE HELP SHOOT CONTENT ANYWHERE IN THE WORLD</h1>
                <p className="lg:text-[18px] text-[16px] lg:mt-1 lg:py-3 mt-1 py-3 font-josefin text-extrabold w-3/4">Our AI-powered tools make the production process more efficient and save costs up to 50%</p>
            </div>

            <div className="h-full w-32 bg-black lg:flex flex-col justify-center align-middle gap-10 px-12 hidden">
                <a href="https://www.facebook.com/storyvord">
                    <div className="text-white flex">
                        <img src="https://storyvord.com/img/social-media-icon1.svg" alt="facebook" className="h-6 w-6" />
                    </div>
                </a>
                <a href="https://www.linkedin.com/company/storyvord/">
                    <div className="text-white flex">
                        <img src="https://storyvord.com/img/social-media-icon4.svg" alt="linkedin" className="h-6 w-6" />
                    </div>
                </a>
                <a href="https://twitter.com/storyvord">
                    <div className="text-white flex">
                        <img src="https://storyvord.com/img/social-media-icon3.svg" alt="x" className="h-6 w-6" />
                    </div>
                </a>
            </div>
            <div className="absolute lg:bottom-0 lg:h-64 lg:w-full w-full flex lg:flex-row flex-col h-48 lg:gap-20 lg:mb-0 mb-[-200px]">
                <div className="lg:mt-[-30px] w-80 lg:ml-12">
                    <div className="lg:h-48 lg:w-64 h-32 w-full lg:ml-10">
                        <div className="flex flex-row justify-between bg-gradient-to-r from-[#03256c] to-green-500 py-4 relative top-10 w-100% lg:w-96 lg:h-24 h-24">
                            <button className="lg:py-1 lg:px-5 px-2 py-1 pb-8 lg:text-[20px] text-[12px] font-barlow font-extrabold text-left sm:mb-0 tracking-normal text-white">Get In Touch
                            </button><img src="https://storyvord.com/img/right-arrow.svg" className="text-right lg:px-5 px-1 w-12 h-12 lg:w-24 lg:h-24 py-2 lg:pb-8" alt="arrow" />
                        </div>
                        <div className="bg-white lg:h-[160px] h-24 lg:px-4 lg:py-8 relative lg:top-[40px] z-10 w-100% lg:w-96">
                            <h2 className="uppercase lg:text-[30px] text-[16px] font-barlow-2 font-semibold text-[#092679] lg:mt-2 mb-0">Are you a creator?</h2>
                            <div className="relative inline-block">
                                <p className=" underline underline-offset-8 lg:text-[20px] text-[12px] font-barlow-2 bg-gradient-to-r from-[#03256c] to-green-500 bg-clip-text text-transparent font-extrabold " >Start Creating Now</p></div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-96 w-64 lg:h-24 h-10 relative top-[100px] lg:top-[165px] lg:left-[10%] flex justify-between lg:space-x-8 space-x-1 lg:px-8">
                    <img src="https://storyvord.com/img/svgicon/move-icon22.svg" className="w-20 h-20" alt="" />
                    <img src="https://storyvord.com/img/svgicon/move-icon11.svg" className="w-20 h-20" alt="" />
                    <img src="https://storyvord.com/img/svgicon/move-icon33.svg" className="w-20 h-20" alt="" />
                    <img src="https://storyvord.com/img/svgicon/move-icon44.svg" className="w-20 h-20" alt="" />
                    <img src="https://storyvord.com/img/svgicon/move-icon55.svg" className="w-20 h-20" alt="" />
                    <img src="https://storyvord.com/img/svgicon/move-icon66.svg" className="w-20 h-20" alt="" />
                </div>
            </div>
        </div>

    )
};

export default Hero