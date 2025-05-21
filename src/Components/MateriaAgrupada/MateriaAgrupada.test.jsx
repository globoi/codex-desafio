import { render, screen } from '@testing-library/react';
import MateriaAgrupada from './MateriaAgrupada';

const mockNoticias = [
  {
    header: 'Notícia Principal',
    title: 'Título da Imagem',
    image: 'https://via.placeholder.com/150',
    group: [
      {
        content: {
          title: 'Notícia Relacionada 1',
          url: '/noticia-1'
        }
      },
      {
        content: {
          title: 'Notícia Relacionada 2',
          url: '/noticia-2'
        }
      }
    ],
    footer: {
      label: 'Leia mais',
      url: '/leia-mais'
    }
  }
];

describe('MateriaAgrupada', () => {
  it('renderiza corretamente com notícias', () => {
    render(<MateriaAgrupada noticias={mockNoticias} />);

    expect(screen.getByText('Notícia Principal')).toBeInTheDocument();

    expect(screen.getByAltText('Título da Imagem')).toBeInTheDocument();

    expect(screen.getByText('Notícia Relacionada 1')).toBeInTheDocument();
    expect(screen.getByText('Notícia Relacionada 2')).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /leia mais/i })).toHaveAttribute('href', '/leia-mais');
  });

  it('renderiza mensagem de carregamento se não houver notícias', () => {
    render(<MateriaAgrupada noticias={[]} />);
    expect(screen.getByText('Carregando notícias...')).toBeInTheDocument();
  });
});