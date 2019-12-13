const users = [
    {id: 1, username: 'bob'},{id: 2, username: 'jill'}, {id: 3, username: 'sally'}
    ]
import Users from '../models/user'
export default {
    
    Query: {
        getUser: (root, { userId }, context) => users.find(u => u.id === userId),
        //allUsers: (root, args, context) => users,\
        allUsers: (root, args, context) => Users.find(),
        getUserbyName:(root, args, context) =>Users.findOne(args),
    }
}