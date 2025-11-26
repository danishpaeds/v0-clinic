"use client"

import { lazy, Suspense } from "react"
import type { ReactNode } from "react"

const StaticWrapper = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={className}>{children}</div>
)

const MotionDiv = lazy(() => import("framer-motion").then((mod) => ({ default: mod.motion.div })))

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function AnimatedSection({ children, className = "", delay = 0 }: AnimatedSectionProps) {
  return (
    <Suspense fallback={<StaticWrapper className={className}>{children}</StaticWrapper>}>
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px", amount: 0.3 }}
        transition={{
          duration: 0.35,
          delay: delay,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className={className}
      >
        {children}
      </MotionDiv>
    </Suspense>
  )
}

export function AnimatedCard({ children, className = "", delay = 0 }: AnimatedSectionProps) {
  return (
    <Suspense fallback={<StaticWrapper className={className}>{children}</StaticWrapper>}>
      <MotionDiv
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-50px", amount: 0.3 }}
        transition={{
          duration: 0.3,
          delay: delay,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        whileHover={{ y: -4, scale: 1.01 }}
        className={className}
      >
        {children}
      </MotionDiv>
    </Suspense>
  )
}

export function FadeIn({ children, className = "", delay = 0 }: AnimatedSectionProps) {
  return (
    <Suspense fallback={<StaticWrapper className={className}>{children}</StaticWrapper>}>
      <MotionDiv
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.35, delay: delay }}
        className={className}
      >
        {children}
      </MotionDiv>
    </Suspense>
  )
}

export function ScaleIn({ children, className = "", delay = 0 }: AnimatedSectionProps) {
  return (
    <Suspense fallback={<StaticWrapper className={className}>{children}</StaticWrapper>}>
      <MotionDiv
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.3,
          delay: delay,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className={className}
      >
        {children}
      </MotionDiv>
    </Suspense>
  )
}

export function SlideInLeft({ children, className = "", delay = 0 }: AnimatedSectionProps) {
  return (
    <Suspense fallback={<StaticWrapper className={className}>{children}</StaticWrapper>}>
      <MotionDiv
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px", amount: 0.3 }}
        transition={{
          duration: 0.35,
          delay: delay,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className={className}
      >
        {children}
      </MotionDiv>
    </Suspense>
  )
}

export function SlideInRight({ children, className = "", delay = 0 }: AnimatedSectionProps) {
  return (
    <Suspense fallback={<StaticWrapper className={className}>{children}</StaticWrapper>}>
      <MotionDiv
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px", amount: 0.3 }}
        transition={{
          duration: 0.35,
          delay: delay,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className={className}
      >
        {children}
      </MotionDiv>
    </Suspense>
  )
}
