Criar o esqueleto da página(maior parte do visual inicial feito utilizando IA e futaramente farei ajustes para seguir o layout do arquivo de referência) e em seguida realizar conexão com a API.
Criar um componente Feed.jsx para exibir as informações da primeira página da API
Criar um componente Materia.jsx e o CSS Materia.css para exbir as noticias do tipo matéria(a princípio está exibindo todos os tipos materia, video e materia agrupada) e deixar o Feed.jsx pra distribuir as noticias entre video e matéria.
Criar um componente Video.jsx para exibir as noticías de video.(estou utilizando o css de Materia.css pois o formato de exibir é semelhante -Talvez separe no futuro-)
Fiz o Feed.jsx distribuira notícias do tipo matéria para Materia.jsx e video para Video.jsx.
Criado a componente MateriaAgrupada.jsx e o CSS MateriaAgrupada.css para receber e exibir as notícias do tipo agrupador materia em App.jsx.
Ajustado o layout para exbir o agrupador de materia(MateriaAgrupada.jsx) a direita do Feed.jsx em App.css.
Criar um compenente VideoModal.jsx para exibir o modal do video ao clicar na notícias.
Foi instalada a biblioteca "react-modal" para facilitar a criação do modal de video.
O modal de video não fecha ao clicar no botão de fechar, clicar do lado de fora e ao apertar ESC sem ter clicado no video do modal, mesmo executando a função 'closeModal()'(consertar depois).
Ajustes na página para seguir o layout do arquivo referencia (Navbar.css,Materia.css,MateriAgrupada.css, App.css e VideoModal.css) e adição de responsividade para Smartphones.
Adição do botão Ver mais para expandir o feed de notícias e exibir o conteúdo das outras páginas da API em sequências.
Ao adicionar a funcionalidade de adicionar uma array em outra array fez o conteúdo da primeira página da API ser exibida 2 vezes pois o StrictMode executa o useEffect duas vezes ao abrir a página(Corrigido ao remover o StrictMode).
Ao passar da ultima página da API o sistema quebrava(Corrigido adicionando uma condição de verificar se o 'data' estava devolvendo uma 'message', e nesse caso o botão "Ver Mais"  será removido e o sistema não executa a função setPage para atualizar o 'page').
Criar o componente Anuncio.jsx para exibir anúncios no feed(Feed.jsx) a cada 8 notícias.
Remoção da Url da API do código do projeto e transferida para uma variável de ambiente.
Ajustes de CSS e reparo da função fechar do VideoModal.jsx.
Função fechar corrigida ao mover o componente VideoModal.jsx para fora da zona clicável.
