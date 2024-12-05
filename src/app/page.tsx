'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Brain, CheckCircle2, XCircle } from 'lucide-react'

const riddles = [
  { question: "I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?", answer: "echo" },
  { question: "What has keys, but no locks; space, but no room; you can enter, but not go in?", answer: "keyboard" },
  { question: "What has a head and a tail that are only made of gold?", answer: "coin" },
  { question: "What has words, but never speaks?", answer: "book" },
  { question: "What has a thumb and four fingers, but is not alive?", answer: "glove" }
]

export default function RiddleGame() {
  const [currentRiddle, setCurrentRiddle] = useState(0)
  const [userAnswer, setUserAnswer] = useState('')
  const [feedback, setFeedback] = useState('')
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setProgress((currentRiddle / riddles.length) * 100)
  }, [currentRiddle])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (userAnswer.toLowerCase().trim() === riddles[currentRiddle].answer) {
      setIsCorrect(true)
      if (currentRiddle < riddles.length - 1) {
        setFeedback('Correct! Here\'s the next riddle.')
        setTimeout(() => {
          setCurrentRiddle(currentRiddle + 1)
          setIsCorrect(null)
        }, 1500)
      } else {
        setFeedback('Congratulations! You\'ve solved all the riddles!')
      }
    } else {
      setIsCorrect(false)
      setFeedback('Sorry, that\'s not correct. Try again!')
    }
    setUserAnswer('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center flex items-center justify-center gap-2">
            <Brain className="w-8 h-8" />
            Riddle Me This
          </CardTitle>
          <CardDescription className="text-center">Solve the riddles to win!</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Progress value={progress} className="w-full" />
            <p className="text-center text-sm mt-2">
              {currentRiddle + 1} of {riddles.length} riddles
            </p>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentRiddle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="mb-6"
            >
              <p className="text-lg font-medium text-center min-h-[4rem]">
                {riddles[currentRiddle].question}
              </p>
            </motion.div>
          </AnimatePresence>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <Input
                type="text"
                placeholder="Your answer"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                className="w-full"
              />
              <Button type="submit" className="w-full">Submit Answer</Button>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <AnimatePresence mode="wait">
            {feedback && (
              <motion.p
                key={feedback}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="w-full text-center font-medium flex items-center justify-center gap-2"
              >
                {isCorrect === true && <CheckCircle2 className="w-5 h-5 text-green-500" />}
                {isCorrect === false && <XCircle className="w-5 h-5 text-red-500" />}
                {feedback}
              </motion.p>
            )}
          </AnimatePresence>
        </CardFooter>
      </Card>
    </div>
  )
}

