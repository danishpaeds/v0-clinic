import { Phone } from "lucide-react"

interface InlineCallButtonProps {
  variant?: "primary" | "secondary" | "outline"
  className?: string
  text?: string
}

export function InlineCallButton({ variant = "primary", className = "", text = "Call Now" }: InlineCallButtonProps) {
  const baseClasses =
    "inline-flex items-center gap-2 px-4 py-2.5 md:px-6 md:py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl text-sm md:text-base"

  const variantClasses = {
    primary: "bg-gradient-to-r from-[#47145a] to-[#eb9142] text-white hover:shadow-[0_0_20px_rgba(235,145,66,0.4)]",
    secondary: "bg-white text-[#47145a] border-2 border-[#eb9142] hover:bg-[#eb9142] hover:text-white",
    outline: "border-2 border-white text-white hover:bg-white hover:text-[#47145a]",
  }

  return (
    <a href="tel:+919820086575" className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      <Phone className="w-4 h-4 md:w-5 md:h-5" />
      {text}
    </a>
  )
}
