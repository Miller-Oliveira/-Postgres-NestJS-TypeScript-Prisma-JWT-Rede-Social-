
## Description

Bem vindos ao PROJETO 02, você e sua dupla neste projeto irão aplicar os conhecimentos de JWT e Swagger vistos nas ultimas aulas.
O projeto consiste em criar uma API que servirá para controle do Twitter, onde o usurio postará tweets e terá seguidores.
Respeitando o diagrama anexado nessa atividade, os alunos devem desenvolver o schema prisma para montar o banco postgres, toda interação das tabelas é one to many. 
O JWT nesse projeto deve apenas servir de autenticação, ou seja apenas fornecendo um token valido na aplicação.
Em nossos arquivos DTO é necessario que realizemos as validações por meio dos @Decorators.
A documentação dos EndPoints desta vez devem ser feitas no README do github + utilizando o Swagger dentro da aplicação.
Criação do projeto utilizando o NESTJS, um dos melhores frameworks para se trabalhar, ele utiliza Typescript, a linguagem de programação que vamos utilizar e pode ser executado em frameworks HTTP como expressJS ou Fastify. Também utilizando a integração do Prisma e Postgresql.

## Installation

Para iniciar com o NestJS devemos instalar a NestJS CLI de forma global:

```bash
npm i -g @nestjs/cli
```

Crie e abra uma pasta no VSCode onde você deseja que o repositório que vamos criar, fique armazenado. Para criar um novo projeto utilize o seguinte comando e onde está `project-name` mude para o nome do seu projeto.

```basic
nest new project-name
```

Logo após ele vai perguntar qual gerencador de pacotes queremos usar, pode utilizar o da sua preferência, nesse exemplo utilizaremos o `npm`.

Neste momento, foi criado uma nova pasta com o seu projeto, você deve garantir que a pasta que foi criada, esteja aberta no VSCode:

```basic
cd "my-nest-project"
```

Para testar se o seu projeto está rodando, entre com o comando:

```bash
npm run start:dev
```

Ele deverá por padrão em http://localhost:3000

Quando rodamos esse comando, automaticamente o NestJS gera a pasta `dist`, onde contém arquivos `.js`, `.map` e `.d.ts.


## Este Projeto Contém:

​                             `[Postgres+ NestJS + TypeScript + Prisma + JWT]` 

O projeto consiste em criar uma API que servirá para controle do Twitter, onde o usurio postará tweets e terá seguidores.

Respeitando o diagrama, os alunos devem desenvolver o schema prisma para montar o banco postgres, toda interação das tabelas é one to many.

 O JWT nesse projeto deve apenas servir de autenticação, ou seja apenas fornecendo um token valido na aplicação.

 Em nossos arquivos DTO é necessário que realizemos as validações por meio dos @Decorators.

Para este projeto foram criadas 4 pastas distintas dentro da pasta `src` são elas:

- Pasta seguidores.
- Pasta seguindo.
- Pasta tweets.
- Pasta usuario 

Para criação das pastas é necessario rodar o comando `nest g resource-nome da pasta` para criação de  cada uma delas, exemplo:

```javascript
nest g resource usuario
```

Com esse comando havera a criação da pasta no caso (usuario) e dentro dela terá todos os demais arquivos e pastas necessario para rodar o projeto desta pasta.

Rode o mesmo comando para criação das outras três pastas.

## Algumas Validações Importantes

Rode estes dois comandos:

```bash
npm i --save class-validator class-transformer
```

```bash
npm i --save helmet
```

 E faça as alterações necessarias para que seu codigo fique desta maneira:

```javascript
import { ValidationPipe } from '@nestjs/common'; //Para o class-validator funcionar
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet'; // Para o helmet funcionar

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); //Para funcionar o class-validator
  app.use(helmet()); //Para funcionar o helmet
  await app.listen(3000);
}
bootstrap();

```

## Em Geral DTO:

**DTO** ( *Data Transfer Object* ) é usado para analisar e validar os dados da solicitação. DTOs sempre são usados com **controladores** . É um cenário comum quando o servidor da web deve validar os dados antes do processamento. O DTO pode otimizar e automatizar esse processo

## Decoradores para validação

Há um conjunto de decoradores para validação de dados conveniente. Se você tiver necessidades especiais de validação, você sempre pode implementar seu próprio decorador (leia mais em avançado). Mas decoradores personalizados podem ser implementados. Leia em Avançado sobre isso.

​                                               `https://odi.gitbook.io/core/basics/dto`

