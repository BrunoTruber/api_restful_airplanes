# API RESTful - Airplanes
<img src="https://viagemeturismo.abril.com.br/wp-content/uploads/2017/08/istock-155439315.jpg?quality=70&strip=info&resize=680,453" />

> API criada para estudar conceitos de back-end, utilizando a linguagem de programação JavaScript e o banco de dados MongoDB. Nessa API eu crio um CRUD completo com aviões das principais fabricantes.

Para utilizar o projeto faça o dowload do arquivo zip, ou faça o clone em seu computador utilizando o Git. Execute o comando `npm i` dentro da pasta do projeto em seu computador(a pasta que contém o arquivo package.json), para baixar as dependencias do projeto.

## Executando o projeto

*Essa API utiliza o mongodb como banco de dados e o mongoose como ODM, então antes de testar a API certifique se você possui o MongoDb instalado em seu computador(https://www.mongodb.com/try/download/community).*

Além disso, você precisa criar o arquivo .env com a url do seu banco, *utilize o arquivo .env.exemple para criar o seu*. Esse é um exemplo de string de conexão com o banco de dados: mongodb://localhost:27017/db_airplanes.

Agora você pode executar o projeto: 
* Para executar o projeto com o nodemon, digite no terminal: 
```bash
npm run dev
```
* Para executar o projeto com o node, digite no terminal: 
```bash
npm start
```
## Testando a API

Você pode utilizar as ferramentas:

* Postman
* Insomnia
* Thunder Client (plugin no vsCode)

Exemplos de URLs: 
* Essa é a URL de teste padrão: http://localhost:3000/airplanes
* Para buscar por ID, Editar ou Apagar, insira o ID na URL: http://localhost:3000/airplanes/5
* Para fazer uma busca com query string, esse é um exemplo de URL: http://localhost:3000/airplanes/filter?velocidademax=875


Essa é a estrutura JSON para fazer o POST e o PUT:

```json
{
	"nome": "Airbus A320",
	"velocidademax": "875 km/h",
	"preco": "US$ 101.000.000,00",
	"imagem": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Jetstar_Airbus_A320_in_flight_%286768081241%29_crop.jpg"
}
```
