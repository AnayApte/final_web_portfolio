const URL_REGEX = /https?:\/\/[^\s]+/g

export default function Linkify({ text }: { text: string }) {
  const parts = text.split(URL_REGEX)
  const urls = text.match(URL_REGEX) ?? []

  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {urls[i] && (
            <a
              href={urls[i]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1DB954] hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              {urls[i]}
            </a>
          )}
        </span>
      ))}
    </>
  )
}
