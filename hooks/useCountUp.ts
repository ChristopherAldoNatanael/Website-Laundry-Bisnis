'use client'

import { useEffect, useState, useRef } from 'react'

interface UseCountUpProps {
  end: number
  duration: number
  suffix?: string
  prefix?: string
  decimals?: number
}

export function useCountUp({ end, duration, suffix = '', prefix = '', decimals = 0 }: UseCountUpProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isVisible) {
        setIsVisible(true)
      }
    })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationId: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / (duration * 1000), 1)
      
      const currentCount = Math.floor(progress * end)
      setCount(currentCount)

      if (progress < 1) {
        animationId = requestAnimationFrame(animate)
      }
    }

    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [isVisible, end, duration])

  const formatted = count.toLocaleString('id-ID', {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  })

  return {
    count,
    displayText: `${prefix}${formatted}${suffix}`,
    ref,
  }
}
