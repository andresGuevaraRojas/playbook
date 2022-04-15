const pullRequest = {
    title:'Se corrige el error al sumar el total de boletos',
    author:'Andx',
    branchName:'main',
    dateCreated:'13/04/2022',
    status:'Pending',
    repositoryNameAssociated:'BoletosJs',
    getStatus:function() {
        return this.status
    },
    getTitleAndAutor:function(){
        return `${this.title} by ${this.author}`
    }
}

export default pullRequest