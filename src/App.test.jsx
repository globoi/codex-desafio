import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

// Mocks dos componentes internos
vi.mock('./Navbar', () => ({
  default: () => <nav data-testid="navbar">Navbar</nav>
}));

vi.mock('./NoticiaDestaque', () => ({
  default: ({ noticia }) => (
    <div data-testid="noticia-destaque">
      {noticia ? noticia.title : 'Sem destaque'}
    </div>
  )
}));

vi.mock('./Feed', () => ({
  default: ({ noticias, error }) =>
    error
      ? <div role="alert">Erro: {error}</div>
      : (
        <ul data-testid="feed">
          {noticias.map((n, i) => <li key={i}>{n.title}</li>)}
        </ul>
      )
}));

vi.mock('./MateriaAgrupada', () => ({
  default: ({ noticias }) => (
    <div data-testid="agrupadas">{noticias.length} agrupadas</div>
  )
}));

const mockNoticias = [
  {
    type: 'materia',
    title: 'Notícia Destaque',
    video: null
  },
  {
    type: 'materia',
    title: 'Outra matéria',
    video: null
  },
  {
    type: 'agrupador-materia',
    header: 'Agrupador',
    group: [],
    footer: { label: 'Veja mais', url: '#' }
  }
];

describe('<App />', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn());
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renderiza o componente com dados da API', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockNoticias)
    });

    render(<App />);

    expect(screen.getByTestId('navbar')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByTestId('noticia-destaque')).toHaveTextContent('Notícia Destaque');
      expect(screen.getByTestId('feed')).toBeInTheDocument();
      expect(screen.getByTestId('agrupadas')).toHaveTextContent('1 agrupadas');
    });

    expect(screen.getByRole('button', { name: /ver mais/i })).toBeInTheDocument();
  });

  it('exibe erro quando a API falha', async () => {
    fetch.mockRejectedValueOnce(new Error('Erro ao buscar'));

    render(<App />);

    await waitFor(() => {
      expect(screen.getByRole('alert')).toHaveTextContent(/erro ao buscar/i);
    });
  });
});