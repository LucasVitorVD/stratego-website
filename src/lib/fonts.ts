import { Inter, Montserrat, Montserrat_Alternates } from 'next/font/google'

const inter = Inter({
  subsets: ["latin"]
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat"
})

const montserrat_alternates = Montserrat_Alternates({ 
  weight: ["200", "300", "500", "700"],
  variable: "--font-montserrat-alt",
  subsets: ["latin"] 
})

export {
  inter,
  montserrat,
  montserrat_alternates
}