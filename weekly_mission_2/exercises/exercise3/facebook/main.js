import User from "./User.js";
import Biography from './Biography.js'
import Post from "./Post.js";

const user = new User(
    'Andres',
    'Guevara',
    '+5299999999',
    '****************',
    '13/10/2014',
    'Male'
)

const biography = new Biography(
    'somewhere',
    'Innvocaccion Virtual',
    'Acapulco'
)

const post = new Post(
    'Andres Guevara',
    'Hola a todos',
    'friends',
    'photo.png',
    '15/04/2022'
)

console.log("user:",user)
console.log("biography:",biography),
console.log("post:",post)