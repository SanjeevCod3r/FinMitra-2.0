import { useState, useEffect } from 'react'

function IndiaTime() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const getIndiaTime = () => {
    const options = {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    }
    return time.toLocaleTimeString('en-IN', options)
  }

  return (
    <div className="d-flex align-items-center">
      <i className="fas fa-clock text-primary me-2"></i>
      <div className="text-muted small">
        {getIndiaTime()}
      </div>
    </div>
  )
}

export default IndiaTime
