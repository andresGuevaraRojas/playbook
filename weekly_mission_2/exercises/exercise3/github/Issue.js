class Issue{
    constructor(title,repositoryNameAssociated,status,numberOfComments,labels,author,dateCreated,lastUpdated){
        this.title = title
        this.repositoryNameAssociated = repositoryNameAssociated
        this.status = status
        this.numberOfComments = numberOfComments
        this.labels = labels
        this.author = author
        this.dateCreated = dateCreated
        this.lastUpdated = lastUpdated
    }

    get getTitleAndAutor(){
        return `${this.title} by ${this.author}`
    }
    get getGeneralInfo() {
        return `
        Title:${this.title}
        Author:${this.author}
        Status:${this.status}
        Number of comments:${this.numberOfComments}`
    }
}

export default Issue