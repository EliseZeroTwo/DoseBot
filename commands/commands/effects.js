// Modules
const Discord = require('discord.js');
const sanitizeSubstanceName = require('../../include/sanitize-substance-name.js');
const Effects = require('../../include/effects.js');

const rp = require('request-promise');

const effectQuery = require('../../queries/effects.js');

const fetchAndParseURL = async url => {
  try {
    const responseData = await rp(url);

    return JSON.parse(responseData);
  } catch (err) {
    console.error(err);
  }

  return null;
};

const fetchPWSubstanceData = async substanceName => {
  const query = effectQuery.effect(substanceName);

  const encodedQuery = encodeURIComponent(query);

  return fetchAndParseURL(
    `https://api.psychonautwiki.org/?query=${encodedQuery}`
  );
};

exports.run = async (client, message, args) => {
  const str = message.content;
  // Removes all symbols and puts everything in lower case so bot finds the images easier
  let substanceName = str
    .toLowerCase()
    .replace('--effects ', '', -1)
    .replace(/-/g, '', -1)
    .replace(/ /g, '', -1);

  substanceName = sanitizeSubstanceName(substanceName);

  try {
    const { data } = await fetchPWSubstanceData(substanceName);

    console.log(data); // SHOW ME WHAT YOU GOT

    if (data.substances.length == 0) {
      message.channel
        .send(
          `There are no substances matching \`${substanceName}\` on PsychonautWiki.`
        )
        .catch(console.error);
      return;
    }

    if (data.substances.length > 1) {
      message.channel
        .send(
          `There are multiple substances matching \`${substanceName}\` on PsychonautWiki.`
        )
        .catch(console.error);
      return;
    }
    const substance = data.substances[0];

    const embed = new Discord.RichEmbed()
      .setTitle(`${substance.name} effect information`)
      .setAuthor('DoseBot', 'https://i.imgur.com/7R8WDwE.png')
      .setColor('747474')
      .setFooter(
        'Please use drugs responsibly',
        'https://i.imgur.com/7R8WDwE.png'
      )
      .setThumbnail('https://i.imgur.com/7R8WDwE.png')
      .setTimestamp()
      .setURL('http://www.dosebot.org')
      .addField(
        'Effects (randomly selected)',
        Effects.createEffectsList(substance)
      )
      .addField(
        'More information',
        Effects.createFullEffectListLink(substance)
      );

    message.channel.send({ embed }).catch(console.error);
  } catch (err) {
    console.error(err);
  }
};
