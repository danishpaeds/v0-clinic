"use client"

import { Phone } from "lucide-react"
import { motion } from "framer-motion"

export function FloatingCallButton() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
      className="fixed bottom-4 left-4 z-50 md:bottom-8 md:left-8"
    >
      <a
        href="tel:+918591186575"
        className="group flex items-center justify-center bg-gradient-to-r from-[#47145a] to-[#eb9142] text-white w-12 h-12 md:w-14 md:h-14 rounded-full shadow-2xl hover:shadow-[0_0_30px_rgba(235,145,66,0.6)] transition-all duration-300 hover:scale-110 opacity-80 hover:opacity-95 backdrop-blur-md"
        aria-label="Call Dr Vrushni Bhuta"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut" }}
          className="relative"
        >
          <Phone className="w-5 h-5 md:w-6 md:h-6" />
          <span className="absolute -top-1 -right-1 w-2 h-2 md:w-2.5 md:h-2.5 bg-green-400 rounded-full animate-pulse" />
        </motion.div>
      </a>
    </motion.div>
  )
}
