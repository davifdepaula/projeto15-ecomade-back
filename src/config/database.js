import { MongoClient } from "mongodb"
import dotenv from 'dotenv'

dotenv.config()

const mongoClient = new MongoClient(process.env.DATABASE_URL)

let db;

try {
  await mongoClient.connect()
  db = mongoClient.db()
  console.log("conectado ao banco de dados")
} catch (error) {
  console.log('Deu errro no server')
}

await db.collection('moveis').insertMany([
  {
    "title": "SOFÁ NIVUS",
    "description": "Com desenho amplo e livre de excessos, o sofá Nivus é uma ótima escolha para quem busca conforto e estilo. Apresenta no encosto almofadas soltas e estrutura interna em madeira maciça de eucalipto, trazendo muita qualidade e durabilidade para o seu sofá! Venha conferir essa e outras novidades em um de nossos showrooms!!!",
    "image": "https://scontent.fgru5-1.fna.fbcdn.net/v/t39.30808-6/277219423_1137531676789131_3574666673359401827_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=-UvBLkYIiSMAX_sBlod&_nc_ht=scontent.fgru5-1.fna&oh=00_AfD75i7uBNqT5-gHjNIfhOagQDWB2P6ModnqzsuuXX_nnQ&oe=63DA30F7",
    "category": "Estofados",
    "price": 250.00
    
  },
  {
    "title": "POLTRONA JOLIE",
    "description": "Com base em aço carbono assento e encosto estofados, a poltrona Jolie oferece um conforto imenso! Um produto perfeito para você, que quer deixar seu ambiente mais elegante e aconchegante. Venha conferir essas e outras novidades em nossos showrooms",
    "image": "https://scontent.fgru5-1.fna.fbcdn.net/v/t39.30808-6/319390530_1926170757748847_6498692781650290884_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=7UViwUk1X0cAX-4wu2q&_nc_ht=scontent.fgru5-1.fna&oh=00_AfCtAb8RBd8lRw8108lClj8C3zgTD9WRQmkvI0N4LnuefA&oe=63DADB4A",
    "category": "Estofados",
    "price": 158.00
    
  },
  {
    "title": "SOFÁ MARANELLO",
    "description": "Para esse modelo é possível escolher os pés metálicos na cor preta, além de também possuir a opção de adicionar chaise ou optar pela configuração em “L”",
    "image": "https://scontent.fgru5-1.fna.fbcdn.net/v/t39.30808-6/232890767_994328064442827_5095132522751592644_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a26aad&_nc_ohc=9ngWZEWE2WwAX-MzHVC&tn=N36zp3MZqCjb2ay8&_nc_ht=scontent.fgru5-1.fna&oh=00_AfA-G5NJT75J2-2UfJsnnktsfrXgUV2OsDRG7ralA4xZ6w&oe=63DB1979",
    "category": "Estofados",
    "price": 357.00
    
  },
  {
    "title": "SOFÁ BENTLEY",
    "description": "Modelo retrátil e reclinável com almofadas soltas! Peça com catraca de 180 graus no encosto, permitindo uma caixa traseira estreita e a possibilidade de utilização como cama! Reparem nos detalhes das cintas de couro na lateral dos braços, detalhe que traz muito aconchego ao ambiente! Além disso os braços com espessuras mais finas são ótimos para melhor aproveitamento de espaço!",
    "image": "https://scontent.fgru5-1.fna.fbcdn.net/v/t39.30808-6/236757219_998719657337001_5891590598428553598_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a26aad&_nc_ohc=SUnXGnmz5bYAX-uDKKT&_nc_ht=scontent.fgru5-1.fna&oh=00_AfD6QRc6iwGjM1s2LTWX86t_zFf3CbdhTDx3JMHe_KJXHQ&oe=63DA8ADA",
    "category": "Estofados",
    "price": 662.00
    
  },
  {
    "title": "SOFÁ MERCURY ",
    "description": "Modelo retrátil e reclinável! Peça líder em vendas… Completíssimo e com melhor custo benefício! Qualidade, beleza e conforto para o seu lar!!!",
    "image": "https://scontent.fgru5-1.fna.fbcdn.net/v/t39.30808-6/217898238_983216412220659_2461838468385904974_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a26aad&_nc_ohc=yl03IpgwA3UAX-RO_VF&tn=N36zp3MZqCjb2ay8&_nc_ht=scontent.fgru5-1.fna&oh=00_AfDiytcIWOaei_zrlIPZTEga-ZYFIvnV5jvRwvEFTyVwIg&oe=63DB67E3",
    "category": "Estofados",
    "price": 168.00
    
  },
  {
    "title": "MESA DE JANTAR TAMPO VIGA COM PÉS EM METALON",
    "description": "Mesa em madeira maciça de demolição de Peroba Rosa com acabamento maquinado, pés em metalon e pintura epóxi preta, combinando muito bem com as Cadeiras Laura de assento preto e encosto em tela sextavada tom palha, temos a opção com ou sem os braços! Simplesmente um charme!!!",
    "image": "https://scontent.fgru5-1.fna.fbcdn.net/v/t39.30808-6/273272511_1107142186494747_5162496037966831362_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=SDcBlEAtxukAX8goIF_&_nc_ht=scontent.fgru5-1.fna&oh=00_AfD2P03zh3xMLrtr8k5RCHmpaG7BC1UIKxHJM2nwaf30_Q&oe=63DB585B",
    "category": "Móveis",
    "price": 390.00
    
  },
  {
    "title": "ESPREGUIÇADEIRA",
    "description": "MADEIRA DE DEMOLIÇÃO DE PEROBA ROSA",
    "image": "https://scontent.fgru5-1.fna.fbcdn.net/v/t39.30808-6/257694767_1060421034500196_123988565339047014_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a26aad&_nc_ohc=mDcoMDiAqDoAX-ufqTM&_nc_ht=scontent.fgru5-1.fna&oh=00_AfDwmmfGr9oMHM6ZwHBouCg3qf68pgkvnj_VGc6F6HAi0Q&oe=63DA9FC4",
    "category": "Móveis",
    "price": 138.00
    
  },
  {
    "title": "BANCO BALANÇO",
    "description": "BANCO BALANÇO 3 LUGARES EM MADEIRA DE DEMOLIÇÃO. Peça linda inteiramente em madeira de demolição de Peroba Rosa",
    "image": "https://scontent.fgru5-1.fna.fbcdn.net/v/t39.30808-6/255535130_1056334601575506_6536220906460428180_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a26aad&_nc_ohc=-foPjP6dXAAAX_bRtkC&_nc_ht=scontent.fgru5-1.fna&oh=00_AfBkfiLyFm2a_1H_3mwacKYJSTJqwWUumQ6IZb4F6AJKKg&oe=63DA7D14",
    "category": "Móveis",
    "price": 243.00
    
  },
  {
    "title": "MESAS LATERAIS NINHO",
    "description": "MESAS LATERAIS NINHO COM PÉS EM METALON E TAMPO EM MADEIRA MACIÇA DE PEROBA ROSA",
    "image": "https://scontent.fgru5-1.fna.fbcdn.net/v/t1.6435-9/167199403_918722045336763_5756897083046508634_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a26aad&_nc_ohc=1FnbJWEFk8gAX9tagKQ&_nc_ht=scontent.fgru5-1.fna&oh=00_AfBSFEwpybCaIyQ0BhNvCPM3TuAk8jzLZQ4SUmw9ibOZxg&oe=63FD8C7A",
    "category": "Móveis",
    "price": 144.00
    
  },
  {
    "title": "MESA DE JANTAR BERTIOGA",
    "description": "Mesa de tampo off white com pés em madeira maciça de demolição de Peroba Rosa e cadeiras em madeira maciça, com encosto em telinha sintética e assento estofado",
    "image": "https://scontent.fgru5-1.fna.fbcdn.net/v/t1.6435-9/168169153_920944505114517_8607097671016899130_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a26aad&_nc_ohc=OHemaraogdIAX-Exqw1&_nc_oc=AQlqnM4e_bq0HX9y-LZ3lJyPH_bzdSEV5q4yTgKrezfkOKRaZH15ztPYP9ZrpgT_C5w90VsTiBroLv0o2xjU-dD0&_nc_ht=scontent.fgru5-1.fna&oh=00_AfAmccg5MTU5162BOt7GCY2HmK_51wzHmXgXUSTtWhKMEg&oe=63FD7871",
    "category": "Móveis",
    "price": 343.00
    
  },
  {
    "title": "MESA DE JANTAR",
    "description": "ESA DE JANTAR TAMPO MACIÇO DE MADEIRA DE DEMOLIÇÃO DE PEROBA ROSA, COM PÉS EM METALON",
    "image": "https://scontent.fgru5-1.fna.fbcdn.net/v/t1.6435-9/171760976_924559978086303_8836778942202646481_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a26aad&_nc_ohc=CFHi7r0dCj4AX98PfI6&tn=N36zp3MZqCjb2ay8&_nc_ht=scontent.fgru5-1.fna&oh=00_AfAlNI3EgX5audDNW3BnG6KRBtV6le9KES6ubwnES5-6zg&oe=63FD69A7",
    "category": "Móveis",
    "price": 108.00
    
  },
  {
    "title": "MESA DE JANTAR",
    "description": "MESA DE JANTAR COM TAMPO MACIÇO DE PEROBA ROSA E PÉS EM INOX ESCOVADO - 2,20x1,00m + CADEIRAS AMSTERDÃ COM ENCOSTO DE TELA SEXTAVADA",
    "image": "https://scontent.fgru5-1.fna.fbcdn.net/v/t1.6435-9/166065645_916826115526356_3006457747236974719_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a26aad&_nc_ohc=SC3tEevLqeIAX_ga_-n&_nc_ht=scontent.fgru5-1.fna&oh=00_AfBAQ0xgvDcHEY6862jYZefRElhnfRGv-oSSeIJTQSIxfA&oe=63FD73B2",
    "category": "Móveis",
    "price": 580.00
    
  },
  {
    "title": "SOFÁ PIETRO",
    "description": "Retrátil e reclinável. Diferencial Ecomade: Peças fabricadas exclusivamente em madeira de eucalipto tratada e de reflorestamento. Catracas blindadas com até sete regulagens no encosto. Retrátil com abertura de 1,80m, através de canaletas metálicas, com travamento em dois estágios e rodízios em gel. Assentos com percintas elásticas italianas fixas em maquinário. Espumas calandradas com certificado ISO 9001.",
    "image": "https://scontent.fgru5-1.fna.fbcdn.net/v/t1.6435-9/176187502_931237737418527_4676492090193516210_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a26aad&_nc_ohc=ablXEDTFrssAX--uEoH&_nc_ht=scontent.fgru5-1.fna&oh=00_AfAWbntW9apaNFGrYqWA5idtqE_sue673-qakrW1FGf5Yw&oe=63FD6637",
    "category": "Estofados",
    "price": 188.00
    
  },
  {
    "title": "MESA ZURIQUE",
    "description": "DIÂMETRO DE 1,60m + CADEIRAS ARIZONA. Que tal essa combinação com cadeiras na cor preta, para trazer mais personalidade ao ambiente? Amamosss!!!",
    "image": "https://scontent.fgru5-1.fna.fbcdn.net/v/t1.6435-9/144023525_883464925529142_7337599819690849148_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a26aad&_nc_ohc=oKABnlYE5UIAX_qz4C3&_nc_ht=scontent.fgru5-1.fna&oh=00_AfDcX8ZC2m6YXV326hB3q-cpJPMjolgwI8Y_EdiaVINFnA&oe=63FD82DC",
    "category": "Móveis",
    "price": 208.00
    
  },
  {
    "title": "CONJUNTO PARIS ",
    "description": "MADEIRA DE DEMOLIÇÃO COM PÉS EM INOX POLIDO.",
    "image": "https://scontent.fgru5-1.fna.fbcdn.net/v/t1.6435-9/121323526_806060589936243_7762205430171704310_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a26aad&_nc_ohc=hznd3feHCC0AX-nny_V&_nc_ht=scontent.fgru5-1.fna&oh=00_AfAHxlBfrsgmTrjmEQEStbopDvh0b8czSoGR2nvAHakFfg&oe=63FD8AE9",
    "category": "Móveis",
    "price": 128.00
    
  },
  {
    "title": "SOFÁ ELEGANCE",
    "description": "MODELO RETRÁTIL.Comprimento de 2,60m",
    "image": "https://scontent.fgru5-1.fna.fbcdn.net/v/t1.6435-9/87452664_659381594604144_731227824345579520_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9267fe&_nc_ohc=SbImCofu8M8AX-NoeWw&_nc_ht=scontent.fgru5-1.fna&oh=00_AfBHHEqR9IWHE3FJBfVY4K01IVlc4cafbeJwuGvDtGev5A&oe=63FD7F86",
    "category": "Estofados",
    "price": 359.00
    
  }
]
)

export default db