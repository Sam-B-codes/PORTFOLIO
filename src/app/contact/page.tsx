// // // // // import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"

// // // // // export default function ContactPage() {
// // // // //   return (
// // // // //     <section className="min-h-screen bg-gray-950 text-white py-20 px-6 md:px-16">
// // // // //       <div className="max-w-5xl mx-auto">
// // // // //         {/* Heading */}
// // // // //         <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-400 mb-4">
// // // // //           Contact Me
// // // // //         </h1>
// // // // //         <p className="text-center text-gray-400 mb-12">
// // // // //           Let’s connect for opportunities, projects, or collaborations.
// // // // //         </p>

// // // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
// // // // //           {/* Left: Contact Details */}
// // // // //           <div className="space-y-6">
// // // // //             <p className="text-gray-300 leading-relaxed">
// // // // //               I’m open to internships, full-time roles, freelance projects, and
// // // // //               collaborations. Feel free to reach out — I usually respond within
// // // // //               24 hours.
// // // // //             </p>

// // // // //             <div className="flex items-center gap-4">
// // // // //               <Mail className="text-blue-400" />
// // // // //               <span className="text-gray-300">
// // // // //                 your.email@example.com
// // // // //               </span>
// // // // //             </div>

// // // // //             <div className="flex items-center gap-4">
// // // // //               <Phone className="text-blue-400" />
// // // // //               <span className="text-gray-300">
// // // // //                 +91 XXXXXXXXXX
// // // // //               </span>
// // // // //             </div>

// // // // //             <div className="flex items-center gap-4">
// // // // //               <MapPin className="text-blue-400" />
// // // // //               <span className="text-gray-300">
// // // // //                 India
// // // // //               </span>
// // // // //             </div>

// // // // //             {/* Social Links */}
// // // // //             <div className="flex gap-6 pt-4">
// // // // //               <a
// // // // //                 href="https://github.com/yourusername"
// // // // //                 target="_blank"
// // // // //                 className="text-gray-300 hover:text-blue-400 transition"
// // // // //               >
// // // // //                 <Github size={28} />
// // // // //               </a>

// // // // //               <a
// // // // //                 href="https://linkedin.com/in/yourusername"
// // // // //                 target="_blank"
// // // // //                 className="text-gray-300 hover:text-blue-400 transition"
// // // // //               >
// // // // //                 <Linkedin size={28} />
// // // // //               </a>
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Right: Contact Form */}
// // // // //           <form className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg space-y-6">
// // // // //             <div>
// // // // //               <label className="block text-sm text-gray-300 mb-2">
// // // // //                 Name
// // // // //               </label>
// // // // //               <input
// // // // //                 type="text"
// // // // //                 placeholder="Your name"
// // // // //                 className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-white/10 focus:outline-none focus:border-blue-400"
// // // // //               />
// // // // //             </div>

// // // // //             <div>
// // // // //               <label className="block text-sm text-gray-300 mb-2">
// // // // //                 Email
// // // // //               </label>
// // // // //               <input
// // // // //                 type="email"
// // // // //                 placeholder="your@email.com"
// // // // //                 className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-white/10 focus:outline-none focus:border-blue-400"
// // // // //               />
// // // // //             </div>

// // // // //             <div>
// // // // //               <label className="block text-sm text-gray-300 mb-2">
// // // // //                 Message
// // // // //               </label>
// // // // //               <textarea
// // // // //                 rows={4}
// // // // //                 placeholder="Write your message..."
// // // // //                 className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-white/10 focus:outline-none focus:border-blue-400"
// // // // //               />
// // // // //             </div>

// // // // //             <button
// // // // //               type="submit"
// // // // //               className="w-full bg-blue-500 hover:bg-blue-600 transition py-3 rounded-lg font-semibold"
// // // // //             >
// // // // //               Send Message
// // // // //             </button>
// // // // //           </form>
// // // // //         </div>
// // // // //       </div>
// // // // //     </section>
// // // // //   )
// // // // // }


// // // // "use client"
// // // // import React, { useRef } from "react"
// // // // import emailjs from "@emailjs/browser"

// // // // export default function ContactPage() {
// // // //   const formRef = useRef<HTMLFormElement>(null)

// // // //   const sendEmail = (e: React.FormEvent) => {
// // // //     e.preventDefault()

// // // //     if (!formRef.current) return

// // // //     emailjs
// // // //       .sendForm(
// // // //         "YOUR_SERVICE_ID",
// // // //         "YOUR_TEMPLATE_ID",
// // // //         formRef.current,
// // // //         "YOUR_PUBLIC_KEY"
// // // //       )
// // // //       .then(
// // // //         () => {
// // // //           alert("Message sent successfully!")
// // // //           formRef.current?.reset()
// // // //         },
// // // //         (error) => {
// // // //           alert("Failed to send message")
// // // //           console.error(error)
// // // //         }
// // // //       )
// // // //   }

// // // //   return (
// // // //     <section className="min-h-screen bg-gray-900 text-white py-20 px-6">
// // // //       <div className="max-w-xl mx-auto">
// // // //         <h1 className="text-4xl font-bold text-blue-400 mb-8 text-center">
// // // //           Contact Me
// // // //         </h1>

// // // //         <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
// // // //           <input
// // // //             type="text"
// // // //             name="name"
// // // //             placeholder="Your Name"
// // // //             required
// // // //             className="w-full px-4 py-3 bg-gray-800 rounded-lg outline-none"
// // // //           />

