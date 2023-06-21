const { v4: uuid4 } = require('uuid')
const Role = require('../../../app/models').Role

const addRolesForStartingSeeder = async () => {
  const roles = [
    {
      id: uuid4(),
      name: 'Admin'
    },
    {
      id: uuid4(),
      name: 'PM'
    },
    {
      id: uuid4(),
      name: 'User'
    }
  ]

  for (let i = 0; i < roles.length; i++) {
    const role = await Role.findOne({
      where: {
        name: roles[i].name
      }
    })

    if (role) {
      console.log('Role ' + roles[i].name + ' already exists')
    } else {
      await Role.create(roles[i])
    }
  }
}

addRolesForStartingSeeder()