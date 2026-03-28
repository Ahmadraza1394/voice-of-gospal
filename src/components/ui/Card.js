import { cn } from '@/lib/utils'

export default function Card({ children, className }) {
  return (
    <div className={cn('card-bg p-6', className)}>
      {children}
    </div>
  )
}
