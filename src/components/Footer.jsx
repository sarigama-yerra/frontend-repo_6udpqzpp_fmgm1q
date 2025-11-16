export default function Footer() {
  return (
    <footer className="bg-[#06122a] py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} Engineering Portfolio — Crafted with precision.</p>
          <div className="flex gap-4 text-white/70">
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">GitHub</a>
            <a href="#" className="hover:text-white">Email</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
