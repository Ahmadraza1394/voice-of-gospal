import { cn } from '@/lib/utils'

export default function Heading({ level = 'h2', children, className }) {
  const Tag = level

  const styles = {
    h1: 'text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl',
    h2: 'text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl',
    h3: 'text-2xl font-bold tracking-tight sm:text-3xl',
    h4: 'text-xl font-semibold tracking-tight sm:text-2xl',
    h5: 'text-lg font-semibold tracking-tight sm:text-xl',
    h6: 'text-base font-semibold tracking-tight sm:text-lg',
  }

  return <Tag className={cn(styles[level], className)}>{children}</Tag>
}
