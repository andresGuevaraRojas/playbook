class Developer {
    constructor(name, mainLang, stack) {
        this.name = name
        this.mainLang = mainLang
        this.stack = stack
    }

    get getName() {
        return this.name
    }
}

console.log("Herencia entre dos clases")
const carloDev = new Developer("Andres", "PHP", ["Javascript", "TSQL", "C#"])
console.log(carloDev)

class LaunchXStudent extends Developer {
}

const andresLaunchXDev = new LaunchXStudent("Andres", "PHP", ["Javascript", "TSQL", "C#"])
console.log(andresLaunchXDev)
console.log(andresLaunchXDev.getName) 