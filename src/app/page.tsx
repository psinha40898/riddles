'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sparkles } from 'lucide-react'
import Image from 'next/image'

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 to-purple-950 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Floating orbs */}
      <motion.div
        className="absolute w-24 h-24 rounded-full bg-blue-400/20 blur-xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: "20%", left: "20%" }}
      />
      <motion.div
        className="absolute w-32 h-32 rounded-full bg-purple-400/20 blur-xl"
        animate={{
          x: [0, -70, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: "60%", right: "20%" }}
      />

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-2xl mx-auto text-center"
      >
        <motion.div
          className="mb-8 relative"
          animate={{ rotate: [0, 1, -1, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <motion.div
            className="relative w-full max-w-md mx-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="/nvwioMP.png"
              alt="Magical Coming Soon"
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-purple-200/80 text-lg mb-8"
        >
          A magical new experience is brewing. Be the first to know when we launch.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto"
        >
          <Input
            type="email"
            placeholder="Enter your email"
            className="bg-purple-900/50 border-purple-700 text-purple-100 placeholder:text-purple-400"
          />
          <Button
            className="group relative px-6 py-2 overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg transition-all duration-300"
          >
            <motion.span
              className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-20"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            />
            <span className="relative flex items-center gap-2">
              Notify Me <Sparkles className="w-4 h-4" />
            </span>
          </Button>
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-1 h-16 bg-gradient-to-b from-purple-500/50 to-transparent" />
      </motion.div>
    </div>
  )
}

