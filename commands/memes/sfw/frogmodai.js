//Josie message
exports.run = (client, message, args) => {
  message.channel
    .send(
      ':eggplant::fire::tophat::fire::eggplant:\n:fire::last_quarter_moon_with_face::eye::first_quarter_moon_with_face::fire:\n:sun_with_face::vulcan::frog::raised_back_of_hand::sun_with_face:\n:fire::family_wwbb::raised_hands::family_mmgg::fire:\n:eggplant::mushroom::maple_leaf::mushroom::eggplant:'
    )
    .catch(console.error);
};
