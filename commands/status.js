const Command = require('../strucutres/Command')

class Limpar extends Command {
  constructor (client) {
    super(client)
    this.requiredArgs = true
    this.category = 'Dono'
    this.description ='Mudar status do bot.'
	this.permissions = ['ADMINISTRATOR']
  }

  async run (message, args, { prefix }) {
      if (message.member.id == process.env.OWNERID){
        let status_string = args.join(" ");
        this.client.user.setPresence({ status: 'online', game: { name: status_string } })
      }
  }
}

module.exports = Limpar
