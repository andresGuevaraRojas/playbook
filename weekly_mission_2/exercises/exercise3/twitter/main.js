import User from "./User.js"
import TrendingTopic from "./TrendingTopic.js"

const trendingtopic =  new TrendingTopic(
    'Windows',
    60100,
    'Technology'
)
const user = new User(
    "And", 
    "andres_xyze343432211111", 
    "", 
    25,
    100,
    34,
    'img/1.jpg'
)
console.log(user)
console.log(trendingtopic)