// Pages/Layout.jsx
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Commun/Navbar'
import Footer from '../components/Commun/Footer'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-darkBg text-textPrimary">
      <Navbar />

      <main className="flex-1 px-6 py-10">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
