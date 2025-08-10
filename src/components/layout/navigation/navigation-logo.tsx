import Link from "next/link";

export default function NavigationLogo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20" cy="20" r="20" fill="url(#paint0_linear_27_870)" />
        <path
          d="M12.5 21.6667H22.5C22.942 21.6667 23.366 21.8423 23.6785 22.1548C23.9911 22.4674 24.1667 22.8913 24.1667 23.3333V25.8333C24.1667 26.2754 23.9911 26.6993 23.6785 27.0118C23.366 27.3244 22.942 27.5 22.5 27.5H14.1667C13.7246 27.5 13.3007 27.3244 12.9882 27.0118C12.6756 26.6993 12.5 26.2754 12.5 25.8333V17.5C12.5 17.058 12.6756 16.634 12.9882 16.3215C13.3007 16.0089 13.7246 15.8333 14.1667 15.8333H16.6667C17.1087 15.8333 17.5326 16.0089 17.8452 16.3215C18.1577 16.634 18.3333 17.058 18.3333 17.5V27.5M21.6667 13.3333C21.6667 13.1123 21.7545 12.9004 21.9107 12.7441C22.067 12.5878 22.279 12.5 22.5 12.5H26.6667C26.8877 12.5 27.0996 12.5878 27.2559 12.7441C27.4122 12.9004 27.5 13.1123 27.5 13.3333V17.5C27.5 17.721 27.4122 17.933 27.2559 18.0893C27.0996 18.2455 26.8877 18.3333 26.6667 18.3333H22.5C22.279 18.3333 22.067 18.2455 21.9107 18.0893C21.7545 17.933 21.6667 17.721 21.6667 17.5V13.3333Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_27_870"
            x1="20"
            y1="0"
            x2="20"
            y2="40"
            gradientUnits="userSpaceOnUse"
          >
            <stop />
            <stop offset="1" stopColor="#666666" />
          </linearGradient>
        </defs>
      </svg>

      <h1 className="text-xl font-bold whitespace-nowrap">Shad Blocks</h1>
    </Link>
  );
}
