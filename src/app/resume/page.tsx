export default function ResumePage() {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[60vh] text-center px-8">
      <div className="w-24 h-24 rounded-full bg-[#8D67AB] flex items-center justify-center mb-6">
        <svg viewBox="0 0 24 24" fill="white" className="w-12 h-12">
          <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
        </svg>
      </div>
      <h1 className="text-white font-bold text-3xl mb-3">Resume</h1>
      <p className="text-[#A7A7A7] text-sm mb-6 max-w-sm">
        View or download my latest resume as a PDF.
      </p>
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-black font-bold text-sm px-6 py-3 rounded-full hover:scale-105 transition-transform"
      >
        Open Resume PDF
      </a>
    </div>
  )
}
