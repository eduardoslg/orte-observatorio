import { Container } from './styles'

interface YoutubeEmbedProps {
  embedId: string
}

export function YoutubeEmbed({ embedId }: YoutubeEmbedProps) {
  return (
    <Container>
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </Container>
  )
}
