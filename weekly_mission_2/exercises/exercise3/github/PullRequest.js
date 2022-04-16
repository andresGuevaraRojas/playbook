class PullRequest{
    constructor(title,author,branchName,dateCreated,status,repositoryNameAssociated){
        this.title = title
        this.author = author
        this.branchName = branchName
        this.dateCreated = dateCreated
        this.status = status
        this.repositoryNameAssociated = repositoryNameAssociated
    }
    get getStatus() {
        return this.status
    }
    get getTitleAndAutor(){
        return `${this.title} by ${this.author}`
    }
}


export default PullRequest