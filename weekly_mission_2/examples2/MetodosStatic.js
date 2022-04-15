class Toolbox {
    static getMostUsefulTools() {
        return ["Command line", "git", "Text Editor"]
    }
}

console.log("Métodos static")

console.log(Toolbox.getMostUsefulTools())
  // Si intentamos instanciar un objeto, no podremos llamar este método static
  //const toolbox = new Toolbox()
  //console.log(toolbox.getMostUsefulTools()) // is not a function