import { users } from "../db/mongoCollections.js";

const createUser = async (email, password) => {

    email = userHelpers.validateEmail(email)
    password = userHelpers.validatePassword(password)

    const registeredUser = await getUserByEmail(email)

    if (registeredUser !== null){
        throw "User Already Exists"
    }

    password = await userHelpers.encryptPassword(password)

    let newUser = {
        email: email,
        password: password,
        address: [],
        cart: [],
        orders: [],

    };

    const userCollection = await users();
    const newInsertInformation = await userCollection.insertOne(newUser);
    if (!newInsertInformation.insertedId) throw 'Insert failed!';

    return newInsertInformation

}

const getUserByEmail = async (email) => {
    try{
        console.log(email)
        const userCollection = await users()
        const searchResult = await userCollection.findOne({email});
        console.log(searchResult)
        return searchResult

    }catch(error){
        throw "User does not exist"
    }
}

const authenticateUser = async (email, password) => {
    try{
        const user = await getUserByEmail(email)
        if (user == null){
            throw "User does not exist"
        }
        const passwordMatches = await userHelpers.comparePassword(password, user.password)

        if(passwordMatches){
            return user
        }else{
            throw "Passwords Do Not Match"
        }


    }catch(error){
        throw error
    }
}


export default {createUser, getUserByEmail, authenticateUser}