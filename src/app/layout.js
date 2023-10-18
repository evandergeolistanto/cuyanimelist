import Navbar from '../components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Harati Anime List',
  description: 'Welcome to MyAnimeList, the world’s most active online anime and manga community and database. Join the online community, create your anime and manga list',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressContentEditableWarning={true}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
