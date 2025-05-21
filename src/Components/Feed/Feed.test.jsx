import { render, screen } from '@testing-library/react';
import Feed from './Feed';

// Mocks dos componentes usados no Feed
vi.mock('../Materia/Materia', () => ({
  default: (props) => <li data-testid="materia">{props.noticia.title}</li>
}));

vi.mock('../Video/Video', () => ({
  default: (props) => <li data-testid="video">{props.noticia.title}</li>
}));

vi.mock('../Anuncio/Anuncio', () => ({
  default: () => <li data-testid="anuncio">Anúncio</li>
}));

const mockNoticias = Array.from({ length: 10 }, (_, i) => ({
  title: `Notícia ${i + 1}`,
  section: 'Notícias',
  summary: 'Resumo da notícia',
  url: `/noticia-${i + 1}`,
  image: `img${i + 1}.jpg`,
  video: i % 2 === 0 ? null : { url: `video${i + 1}.mp4` }, // alternando entre Materia e Video
}));

describe('Feed', () => {
  it('renderiza corretamente as notícias como Materia e Video', () => {
    render(<Feed noticias={mockNoticias} />);

    // Deve renderizar 5 Materia e 5 Video
    expect(screen.getAllByTestId('materia')).toHaveLength(5);
    expect(screen.getAllByTestId('video')).toHaveLength(5);
  });

  it('renderiza um Anuncio após cada 8 notícias', () => {
    render(<Feed noticias={mockNoticias} />);
    expect(screen.getAllByTestId('anuncio')).toHaveLength(1);
  });

  it('exibe mensagem de carregando quando não há notícias', () => {
    render(<Feed noticias={[]} />);
    expect(screen.getByText(/carregando notícias/i)).toBeInTheDocument();
  });

  it('exibe mensagem de erro quando presente', () => {
    render(<Feed noticias={[]} error="Erro de conexão" />);
    expect(screen.getByText(/erro: erro de conexão/i)).toBeInTheDocument();
  });
});