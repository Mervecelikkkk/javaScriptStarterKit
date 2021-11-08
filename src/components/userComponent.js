import { MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User component yüklendi.")
let logger1=new MongoLogger()
let userService=new UserService(logger1)

let user1=new User(1,"Merve","Celik","İst")
let user2=new User(2,"Güneş","Bulut","İst")

userService.add(user1)
userService.add(user2)

userService.getById(1)
userService.list()

console.log(userService.list())
console.log(userService.getById(2))

let customer={
    id:1,
    firstName:"Mervecix",
}
//prototyping

customer.lastName="Celik"
console.log(customer.lastName)
