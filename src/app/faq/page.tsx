import Image from "next/image";
import Header from "@/components/header";

export default function FAQ() {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
      style={{ backgroundImage: 'url(/background.png)' }}
    >
      {/* Header */}
      <Header />

      {/* Main Content Section */}
      <div className="flex flex-col items-center justify-start flex-1 px-4 sm:px-6 md:px-8 lg:px-48 pt-8 sm:pt-12 lg:pt-8">
        {/* Large Title */}
        <h1 className="text-6xl text-white text-center leading-tight font-sans text-[40px] sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <div className="block">Frequently Asked</div>
          <div className="block relative">
            Questions
            <Image
              src="/whiteleaf.png"
              alt="White Leaf"
              width={16}
              height={16}
              className="absolute -top-1 right-16 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
            />
          </div>
        </h1>

        {/* FAQ Cards Layout */}
        <div className="w-full px-4 sm:px-6 lg:px-0">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
            {/* Card 1 - What is Snowball */}
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-xl">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
                What is Snowball?
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Snowball is a high-yield savings app built specifically for Canadians. We offer 5-15% APY - up to 25x more than traditional savings accounts. This is done through decentralized finance protocols that lend USDC to overcollateralized markets.
              </p>
            </div>

            {/* Card 2 - How does 8% APY work */}
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-xl">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
                How do you offer 5-15% APY?
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                We use decentralized borrow/lend protocols to supply USDC (USD stablecoin) to overcollateralized markets. This DeFi approach allows us to capture higher yields while maintaining security through overcollateralization.
              </p>
            </div>

            {/* Card 3 - Security */}
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-xl">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
                Is my money safe with Snowball?
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Yes. We partner with Paytrie, a regulated MSB with FINTRAC, for secure deposit and withdrawal processing via Interac e-transfer. Our DeFi protocols use overcollateralized lending, meaning borrowers must post more collateral than they borrow.
              </p>
            </div>

            {/* Card 4 - Access to funds */}
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-xl">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
                Can I access my money anytime?
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Yes! While your money works harder for you, you can still withdraw funds anytime. Withdrawals are processed within 1 hour via Interac e-transfer through our partner Paytrie.
              </p>
            </div>

            {/* Card 5 - Minimum deposit */}
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-xl">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
                What&apos;s the minimum to get started?
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                You can start with as little as $100. There are no monthly fees, no minimum balance requirements, and no hidden charges. Just your money growing at 5-15% APY.
              </p>
            </div>

            {/* Card 6 - When available */}
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                When will Snowball be available?
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                We&apos;re launching in October 2025! Join our waitlist to get early access and be among the first Canadians to start earning up to 25x more on their savings.
              </p>
            </div>
          </div>
        </div>

        {/* More Questions Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 px-4 sm:px-6 lg:px-0">
          <p className="text-white text-base sm:text-lg">
            More Questions?{" "}
            <a 
              href="https://x.com/Snowballsave" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white underline hover:text-gray-200 transition-colors"
            >
              Message us on X
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
