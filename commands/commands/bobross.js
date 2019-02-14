// Sends a random Bob Ross video to the channel
exports.run = (client, message, args) => {
  console.log(
    `**********Executing bobross on ${message.guild.name} - message author: ${
      message.author.username
    }**********`
  );

  response = `<@${message.author.id}> `;

  // If someone mentions a person at the end of the bobross command,
  // make sure those people are mentioned with the response
  if (message.mentions) {
    message.mentions.users.forEach(function(user, id) {
      response += `<@${id}> `;
    });
  }

  response +=
    'Enjoy a random episode of The Joy of Painting: <https://mityurl.com/y/cDIn/r>\n';

  message.channel.send(response).catch(console.error);
};
