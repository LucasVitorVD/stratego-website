interface Props {
  children: React.ReactNode
}

export default function SectionWrapper({ children }: Props) {
  return (
    <section>
      {children}
    </section>
  )
}