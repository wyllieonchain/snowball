import Image from "next/image";
import Header from "@/components/header";

export default function Home() {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
      style={{ backgroundImage: 'url(/background.png)' }}
    >
      {/* Header */}
      <Header centerText="FAQ" centerLink="/faq" />

      {/* New Main Content Section */}
      <div className="flex flex-col items-center justify-start flex-1 px-4 sm:px-6 md:px-8 lg:px-48 pt-8 sm:pt-12 lg:pt-8">
        {/* Rounded Bar */}
        <div className="bg-white/40 rounded-full p-1 flex items-center mb-8 shadow-lg w-fit min-w-[380px] max-w-lg lg:w-auto lg:min-w-0 lg:max-w-none">
          <div className="bg-[#04608d] text-white rounded-full px-4 py-1 text-sm font-sans text-xs lg:text-sm">
            New
          </div>
          <div className="text-white px-4 py-1 text-sm font-sans text-xs lg:text-sm text-center lg:text-left">
            Earn 25x more than a traditional savings account
          </div>
        </div>

        {/* Large Text */}
        <h1 className="text-6xl text-white text-center leading-tight font-sans text-[40px] sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl mx-auto">
          <div className="block">The Savings App</div>
          <div className="block relative">
            Built for Canadians
            <Image
              src="/whiteleaf.png"
              alt="White Leaf"
              width={16}
              height={16}
              className="absolute -top-2 -right-6 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
            />
          </div>
        </h1>

        {/* Mobile Cards - Right after heading on small screens */}
        <div className="block lg:hidden w-full px-4 sm:px-6 mt-16">
          <div className="max-w-4xl mx-auto">
            {/* Mobile Savings Comparison Card */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-xl w-full max-w-xs mx-auto">
              <h3 className="text-sm font-semibold text-gray-800 mb-3 text-center">$10,000 in savings after 10 years</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2 border border-gray-300 px-4 py-1 rounded-full">
                    <Image
                      src="/bank.png"
                      alt="Bank Icon"
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />
                    <span className="text-sm text-gray-600">Bank</span>
                  </div>
                  <span className="text-sm text-gray-800">$10,253.12</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-white bg-gradient-to-r from-[#04608d] to-[#0a84bf] px-3 py-1 rounded-full flex items-center space-x-2">
                    <Image
                      src="/logoNOBG.png"
                      alt="Snowball Logo"
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />
                    <span>Snowball</span>
                  </div>
                  <span className="text-sm font-bold text-[#04608d]">$22,196.40</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* iPhone Preview Container - Always Centered */}
      <div className="w-full flex justify-center items-end px-4 sm:px-6 lg:px-0">
        {/* iPhone Image - Centered */}
        <div className="relative max-w-full lg:max-w-none">
          {/* Mobile Image - Thinner version for screens < 1024px */}
          <Image
            src="/iphonepreviewMobile.png"
            alt="Snowball App Preview on iPhone"
            width={900}
            height={1800}
            className="w-auto h-auto w-full lg:hidden lg:max-w-3xl 2xl:max-w-4xl 3xl:max-w-5xl"
            priority
          />
          
          {/* Desktop Image - Original version for screens >= 1024px */}
          <Image
            src="/iphonepreview.png"
            alt="Snowball App Preview on iPhone"
            width={900}
            height={1800}
            className="w-auto h-auto w-full hidden lg:block lg:max-w-3xl 2xl:max-w-4xl 3xl:max-w-5xl"
            priority
          />
          
          {/* Desktop Overlay Cards - Positioned relative to iPhone (lg and up) */}
          {/* Top Left Card - Savings Comparison */}
          <div className="absolute top-1/4 -left-18 bg-white rounded-xl p-4 shadow-xl max-w-xs 2xl:max-w-sm 2xl:p-6 3xl:max-w-md 3xl:p-8 hidden lg:block">
            <h3 className="text-sm font-semibold text-gray-800 mb-3 2xl:text-base 3xl:text-lg">$10,000 in savings after 10 years</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2 border border-gray-300 px-6 py-1 rounded-full">
                  <Image
                    src="/bank.png"
                    alt="Bank Icon"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-gray-600">Bank</span>
                </div>
                <span className="text-sm text-gray-800">$10,253.12</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-sm text-white bg-gradient-to-r from-[#04608d] to-[#0a84bf] opacity-70 px-3 py-1 rounded-full flex items-center space-x-2">
                  <Image
                    src="/logoNOBG.png"
                    alt="Snowball Logo"
                    width={16}
                    height={16}
                    className="w-4 h-4"
                  />
                  <span>Snowball</span>
                </div>
                <span className="text-sm font-bold text-[#04608d]">$22,196.40</span>
              </div>
            </div>
          </div>

          {/* Bottom Left Card - Automatic Compounding */}
          <div className="absolute bottom-1/10 bg-white rounded-xl p-4 shadow-xl max-w-xs 2xl:max-w-sm 2xl:p-6 3xl:max-w-md 3xl:p-8 hidden lg:block">
            <h3 className="text-sm font-semibold text-gray-800 mb-3 text-center 2xl:text-base 3xl:text-lg">
              Automatic<br />
              Compounding
            </h3>
            <div className="flex justify-center items-center space-x-2">
              <div className="w-4 h-4 border-2 border-[#04608d] rounded-full 2xl:w-5 2xl:h-5 3xl:w-6 3xl:h-6"></div>
              <div className="w-6 h-6 border-2 border-[#04608d] rounded-full 2xl:w-7 2xl:h-7 3xl:w-8 3xl:h-8"></div>
              <div className="w-8 h-8 border-2 border-[#04608d] rounded-full 2xl:w-10 2xl:h-10 3xl:w-12 3xl:h-12"></div>
            </div>
          </div>

          {/* APY Card - Positioned relative to page */}
          <div className="absolute bottom-1/2 -right-18 bg-white rounded-xl p-4 shadow-xl w-32 h-24 overflow-hidden 2xl:w-40 2xl:h-32 2xl:p-6 3xl:w-48 3xl:h-40 3xl:p-8 hidden lg:block">
            <div className="text-xl font-bold text-left 2xl:text-2xl 3xl:text-3xl" style={{ color: '#d6910a' }}>8% APY</div>
            <div className="absolute inset-0 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 128 96">
                <defs>
                  <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#d6910a" stopOpacity="1" />
                    <stop offset="100%" stopColor="#ffde53" stopOpacity="1" />
                  </linearGradient>
                </defs>
                <path 
                  d="M0 96 C20 95 80 85 128 0 L128 96 Z" 
                  fill="url(#orangeGradient)"
                  opacity="0.7"
                />
                <path 
                  d="M0 96 C20 95 80 85 128 0" 
                  stroke="#d6910a"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}