## Prisma

Para que o prisma podesse ser utilizado instalei as seguintes dependencias:

```bash
npm install prisma --save-dev
```

```basic
npx prisma init
```

```bash
npm install @prisma/client
```

Este comando é para gerar a tabela do schema.prisma no banco do Postgre :

```bash
npx prrisma generate
```

Este é para dar um push na tabela:

```bash
npx prisma db push
```

Este comando é para testar se tudo esta certo e funcionando corretamente no prisma estudio ainda na versão beta:

```
npx prisma studio
```



**Dentro de cada rota temos um CRUD completo criado com os Decorators:**

 `@POst()` 	**Cada uma das rotas principais tem o seu:**

```javascript
 @Post()
  create(@Body() createSeguidoreDto: CreateSeguidoreDto) {
    return this.seguidoresService.createPrisma(createSeguidoreDto);
  }
```

```javascript
@Post()
  create(@Body() createSeguindoDto: CreateSeguindoDto) {
    return this.seguindoService.createPrisma(createSeguindoDto);
  }

```

```javascript
@Post()
  create(@Body() createTweetDto: CreateTweetDto) {
    return this.tweetsService.createPrisma(createTweetDto);
  }
```

```javascript
 @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.create(createUsuarioDto);
  }
```

 `@Patch(':id') ` 	**Cada uma das rotas principais tem o seu:**

```javascript
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSeguidoreDto: UpdateSeguidoreDto) {
    return this.seguidoresService.updatePrisma(+id, updateSeguidoreDto);
  }
```

```javascript
@Patch(':id')
  update(@Param('id') id: string, @Body() updateSeguindoDto: UpdateSeguindoDto) {
    return this.seguindoService.updatePrisma(+id, updateSeguindoDto);
  }
```

```javascript
@Patch(':id')
  update(@Param('id') id: string, @Body() updateTweetDto: UpdateTweetDto) {
    return this.tweetsService.updatePrisma(+id, updateTweetDto);
  }
```

```javascript
@Patch(':id')
  update(@Param('id') id: string, @Body() updateFilmeDto: UpdateUsuarioDto) {
    return this.usuariosService.updatePrisma(+id, updateFilmeDto);
  }
```

`@Delete`()  	**cada rota principal tem o seu:**

```javascript
@Delete(':id')
  remove(@Param('id') id: string) {
    return this.seguidoresService.removePrisma(+id);
  }
```

```javascript
@Delete(':id')
  remove(@Param('id') id: string) {
    return this.seguindoService.removePrisma(+id);
  }
```

```javascript
@Delete(':id')
  remove(@Param('id') id: string) {
    return this.tweetsService.removePrisma(+id);
  }
```

```javascript
@Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuariosService.removePrisma(+id);
  }
```

`@Get `() 	  ***cada rota principal tem o seu:***

```javascript
@Get()
  findAll() {
    return this.seguidoresService.findAllPrisma();
  }
```

```javascript
 @Get()
  findAll() {
    return this.seguindoService.findAllPrisma();
  }
```

```javascript
@Get()
  findAll() {
    return this.tweetsService.findAllPrisma();
  }
```

```javascript
 @Get()
  findAll() {
    return this.usuariosService.findAllPrisma();
  }
```

`@Get(':id')`  ***cada rota principal tem o seu:***

```javascript
@Get(':id')
  findOne(@Param('id') id: string) {
    return this.seguidoresService.findOnePrisma(+id);
  }
```

```javascript
@Get(':id')
  findOne(@Param('id') id: string) {
    return this.seguindoService.findOnePrisma(+id);
  }
```

```javascript
 @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tweetsService.findOnePrisma(+id);
  }
```

```javascript
 @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuariosService.findOnePrisma(+id);
  }
```

**Post  rota** `/usuarios` , **no Thunder:**	

<img src="https://cdn.discordapp.com/attachments/895482892627607602/927026551491547166/post-usuario.png" alt="post-usuario" style="zoom:60%;" />		 

