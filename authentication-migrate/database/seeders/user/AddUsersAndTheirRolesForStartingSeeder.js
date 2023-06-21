const { v4: uuid4 } = require('uuid')
const bycrypt = require('bcryptjs')
const models = require('../../../app/models')
const User = models.User
const Role = models.Role

const addUsersAndTheirRolesForStartingSeeder = async () => {
    const roleAdmin = await Role.findOne({
        where: {
            name: 'Admin'
        }
    })

    const rolePm = await Role.findOne({
        where: {
            name: 'PM'
        }
    })

    const roleUser = await Role.findOne({
        where: {
            name: 'User'
        }
    })

    const userNarutoUzumaki = await User.create({
        id: uuid4(),
        name: 'Naruto Uzumaki',
        username: 'naruto_uzumaki',
        email: 'narutouzumaki@example.com',
        password: await bycrypt.hash('naruto_uzumaki', 10)
    })
    userNarutoUzumaki.setRoles([roleAdmin, rolePm])

    const userSasukeUchiha = await User.create({
        id: uuid4(),
        name: 'Sasuke Uchiha',
        username: 'sasuke_uchiha',
        email: 'sasukeuchiha@example.com',
        password: await bycrypt.hash('sasuke_uchiha', 10)
    })
    userSasukeUchiha.setRoles([roleUser])

    const userItachiUchiha = await User.create({
        id: uuid4(),
        name: 'Itachi Uchiha',
        username: 'itachi_uchiha',
        email: 'itachiuchiha@example.com',
        password: await bycrypt.hash('itachi_uchiha', 10)
    })
    userItachiUchiha.setRoles([roleAdmin])
}

addUsersAndTheirRolesForStartingSeeder()