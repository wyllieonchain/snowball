import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  centerText?: string;
  centerLink?: string;
}

export default function Header({ centerText, centerLink }: HeaderProps) {
  return (
    <header className="w-full px-6 sm:px-6 md:px-8 lg:px-12 xl:px-24 2xl:px-48 py-4 sm:py-6 lg:py-8 flex items-center justify-between">
      {/* Left: Logo and Name */}
      <div className="flex items-center space-x-1">
        <Link href="/" className="flex items-center space-x-1">
          <Image
            src="/logoNOBG.png"
            alt="Snowball Logo"
            width={30}
            height={30}
            className="w-8 h-8 sm:w-10 sm:h-10 -mt-1"
          />
          <span className="text-lg sm:text-xl text-white">Snowball</span>
        </Link>
      </div>
      
      {/* Center: Dynamic Link */}
      <div className="flex-1 flex justify-center">
        {centerText && centerLink && (
          <Link 
            href={centerLink} 
            className="text-white hover:text-gray-200 transition-colors text-base sm:text-lg px-2 sm:px-0"
          >
            {centerText}
          </Link>
        )}
      </div>
      
      {/* Right: Waitlist Button */}
      <div>
        <a 
          href="https://x.com/Snowballsave" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white text-[#04608d] px-3 sm:px-4 py-2 rounded-4xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-xs sm:text-sm inline-block"
        >
          Join the Waitlist
        </a>
      </div>
    </header>
  );
}
