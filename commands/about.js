const Discord = require("discord.js");

//about message
exports.run = (client, message, args) => {
  const embed = new Discord.RichEmbed()
  .setAuthor("DoseBot", "https://kek.gg/i/JGVVV.png")
  .setColor("747474")
  .setFooter("Please use drugs responsibly", "https://kek.gg/i/JGVVV.png")
  .setThumbnail("https://kek.gg/i/svRNH.png")
  .setTimestamp()
  .setURL("http://www.dosebot.org")
  .addField("Assistance", "DoseBot automatically sources dosage, duration, tolerance, and harm reduction information from <http://www.psychonautwiki.org> and <https://effectindex.com>.\n\nIt was created by <@278301453620084736>, <@295422447887450114>, <@249800037050220545>, <@183993728178978818>, and <@247965158364676104> with the goal of raising awareness of harm reduction best practices, as well as the Subjective Effect Index. Based on KGB by Stas Constantine\n\nFor a complete list of commands type '--help'.\n\nFor more information see <https://effectindex.com/dosebot> or join the Subjective Effect Documentation discord server at <https://discord.gg/2J5XBfX>.")

  message.channel.send({embed});
};
