import BrowseTile from '@/components/ui/BrowseTile'

const tiles = [
  {
    href: '/experience',
    label: 'Experience',
    color: '#E91429',
    icon: (
      <svg viewBox="0 0 24 24" fill="rgba(0,0,0,0.3)" className="w-20 h-20">
        <path d="M20 6h-2.18c.07-.44.18-.86.18-1.3C18 2.57 15.43 0 12.3 0c-1.7 0-3.2.79-4.19 2.01L12 6.4l3.89-4.39C16.64 1.38 17.44 1 18.3 1c1.51 0 2.7 1.19 2.7 2.7 0 .46-.1.9-.28 1.3H20c.55 0 1 .45 1 1v2H3V5c0-.55.45-1 1-1h2.18C6.1 3.6 6 3.16 6 2.7 6 1.19 7.19 0 8.7 0c.86 0 1.66.38 2.21 1.01L7.02 5.4 4.89 4.01A2.69 2.69 0 013.7 2.7C3.7 1.19 4.89 0 6.4 0c.86 0 1.66.38 2.21 1.01M3 9v11c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9H3z"/>
      </svg>
    ),
  },
  {
    href: '/skills',
    label: 'Skills',
    color: '#2D46B9',
    icon: (
      <svg viewBox="0 0 24 24" fill="rgba(0,0,0,0.3)" className="w-20 h-20">
        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
      </svg>
    ),
  },
  {
    href: '/awards',
    label: 'Awards',
    color: '#DC148C',
    icon: (
      <svg viewBox="0 0 24 24" fill="rgba(0,0,0,0.3)" className="w-20 h-20">
        <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/>
      </svg>
    ),
  },
  {
    href: '/resume',
    label: 'Resume',
    color: '#8D67AB',
    icon: (
      <svg viewBox="0 0 24 24" fill="rgba(0,0,0,0.3)" className="w-20 h-20">
        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
      </svg>
    ),
  },
]

export default function HomePage() {
  return (
    <div className="px-8 py-8">
      <h1 className="text-white font-bold text-3xl mb-6">Browse all</h1>
      <div className="grid grid-cols-2 gap-4 max-w-2xl">
        {tiles.map((tile) => (
          <BrowseTile
            key={tile.href}
            href={tile.href}
            label={tile.label}
            color={tile.color}
            icon={tile.icon}
          />
        ))}
      </div>
    </div>
  )
}
