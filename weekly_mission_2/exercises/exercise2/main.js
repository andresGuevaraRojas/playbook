import { explorers } from "./data.js";

//Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
explorers.forEach(explorer=>{
    console.log('Explorer name:',explorer.name)
})
//Imprime el stack de cada explorer, usa FOR EACH
explorers.forEach(explorer=>{
    console.log(`Extacks ${explorer.name}: ${explorer.stack}`)
})
//Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
const explorerStacks = explorers.map(explorer=>explorer.stack)
console.log('explorerStacks',explorerStacks)
//Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
const explorersWithStackJs = explorers.filter(explorer=>explorer.stack.includes('js'.toLowerCase()))
console.log('explorersWithStackJs:',explorersWithStackJs)
//Busca el primer explorer que sea de la CDMX, usa FIND
const explorerFromCDMX = explorers.find(explorer=>explorer.city == 'CDMX')
console.log('explorerFromCDMX',explorerFromCDMX)

//Obtén la suma de todos los exercises_completed, usa REDUCE
const totalExercisesCompleted = explorers.reduce((acumulate,explorer)=>acumulate+explorer.exercises_completed,0);
console.log('Total exercises completed',totalExercisesCompleted)

//Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
const someExplorerHasFrontendExercisesFinished = explorers.some((explorer=>explorer.missions.frontend.isFinished))
console.log('someExplorerHasExercisesFinished:',someExplorerHasFrontendExercisesFinished)

//Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
const allExplorerHasOnBoardingExercisesFinished = explorers.every(explorer=>explorer.missions.onboarding.isFinished)
console.log('allExplorerHasOnBoardingExercisesFinished:',allExplorerHasOnBoardingExercisesFinished)