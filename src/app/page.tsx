
"use client"
import { FormEvent, useState } from 'react'
import { Numbers } from './components/numbers'
import { NumberInterface } from './types/number.types'

export default function Home() {
  const [numbers, setNumbers] = useState<NumberInterface[]>([])
  const [numberToSet, setNumberToSet] = useState<string>("")
  const [showNumbers, setShowNumbers] = useState<boolean>(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setNumbers(Array.from(Array(parseInt(numberToSet)), (element, index) => {
      return {
        id: index + 1,
        available: true
      }
    }))
    setShowNumbers(!showNumbers)
  }

  const handleReset = (e: FormEvent) => {
    setShowNumbers(false)
  }

  return (
    <>
      {showNumbers ?
        <div className='flex flex-col gap-3'>
          <Numbers numbers={numbers} />
          <button onClick={handleReset} className='bg-blue-200 rounded-md w-[100px] py-1 text-blue-800 mt-3'>Reset</button>
        </div>
        :
        <form className='flex gap-3' onSubmit={handleSubmit}>
          <input required type="number" className="bg-slate-300 rounded-md" onChange={(e) => setNumberToSet(e.target.value)} />
          <button type="submit" className='bg-blue-200 rounded-md px-3 py-1 text-blue-800'>Start</button>
        </form>
      }
    </>
  )
}
