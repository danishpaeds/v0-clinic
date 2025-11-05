"use client"

import { MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

export function FloatingWhatsApp() {
  const phoneNumber = "919820086575"
  const message = encodeURIComponent(
    "Hello, I would like to book a consultation at Dr. Vrushni's Women's Care & Fertility Clinic.",
  )
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366]/80 text-white shadow-lg backdrop-blur-md transition-all hover:scale-110 hover:bg-[#25D366]/90 hover:shadow-xl md:bottom-8 md:right-8 md:h-16 md:w-16 md:bg-[#25D366]"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Contact us on WhatsApp"
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
        }}
      >
        <MessageCircle className="h-6 w-6 md:h-8 md:w-8" />
      </motion.div>

      {/* Pulse effect */}
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-20" />
    </motion.a>
  )
}
