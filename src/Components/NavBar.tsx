// // // // "use client";
// // // // import React, { useState } from "react";
// // // // import Link from "next/link";
// // // // import { Menu, X } from "lucide-react"; // for icons

// // // // function Navbar() {
// // // //   const [isOpen, setIsOpen] = useState(false);

// // // //   return (
// // // //     <nav className="w-full bg-gray-900 text-white shadow-md fixed top-0 left-0 z-50">
// // // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
// // // //         {/* Logo / Brand */}
// // // //         <div className="text-2xl font-bold">
// // // //           <Link href="/">MyPortfolio</Link>
// // // //         </div>

// // // //         {/* Desktop Menu */}
// // // //         <div className="hidden md:flex space-x-6">
// // // //           <Link href="/" className="hover:text-blue-400 transition">Home</Link>
// // // //           <Link href="/projects" className="hover:text-blue-400 transition">Project</Link>
// // // //           <Link href="/skills" className="hover:text-blue-400 transition">Skills</Link>
// // // //           <Link href="/contact" className="hover:text-blue-400 transition">Contact</Link>
// // // //         </div>

// // // //         {/* Mobile Menu Button */}
// // // //         <div className="md:hidden">
// // // //           <button onClick={() => setIsOpen(!isOpen)}>
// // // //             {isOpen ? <X size={28} /> : <Menu size={28} />}
// // // //           </button>
// // // //         </div>
// // // //       </div>

// // // //       {/* Mobile Dropdown */}
// // // //       {isOpen && (
// // // //         <div className="md:hidden bg-gray-800 flex flex-col items-center space-y-4 py-4">
// // // //           <Link href="/" className="hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>Home</Link>
// // // //           <Link href="/projects" className="hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>Projects</Link>
// // // //           <Link href="/skills" className="hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>Skills</Link>
// // // //           <Link href="/contact" className="hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>Contact</Link>
// // // //         </div>
// // // //       )}
// // // //     </nav>
// // // //   );
// // // // }

// // // // export default Navbar;



// // // "use client"
// // // import React, { useState } from "react"
// // // import Link from "next/link"
// // // import { usePathname, useRouter } from "next/navigation"
// // // import { Menu, X } from "lucide-react"

// // // function Navbar() {
// // //   const [isOpen, setIsOpen] = useState(false)
// // //   const pathname = usePathname()
// // //   const router = useRouter()

// // //   const handleScroll = (id: string) => {
// // //     setIsOpen(false)

// // //     // If not on home page, go home first
// // //     if (pathname !== "/") {
// // //       router.push(`/#${id}`)
// // //       return
// // //     }

// // //     const section = document.getElementById(id)
// // //     section?.scrollIntoView({ behavior: "smooth" })
// // //   }

// // //   return (
// // //     <nav className="w-full bg-gray-900 text-white shadow-md fixed top-0 left-0 z-50">
// // //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
// // //         {/* Logo */}
// // //         <div className="text-2xl font-bold">
// // //           <Link href="/">MyPortfolio</Link>
// // //         </div>

// // //         {/* Desktop Menu */}
// // //         <div className="hidden md:flex space-x-6">
// // //           <Link href="/" className="hover:text-blue-400 transition">
// // //             Home
// // //           </Link>

// // //           <button
// // //             onClick={() => handleScroll("projects")}
// // //             className="hover:text-blue-400 transition"
// // //           >
// // //             Projects
// // //           </button>

// // //           <button
// // //             onClick={() => handleScroll("skills")}
// // //             className="hover:text-blue-400 transition"
// // //           >
// // //             Skills
// // //           </button>

// // //           <button
// // //             onClick={() => handleScroll("contact")}
// // //             className="hover:text-blue-400 transition"
// // //           >
// // //             Contact
// // //           </button>
// // //         </div>

// // //         {/* Mobile Menu Button */}
// // //         <div className="md:hidden">
// // //           <button onClick={() => setIsOpen(!isOpen)}>
// // //             {isOpen ? <X size={28} /> : <Menu size={28} />}
// // //           </button>
// // //         </div>
// // //       </div>

// // //       {/* Mobile Dropdown */}
// // //       {isOpen && (
// // //         <div className="md:hidden bg-gray-800 flex flex-col items-center space-y-4 py-4">
// // //           <Link
// // //             href="/"
// // //             onClick={() => setIsOpen(false)}
// // //             className="hover:text-blue-400 transition"
// // //           >
// // //             Home
// // //           </Link>

// // //           <button
// // //             onClick={() => handleScroll("projects")}
// // //             className="hover:text-blue-400 transition"
// // //           >
// // //             Projects
// // //           </button>

// // //           <button
// // //             onClick={() => handleScroll("skills")}
// // //             className="hover:text-blue-400 transition"
// // //           >
// // //             Skills
// // //           </button>

// // //           <button
// // //             onClick={() => handleScroll("contact")}
// // //             className="hover:text-blue-400 transition"
// // //           >
// // //             Contact
// // //           </button>
// // //         </div>
// // //       )}
// // //     </nav>
// // //   )
// // // }

// // // export default Navbar


// // "use client"
// // import React, { useState } from "react"
// // import Link from "next/link"
// // import { usePathname, useRouter } from "next/navigation"
// // import { Menu, X } from "lucide-react"

