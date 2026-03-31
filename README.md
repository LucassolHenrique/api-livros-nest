ARQUITETURA LIMPA E DOMAIN-DRIVEN DESIGN: UMA ABORDAGEM PRÁTICA COM 
NESTJS
Autor: Lucas Sol Heneique Jacques de Oliveira
Professor: Prof. Luís Henrique Ries
Unidade: Unisenac
Curso: Análise e Desenvolvimento de Sistemas
Disciplina: Frameworks Web
Data: 30 de Março de 2026
INTRODUÇÃO
Uma pergunta constante na indústria de software é como construir aplicações que 
permaneçam mantíveis e fáceis de evoluir ao longo do tempo. À medida que os 
projetos crescem, a organização inadequada do código torna-se um problema sério. 
Neste artigo, apresentam-se duas abordagens que auxiliam na resolução desse 
problema: a Arquitetura Limpa e o Domain-Driven Design (DDD). A Arquitetura Limpa 
oferece uma forma de organizar o código de maneira independente de tecnologias 
específicas. O DDD, por sua vez, foca em compreender profundamente as regras de 
negócio e refleti-las no código. Ambas as abordagens se complementam e podem ser 
aplicadas em projetos utilizando o framework NestJS para criar APIs bem estruturadas 
e de fácil manutenção.
FUNDAMENTAÇÃO TEÓRICA
A ideia principal da Arquitetura Limpa é isolar a lógica de negócio dos detalhes 
técnicos, como bancos de dados e frameworks. Em uma abordagem tradicional em 
camadas (Layered Architecture), cada camada depende da anterior, criando um forte 
acoplamento vertical. Se houver a necessidade de trocar o banco de dados, toda a 
pilha de código acima é afetada. Em contrapartida, na Arquitetura Limpa, as 
dependências apontam sempre para o centro do código (a lógica de negócio). Isso 
garante que ferramentas e tecnologias dependam da lógica, e não o inverso, 
permitindo mudanças com impacto mínimo.
Existem diferentes tipos e implementações dessa arquitetura:
- Arquitetura Concêntrica: Organiza o código em camadas circulares, com o negócio 
no centro e tecnologias na periferia.
- Arquitetura Hexagonal (Ports and Adapters): Baseia-se em um núcleo central cercado 
por portas (interfaces) e adaptadores que realizam a conexão com tecnologias 
externas.
- Vertical Slice Architecture: Foca em dividir o sistema por funcionalidades (features), 
onde cada uma possui suas próprias camadas, reduzindo dependências globais.
Enquanto a Arquitetura Limpa responde "como organizar", o Domain-Driven Design 
(DDD) responde "o que colocar dentro dessa organização". Proposto por Eric Evans, o 
DDD defende que o design do software deve iniciar com uma compreensão profunda 
do negócio. Desenvolvedores e especialistas (domain experts) criam uma Linguagem 
Ubíqua (Ubiquitous Language), garantindo que os termos usados no negócio sejam os 
mesmos escritos no código. O DDD também introduz padrões vitais: Entities (objetos 
com identidade única), Value Objects (objetos imutáveis sem identidade própria, como 
Preço), Aggregates (agrupamentos consistentes de entidades) e Domain Services 
(lógicas complexas que não pertencem a uma entidade específica).
FUNCIONAMENTO
O funcionamento conjunto dessas abordagens divide o sistema em camadas de 
responsabilidade bem definidas. A camada de Domain contém as regras de negócio 
puras, sem detalhes técnicos. A camada de Application (casos de uso) orquestra o 
fluxo de dados. A camada de Infrastructure lida com banco de dados, enquanto a 
Presentation fornece a interface HTTP (Controllers). A regra de ouro é: camadas 
internas nunca dependem de camadas externas.
Vantagens: O conhecimento do negócio fica centralizado. A lógica pode ser testada de 
forma rápida e pura, sem necessidade de banco de dados ou requisições HTTP. 
Mudanças tecnológicas (como trocar PostgreSQL por MongoDB) ocorrem sem afetar 
as regras de negócio.
Desvantagens: Exige mais escrita de código e introduz mais abstrações. Um simples 
CRUD que levaria 50 linhas em um modelo tradicional pode levar 500 linhas devido à 
separação rigorosa de camadas.
APLICAÇÃO
Para demonstrar os conceitos apresentados, foi desenvolvida uma API REST simples em 
NestJS que realiza um CRUD de Produtos armazenados em memória. A estrutura separa 
responsabilidades em três partes principais:

Product Entity: Classe simples que representa um Produto com as propriedades id, 
nome e preco. Esta é a entidade de domínio que contém os dados.

ProductsService: Classe responsável pela lógica de negócio. Gerencia os produtos 
em um array em memória e implementa os métodos: create (criar), findAll (listar), 
findOne (buscar por id), update (atualizar) e delete (deletar). O serviço 
centraliza toda a lógica, mantendo o controlador simples.

ProductsController: Recebe as requisições HTTP na rota /products e delega para o 
serviço. Define os endpoints: POST (criar), GET (listar), GET/:id (buscar um), 
PUT/:id (atualizar) e DELETE/:id (deletar). O controlador não contém lógica de 
negócio, apenas orquestra.

A injeção de dependência do NestJS conecta o Controller ao Service automaticamente. 
Esta estrutura simples demonstra os princípios de Arquitetura Limpa: separação de 
responsabilidades, lógica centralizada no serviço, e facilidade para testar.
DISCUSSÃO
A aplicação prática da Arquitetura Limpa evidencia o seu valor na organização e 
testabilidade do código. Fica claro onde realizar manutenções quando os requisitos 
mudam. No entanto, conclui-se que nem toda aplicação necessita dessa 
complexidade. Para projetos simples, como protótipos rápidos ou CRUDs básicos sem 
lógica complexa, essa estrutura é excessiva (overkill). Em contrapartida, para sistemas 
que evoluem continuamente, que possuem lógica de negócios rica (típico do uso de 
DDD) ou que serão mantidos por múltiplas equipes ao longo de anos, a Arquitetura 
Limpa economiza semanas de refatoração no futuro. O papel do desenvolvedor é 
avaliar pragmáticamente qual nível de estrutura faz sentido para cada cenário.
CONCLUSÃO
Construir um software mantível requer uma estrutura clara e uma mentalidade 
orientada ao negócio. A Arquitetura Limpa, ao isolar o domínio das tecnologias 
periféricas, combinada ao DDD, gera um código legível, testável e flexível a mudanças 
tecnológicas. Embora demande um investimento inicial maior na estruturação, os 
benefícios tornam-se indispensáveis à medida que o projeto ganha escala. O domínio 
profundo desses conceitos capacita equipes a focarem no que realmente importa: 
resolver os problemas do negócio através de um código de alta qualidade.
REFERÊNCIAS
FOWLER, Martin. Microservices Patterns. Addison-Wesley Professional, 2018.
FEATHERS, Michael C. Working Effectively with Legacy Code. Prentice Hall, 2004.
COCKBURN, Alistair. Hexagonal Architecture. Disponível em: 
https://alistair.cockburn.us/hexagonal-architecture/. Acesso em: 30 mar. 2026.
NEWMAN, Sam. Building Microservices: Designing Fine-Grained Systems. O'Reilly 
Media, 2015.
MICROSOFT. Architecture and design patterns. Disponível em: 
https://docs.microsoft.com/en-us/dotnet/architecture/. Acesso em: 30 mar. 2026.
NEST.JS Documentation. Disponível em: https://docs.nestjs.com. Acesso em: 30 mar. 
2026.
-----
Fim do Artigo
Data de Conclusão: 30/03/202