- ​	**Usado para adicionar um usuario no banco de dados local.**
- ​    **Para adicionar um usuario dentro do banco, necessita passar todos os dados com suas devidas informações a seguir no exemplo:( id, createdAt e updatedAt não precisa passar, pois são autoincrement )**

```javascript
  "email":         //String
  "senha":         //String
  "nome":          //String 
  "imagem":        //String?
  "bio":           //String 
  "nascimento":    //String 
```

<img src="https://cdn.discordapp.com/attachments/895482892627607602/927026551105650718/postthamy.png" alt="post-usuario" style="zoom:60%;" />



**Post  rota** `/tweets` , **no Thunder:**

<img src="https://cdn.discordapp.com/attachments/895482892627607602/927026554746314822/tweets.png" alt="tweets" style="zoom:60%;" />			 

- ​	**Usado para postar uma mensagem.**
- ​    **Para adicionar um tweets, necessita passar todos os dados com suas devidas informações a seguir no exemplo:**

```javascript
  "texto":         //String
  "emoji":         //String? 
  "curtidas":      //Number
  "usuarioid":     //Number 
```

![tweetsp](https://cdn.discordapp.com/attachments/895482892627607602/927026554939265074/tweetsp.png)

**Post  rota** `/seguidores` , **no Thunder:**

![seguidores](https://cdn.discordapp.com/attachments/895482892627607602/927026552737259570/seguidores.png)		 

- ​	**Usado para adicionar um seguidor ao usuario ja existente no banco.**
- ​    **Para adicionar um seguidor, necessita passar o ID do usuario ja existente exemplo:**

```javascript
 "usuarioid": 3,           //Number
```

![seguidoresp](https://cdn.discordapp.com/attachments/895482892627607602/927026553035046913/seguidoresp.png)

**Post  rota** `/seguindo` , **no Thunder:**	

![seguindo](https://cdn.discordapp.com/attachments/895482892627607602/927026553240571935/seguindo.png)		 

- ​	**Usado para informar quem o usuario esta seguindo** 
- ​    **Para adicionar quem o usuario esta seguindo, necessita passar o ID do usuario ja existente, exemplo:**

```javascript
 "usuarioid": 3,           //Number
```

![seguindop](https://cdn.discordapp.com/attachments/895482892627607602/927026553462874132/seguindop.png)

* **Todos os `id` são autoincrement (criado sozinho, não precisa passar)**



## JWT

Para que o jwt possa ser iniciado, fazer a criação manual da pasta `auth` dentro de `src`.

Este comando cria uma nova pasta e dentro dela, o novo AuthModule. Além disso, este módulo é importado por padrão no AppModule.

```bash
nest g m auth
```

Este comando cria a classe AuthService e fornece automaticamente este serviço dentro do AuthModule.

```bash
nest g s auth
```

Este comando cria a classe AuthController e a adiciona automaticamente à propriedade dos controladores no AuthModule.

```bash
nest g c auth
```

A aplicação agora está pronta para registrar usuários e autenticá-los com o JWT.



## SWAGGER

O Swagger é uma ferramenta que facilita os testes de sua api.

Para começar a implementar ele em sua api, tem de usar:

```bash
npm install --save @nestjs/swagger swagger-ui-express
```

Após isso, abra a pasta `main.ts` e adicione as seguintes informações:

```bash
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Api')
    .setDescription('Api')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);  // -> Esse "api" é o nome que será passado na url para usar o swagger.

  await app.listen(3000);
}
bootstrap();
```

Após isso, apenas inicie seu projeto, utilizando:

```bash
npm run start:dev
```

Assim que for iniciada a sua api, basta entrar em `http://localhost:3000/api/` -> o "api" é configurado no `main.ts` caso queria mudar basta alterar onde foi passado logo a cima.

```bash
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Api')
    .setDescription('Api')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);  // -> Esse "api" é o nome que será passado na url para usar o swagger.

  await app.listen(3000);
}
bootstrap();
```

<img src="https://cdn.discordapp.com/attachments/478608140993167360/926939969661042749/unknown.png" alt="swagger" style="zoom:60%;" />		

Caso fique assim, tudo pronto, seu swagger está rodando perfeitamente!!

Módulo 4 - Backend- Blue EdTech Miller Oliveira Santos