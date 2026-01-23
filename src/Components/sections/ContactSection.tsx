"use client"
import React from "react"
import { Mail, Phone, MapPin } from "lucide-react"

function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 w-full bg-gray-950 text-white py-20 px-6 md:px-16"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-blue-400 mb-4">
          Get In Touch
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Have a project, internship, or opportunity? Let’s talk.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Info */}
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              I’m always open to discussing new projects, internships,
              collaborations, or learning opportunities. Feel free to reach
              out — I’ll get back to you as soon as possible.
            </p>

            <div className="flex items-center gap-4">
              <Mail className="text-blue-400" />
              <span className="text-gray-300">
                your.email@example.com
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-blue-400" />
              <span className="text-gray-300">
                +91 XXXXXXXXXX
              </span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-blue-400" />
              <span className="text-gray-300">
                India
              </span>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg space-y-6">
            <div>
              <label className="block text-sm mb-2 text-gray-300">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-white/10 focus:outline-none focus:border-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-300">
                Email
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-white/10 focus:outline-none focus:border-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-300">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-white/10 focus:outline-none focus:border-blue-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 transition py-3 rounded-lg font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