// // function Navbar() {
// //   const [isOpen, setIsOpen] = useState(false)
// //   const pathname = usePathname()
// //   const router = useRouter()

// //   const handleScroll = (id: string) => {
// //     setIsOpen(false)

// //     if (pathname !== "/") {
// //       router.push(`/#${id}`)
// //       return
// //     }

// //     const section = document.getElementById(id)
// //     section?.scrollIntoView({ behavior: "smooth" })
// //   }

// //   const goToContact = () => {
// //     setIsOpen(false)
// //     router.push("/contact")
// //   }

// //   return (
// //     <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900 text-white shadow-md">
// //       <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
// //         {/* Logo */}
// //         <Link href="/" className="text-2xl font-bold">
// //           MyPortfolio
// //         </Link>

// //         {/* Desktop */}
// //         <div className="hidden md:flex space-x-6">
// //           <Link href="/" className="hover:text-blue-400">Home</Link>

// //           <button onClick={() => handleScroll("projects")} className="hover:text-blue-400">
// //             Projects
// //           </button>

// //           <button onClick={() => handleScroll("skills")} className="hover:text-blue-400">
// //             Skills
// //           </button>

// //           {/* ✅ FIXED CONTACT */}
// //           <button onClick={goToContact} className="hover:text-blue-400">
// //             Contact
// //           </button>
// //         </div>

// //         {/* Mobile Button */}
// //         <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
// //           {isOpen ? <X /> : <Menu />}
// //         </button>
// //       </div>

// //       {/* Mobile Menu */}
// //       {isOpen && (
// //         <div className="md:hidden bg-gray-800 flex flex-col items-center gap-4 py-4">
// //           <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>

// //           <button onClick={() => handleScroll("projects")}>Projects</button>
// //           <button onClick={() => handleScroll("skills")}>Skills</button>

// //           {/* ✅ FIXED CONTACT */}
// //           <button onClick={goToContact}>Contact</button>
// //         </div>
// //       )}
// //     </nav>
// //   )
// // }

// // export default Navbar


// "use client"
// import React, { useState } from "react"
// import Link from "next/link"
// import { Menu, X, Download } from "lucide-react"

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false)
//   const closeMenu = () => setIsOpen(false)

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900 text-white shadow-md">
//       <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
//         {/* Logo */}
//         <Link href="/" className="text-2xl font-bold">
//           MyPortfolio
//         </Link>

//         {/* Desktop */}
//         <div className="hidden md:flex items-center space-x-6">
//           <Link href="/">Home</Link>

//           <a href="#projects" className="hover:text-blue-400">
//             Projects
//           </a>

//           <a href="#skills" className="hover:text-blue-400">
//             Skills
//           </a>

//           <Link href="/contact" className="hover:text-blue-400">
//             Contact
//           </Link>

//           {/* ✅ RESUME BUTTON */}
//           <a
//             href="/resume/Saumya_Bhardwaaj_Resume.pdf"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
//           >
//             <Download size={16} />
//             Resume
//           </a>
//         </div>

//         {/* Mobile button */}
//         <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <X /> : <Menu />}
//         </button>
//       </div>

//       {/* Mobile menu */}
//       {isOpen && (
//         <div className="md:hidden bg-gray-800 flex flex-col items-center py-4 space-y-4">
//           <Link href="/" onClick={closeMenu}>Home</Link>
//           <a href="#projects" onClick={closeMenu}>Projects</a>
//           <a href="#skills" onClick={closeMenu}>Skills</a>
//           <Link href="/contact" onClick={closeMenu}>Contact</Link>

//           {/* ✅ MOBILE RESUME */}
//           <a
//             href="/resume/Saumya_Bhardwaaj_Resume.pdf"
//             target="_blank"
//             rel="noopener noreferrer"
//             onClick={closeMenu}
//             className="flex items-center gap-2 px-5 py-2 bg-blue-500 rounded-lg"
//           >
//             <Download size={16} />
//             Resume
//           </a>
//         </div>
//       )}
//     </nav>
//   )
// }

// export default Navbar


"use client"
import React, { useState } from "react"
import Link from "next/link"
import { Menu, X, Download } from "lucide-react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          MyPortfolio
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="hover:text-blue-400">Home</Link>

          {/* ✅ Redirects to projects page */}
          <Link href="/projects" className="hover:text-blue-400">Projects</Link>

          <a href="#skills" className="hover:text-blue-400">Skills</a>

          <Link href="/contact" className="hover:text-blue-400">Contact</Link>

          {/* Resume */}
          <a
            href="/resume/Saumya_Bhardwaaj_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            <Download size={16} />
            Resume
          </a>
        </div>

        {/* Mobile button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 flex flex-col items-center py-4 space-y-4">
          <Link href="/" onClick={closeMenu}>Home</Link>

          {/* ✅ Projects page link for mobile */}
          <Link href="/projects" onClick={closeMenu}>Projects</Link>

          <a href="#skills" onClick={closeMenu}>Skills</a>
          <Link href="/contact" onClick={closeMenu}>Contact</Link>

          {/* Mobile Resume */}
          <a
            href="/resume/Saumya_Bhardwaaj_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="flex items-center gap-2 px-5 py-2 bg-blue-500 rounded-lg"
          >
            <Download size={16} />
            Resume
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
