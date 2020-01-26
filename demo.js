const gql = require('graphql-tag')
const ApolloServer = require('appolli-server')

const typeDefs = gql` 
type User {
    email: String!
    avatar: String!
    friends: [User]!

    type Query {
        me: User!
    }
}`
 const resolver = {
     Query: {
         me() {
             return {
                 email: 'yoda@MediaStreamAudioSourceNode.com',
                 avatar: 'http://yoda.png',
                 friends: []
             }
         }
     }
 }

 const server = new AppolloServer({
        typeDefs,
        resolvers
 })
 server.listen(4000)
   .then(() =>console.log('on port 4000'))