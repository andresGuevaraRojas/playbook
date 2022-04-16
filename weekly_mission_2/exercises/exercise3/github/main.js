import Repo from "./Repo.js"
import Issue from "./Issue.js"
import PullRequest from "./Pullrequest.js"

const repo = new Repo(
    "LaunchX",
    "carlogilmar",
    "JavaScript",
    100,
    199,
    299,
    10,
    10,    
)

const issue = new Issue(
    'Error al calcular el total de boletos',
    'BoletosJS',
    'Active',
    '32',
    ['Boletos','Sistema','Issue','Error'],
    'Andx',
    '12/04/2022',
    '14/04/2022',    
)
const pullRequest = new PullRequest(
    'Se corrige el error al sumar el total de boletos',
    'Andx',
    'main',
    '13/04/2022',
    'Pending',
    'BoletosJs',    
)
console.log("Nombre del repo:" + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())

console.log("Titulo del issue: ",issue.title)
console.log("Titulo y autor del issue: ",issue.getTitleAndAutor)
console.log("Informacion general de issue: ",issue.getGeneralInfo)


console.log("Titulo del pullrequest: ",pullRequest.title)
console.log("Titulo y autor del pullrequest: ",pullRequest.getTitleAndAutor)
console.log("Estatus del pullrequest: ",pullRequest.getStatus)
