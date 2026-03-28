import { cn } from '@/lib/utils'
import Container from '@/components/layout/Container'

export default function Section({ children, className, containerClassName, fullWidth = false }) {
  const content = fullWidth ? children : <Container className={containerClassName}>{children}</Container>

  return (
    <section className={cn('py-12 md:py-16 lg:py-20', className)}>
      {content}
    </section>
  )
}
