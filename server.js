//usei o express prara usar e coinfigurar meu servidor 
const express = require("express")                                    /*usei o "npm i nodemon" para ataulizar o server automaticamente a cada alteração*/
const server = express()


const ideas = [
  {
    img:"https://cdn-icons-png.flaticon.com/512/2729/2729007.png",
    title: "Cursos de Programação", 
    category:"Estudos",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    url:"https://rocketseat.com.br"

  },

  {
    img:"https://cdn-icons-png.flaticon.com/512/2729/2729005.png",
    title: "Exercicios",
    category:"Saúde",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    url:"https://my.toneitup.com/"

  },

  {
    img:"https://cdn-icons-png.flaticon.com/512/2729/2729027.png",
    title: "Meditação", 
    category:"Mentalidade",
    description:"Beatae, eum accusamus nulla ullam, at ad inventore reprehenderit illo harum .",
    url:"https://www.eumedito.org/"

  },

  {
    img:"https://cdn-icons-png.flaticon.com/512/2729/2729032.png",
    title: "Karaokê", 
    category:"Diversão em familia",
    description:"illo harum enim id fugiat laboriosam obcaecati ipsum mollitia, officia optio voluptate repellendus.",
    url:"https://www.versao-karaoke.com/karaoke_free/karaoke.html"

  },

  {
    img:"https://cdn-icons-png.flaticon.com/128/2729/2729069.png",
    title: "Yoga", 
    category:"Exercicio",
    description:"illo harum enim id fugiat laboriosam obcaecati ipsum mollitia, officia optio voluptate repellendus.",
    url:"https://www.versao-karaoke.com/karaoke_free/karaoke.html"

  },

  {
    img:"https://cdn-icons-png.flaticon.com/128/2729/2729018.png",
    title: "YouTube", 
    category:"Entreterimento",
    description:"illo harum enim id fugiat laboriosam obcaecati ipsum mollitia, officia optio voluptate repellendus.",
    url:"https://www.youtube.com/?hl=pt-br"

  },
]



//configuração arquivos estaticos (CSS, SCRIPTS, IMAGENS)
server.use(express.static("public"))
 

//configuração do nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views",{
  express:server,
  noCache:true,
})


//criei uma rota e capteurei um pedido do cliente para responde-lo
server.get("/", function(req, res){
  const reverseIdeas = [...ideas].reverse()

  let lastIdeas = []
  for (let idea of reverseIdeas){ 
    if(lastIdeas.length < 2) {
      lastIdeas.push(idea)
    }
  }

  return res.render("index.html", { ideas: lastIdeas})
})

server.get("/ideias", function(req, res){

  const reverseIdeas = [...ideas].reverse()
  return res.render("ideias.html", {ideas : reverseIdeas})
})


//liguei meu servidor na porta 3000
server.listen(3000)