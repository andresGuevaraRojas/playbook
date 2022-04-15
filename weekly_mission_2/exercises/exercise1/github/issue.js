const issue = {
    title:'Error al calcular el total de boletos',
    repositoryNameAssociated:'BoletosJS',
    status:'Active',
    numberOfComments:'32',
    labels:['Boletos','Sistema','Issue','Error'],
    author:'Andx',
    dateCreated:'12/04/2022',
    lastUpdated:'14/04/2022',
    getTitleAndAutor:function(){
        return `${this.title} by ${this.author}`
    },
    getGeneralInfo:function() {
        return `
        Title:${this.title}
        Author:${this.author}
        Status:${this.status}
        Number of comments:${this.numberOfComments}`
    }
}
export default issue