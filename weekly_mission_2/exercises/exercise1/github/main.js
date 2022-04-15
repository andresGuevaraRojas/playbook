import repo from "./repo.js"
import issue from "./issue.js"
import pullRequest from "./pullrequest.js"

console.log("Nombre del repo:" + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())

console.log("Titulo del issue: ",issue.title)
console.log("Titulo y autor del issue: ",issue.getTitleAndAutor())
console.log("Informacion general de issue: ",issue.getGeneralInfo())


console.log("Titulo del pullrequest: ",pullRequest.title)
console.log("Titulo y autor del pullrequest: ",pullRequest.getTitleAndAutor())
console.log("Estatus del pullrequest: ",pullRequest.getStatus())
