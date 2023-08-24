const { User } = require('../models');
const { signToken } = require('../utils');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
    },
    

  },
  Mutation: {
    login: async (parent, args) => {
      

    },

    addUser: async (parent, {_id, techNum}) => {
      const user = await User.create(args);
      if (!user) {
        return
      }
      const token = signToken(user);
      return ({ token, user });
    },

    saveBook: async (parent,{_id, techNum}) => {
      

    },

    removeBook: async (parent, {_id, techNum}) => {
      


    },
  },
};

module.exports = resolvers;
