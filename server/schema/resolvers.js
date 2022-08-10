const _ = require("lodash");
const { clientAxios } = require("../axios/config");

const resolvers = {
  Query: {
    lists: async () => {
      const ListsByAxios = await clientAxios('/lists').then(res => { 
        return res.data });
      return ListsByAxios;
    },
    list: async (parent, args) => {
      const id = args.id;
      const list = _.find(Lists, { id: Number(id) });
      return list;
    },

  },

  Mutation: {
    createList: async (parent, args) => {
        const list = args.input;
        let newList = { title: list.title, tasks: []}
        if (list.tasks !== null && list.tasks.length > 0) {

          newList = { title: list.title, tasks: list.tasks }
        }

        await clientAxios.post('/lists', newList);
          
        return newList
    },
    createTask: async (parent, args) => {
        const listId = args.input.idList;
        const task = args.input.task

        if (listId && task) {
          const oldList = await clientAxios.get(`/lists/${listId}`).then(res => res.data);
  
          if (oldList && oldList.tasks && oldList.tasks.length > 0) {
  
            const newTasks = await clientAxios.patch(`/lists/${listId}`, { tasks: Array.from(new Set([ ... oldList.tasks, task ])) }).then(res => res.data.tasks);
            return newTasks;
          } else {
            const newTasks = await clientAxios.patch(`/lists/${listId}`, { tasks: [ task ] }).then(res => res.data.tasks);
            return newTasks;
          }


        }

      },

    deleteTask: async (parent, args) => {
      const listId = args.input.idList;
      const task = args.input.task


      if (listId && task) {

        const oldList = await clientAxios.get(`/lists/${listId}`).then(res => res.data);
        // remove task
  
        if (oldList && oldList.tasks.length > 0) {
          const listWithTaskRemoved = oldList.tasks.filter((el) => el !== task)
          const newTask = await clientAxios.patch(`/lists/${listId}`, { tasks: Array.from(new Set([ ... listWithTaskRemoved ])) }).then(res => res.data.tasks);
          return newTask;
  
        }

      }
    },
  }



};

module.exports = resolvers;