// // // //           <input
// // // //             type="email"
// // // //             name="email"
// // // //             placeholder="Your Email"
// // // //             required
// // // //             className="w-full px-4 py-3 bg-gray-800 rounded-lg outline-none"
// // // //           />

// // // //           <textarea
// // // //             name="message"
// // // //             rows={5}
// // // //             placeholder="Your Message"
// // // //             required
// // // //             className="w-full px-4 py-3 bg-gray-800 rounded-lg outline-none"
// // // //           />

// // // //           <button
// // // //             type="submit"
// // // //             className="w-full py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition"
// // // //           >
// // // //             Send Message
// // // //           </button>
// // // //         </form>
// // // //       </div>
// // // //     </section>
// // // //   )
// // // // }



// // "use client"
// // import React, { useRef, useEffect } from "react"
// // import emailjs from "@emailjs/browser"

// // export default function ContactPage() {
// //   const formRef = useRef<HTMLFormElement>(null)

// //   // 🔍 CHECK ENV VARIABLES ON PAGE LOAD
// //   useEffect(() => {
// //     console.log(
// //       process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
// //       process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
// //       process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
// //     )
// //   }, [])

// //   const sendEmail = (e: React.FormEvent) => {
// //     e.preventDefault()
// //     if (!formRef.current) return

// //     emailjs
// //       .sendForm(
// //         process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
// //         process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
// //         formRef.current,
// //         process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
// //       )
// //       .then(
// //         () => {
// //           alert("Message sent successfully!")
// //           formRef.current?.reset()
// //         },
// //         (error) => {
// //           alert("Failed to send message")
// //           console.error("EmailJS Error:", error)
// //         }
// //       )
// //   }

// //   return (
// //     <section className="min-h-screen bg-gray-900 text-white py-20 px-6">
// //       <div className="max-w-xl mx-auto">
// //         <h1 className="text-4xl font-bold text-blue-400 mb-8 text-center">
// //           Contact Me
// //         </h1>

// //         <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
// //           <input
// //             type="text"
// //             name="name"
// //             placeholder="Your Name"
// //             required
// //             className="w-full px-4 py-3 bg-gray-800 rounded-lg outline-none"
// //           />

// //           <input
// //             type="email"
// //             name="email"
// //             placeholder="Your Email"
// //             required
// //             className="w-full px-4 py-3 bg-gray-800 rounded-lg outline-none"
// //           />

// //           <textarea
// //             name="message"
// //             rows={5}
// //             placeholder="Your Message"
// //             required
// //             className="w-full px-4 py-3 bg-gray-800 rounded-lg outline-none"
// //           />

// //           <button
// //             type="submit"
// //             className="w-full py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition"
// //           >
// //             Send Message
// //           </button>
// //         </form>
// //       </div>
// //     </section>
// //   )
// // }



"use client"

import React, { useRef, useEffect } from "react"
import emailjs from "@emailjs/browser"

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null)

  // 🔍 Check environment variables on page load (for debugging)
  useEffect(() => {
    console.log(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
  }, [])

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      alert("Email service is not configured correctly.")
      return
    }

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      alert("Message sent successfully!")
      formRef.current.reset()
    } catch (error) {
      console.error("EmailJS Error:", error)
      alert("Failed to send message. Please try again later.")
    }
  }

  return (
    <section className="min-h-screen bg-gray-900 text-white py-20 px-6">
      <div className="max-w-xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-400 mb-8 text-center">
          Contact Me
        </h1>

        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 bg-gray-800 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 bg-gray-800 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          />

          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            required
            className="w-full px-4 py-3 bg-gray-800 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="w-full py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}




// "use client";

// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";

// export default function ContactPage() {
//   const form = useRef<HTMLFormElement>(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [status, setStatus] = useState("");

//   const sendEmail = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     if (!form.current) return;

//     emailjs
//       .sendForm(
//         process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
//         process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
//         form.current,
//         process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
//       )
//       .then(
//         () => {
//           setStatus("SUCCESS");
//           setIsSubmitting(false);
//           form.current?.reset();
//         },
//         (error) => {
//           console.error("FAILED...", error.text);
//           setStatus("ERROR");
//           setIsSubmitting(false);
//         }
//       );
//   };

//   return (
//     <div className="max-w-xl mx-auto p-8 border rounded-lg shadow-sm bg-white mt-10">
//       <h1 className="text-2xl font-bold mb-6">Contact Me</h1>
      
//       <form ref={form} onSubmit={sendEmail} className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium mb-1">Name</label>
//           <input
//             type="text"
//             name="name" // Matches {{name}} in your screenshot
//             required
//             placeholder="John Doe"
//             className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">Email</label>
//           <input
//             type="email"
//             name="email" // Matches {{email}} in your screenshot
//             required
//             placeholder="john@example.com"
//             className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">Message</label>
//           <textarea
//             name="message" // Matches {{message}} in your screenshot
//             required
//             rows={4}
//             placeholder="Your message here..."
//             className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
//           />
//         </div>

//         <button
//           type="submit"
//           disabled={isSubmitting}
//           className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 disabled:bg-gray-400 transition"
//         >
//           {isSubmitting ? "Sending..." : "Send Message"}
//         </button>

//         {status === "SUCCESS" && (
//           <p className="text-green-600 mt-2">Message sent successfully!</p>
//         )}
//         {status === "ERROR" && (
//           <p className="text-red-600 mt-2">Something went wrong. Try again.</p>
//         )}
//       </form>
//     </div>
//   );
// }