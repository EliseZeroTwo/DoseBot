// Kat4 message
exports.run = (client, message, args) => {
  message.channel
    .send(
      '<@371151824331210755> https://i.imgur.com/M3jFXdh.png'
    )
    .catch(console.error);
};
