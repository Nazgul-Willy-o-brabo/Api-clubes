# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Após várias pesquisas com universitários, houve diversas reclamações e sugestões sobre a dificuldade de socializar com os novos colegas de turma. Baseado nisso, foi dado inicio a um projeto que seria desenvolvido um sistema para criações de comunidades baseadas nos interesses pessoais de cada um. 
O projeto tem a finalidade de criar um sistema de clubes para universitários, a fim de desenvolver suas habilidades socioemocionais através de seu ingresso no clube ou até mesmo na criação de seu próprio clube. Assim o estudante tem mais facilidade em encontrar pessoas com as mesmas aptidões. Dentro da aplicação, será possivel organizar eventos, competições e dentre outras funções acadêmicas ou recreativas. Além disso, os integrantes poderão ter acesso á uma newsletter semanal na qual ficarão sabendo a respeito de tudo que se passa entre seus clubes. 

## Personas

Persona 1# - Rodolfo é um jovem de 19 anos que acaba de concluir o ensino médio e decidiu ingressar em uma universidade. Ele está em busca de aprimorar as suas habilidades nas áreas em que tem aptidão. Ele é um cara tímido e muito introspectivo e sente ansiedade em falar com as pessoas, por ter medo de não ser aceito.
Com o site de gerenciamento de clubes ele pode encontrar diversas pessoas com os mesmos interesses que os seus, e esta interação pode impulsioná-lo a atingir seus objetivos pessoais e profissionais, além de ajudá-lo á superar suas dificuldades em se comunicar. 

Persona 2# - Lyncon é um universitario de 30 anos, solteiro e com poucos amigos, sentia uma necessidade de enturmar com atletas amadores para poder praticar algum esporte, buscando uma forma de melhorar sua vida pessoal e profissional, ele então fica na expectativa de resolver seus problemas ao anunciarem uma nova
aplicação que gerencia a criação de clubes universitários.

Persona 3# - Pedro Henrique é um professor universitário mestrado em engenharia. Ingressou como professor na universidade Puc ao seus 30 anos.
Após a proposta do projeto ser divulgada, Pedro ficou muito interessado, pois o mesmo poderia fazer algo mais intiutivo a seus alunos e motivá-los a 
estudar e praticar sua matéria, com a ideia de fazer seus alunos criarem um clube de robótica para poderem se desenvolver de forma intuitiva, e podendo participar
de competições entre outras turmas ou até contra outras universidades.



## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO | QUERO/PRECISO  |PARA                 |
|--------------------|------------------------------------|----------------------------------------|
| Lyncon Marques | Preciso me incluir em um clube de acordo com minhas aptidões                                                             | Criar um networking               |
|Administrador       | Criar uma funcionalidade que facilite o acesso do usuário a encontrar clubes                 | Eficiência e maior usabilidade do usuário 
|Pedro Henrique   | Preciso encontrar clubes                                                             | Me ingressar em um...              |
|Administrador       | Criar uma funcionalidade que faça uma barra de busca                | Filtrar palavras-chaves para facilitar a busca por clubes |
|Pedro Henrique   | Participar de eventos relacionados ao clube                                                            | socializar com novas pessoas             |
|Administrador       | Criar uma funcionalidade para ajudar o usuário a marcar e encontrar eventos              | Satisfazer as necessicidades dos usuários |
|Rodolfo  | Me socializar e conhecer novas pessoas           | Conhecer e aprender novos costumes e ideias               |
|Administrador       | Permitir com que usuário experencia novas oportunidades de encontrar pessoas e trocar ideias                 | Desenvolver o lado pessoal, social e melhorar o lado acadêmico |
|Rodolfo  | Desejo cadastrar em um clube           | Entrar em um meio onde posso compartilhar e aprender novas ideias                |
|Lyncon Marques  | Participar de eventos relacionados aos esportes e torneios                                                            | ficar por dentro de todos os times que estão vencendo e adquirir novas vitórias             |
|Administrador       | Criar um sistema de ranqueamento para jogos e torneios                 | Permitir modelo de ranqueamento entre os usuários |


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir o usuario a criar um clube | ALTA | 
|RF-002| Permitir o usuario a se cadastrar a um clube  | ALTA |
|RF-003| Flexebilidade na criação de clubes | ALTA |
|RF-004| Organização de campeonatos | MÉDIA | 
|RF-005| Feed de noticias em tempo real | MÉDIA |
|RF-006| Visualizar eventos | BAIXA |
|RF-007| Ingressão a eventos | BAIXA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| Necessidade de servidores capacitados  | MÉDIA | 
|RNF-002| Baixo processamento por acessos simultanêos |  MÉDIA |
|RNF-003| Banco de dados capacitado para inumeros cadastros | ALTO |


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o inicio do ano letivo |
|02| Criação de categoria restritas ao Administrador        |
|03| Layout responsivo |

