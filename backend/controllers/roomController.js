const RoomSchema = require("../models/room");

const join = async body => {
  const room = await RoomSchema.findOne({
    roomId: body.room
  }).exec();
  if (!room) {
    throw "no existe el room"
  }
  let members = room.members;

  if (members.find(member => member.name == body.name)) {
    return room;
  }
  return await RoomSchema.findOneAndUpdate(
    {
      roomId: body.room
    }, // condicion para actualizar
    {
      $push: { members: { name: body.name, vote: "" } }
    }, // el dato a actualizar
    {
      new: true
    } // para que devuelva el nuevo dato
  )
    .populate("userStory")
    .exec();
};

const vote = async (params, body) => {
  return await RoomSchema.findOneAndUpdate(
    {
      roomId: params.id,
      "members.name": body.name
    },
    {
      $set: { "members.$.vote": body.vote }
    },
    {
      new: true
    }
  ).exec();
};

const results = async params => {
  const res = await RoomSchema.findOne({
    roomId: params.id
  }).exec();
  if (res.members.some(mem => mem.vote == "")) {
    return res.members.map(mem => {
      return {
        name: mem.name,
        vote: '?'
      };
    });
  }
  return res.members;
};

const currentVote = async (params) => {
    const room = await RoomSchema.findOne(
        {
          roomId: params.id,
          "members.name": params.name
        },
      ).exec();
      const member = room.members.find(member => member.name == params.name)
      console.log(member)
      return member
};

module.exports = {
  join,
  vote,
  results,
  currentVote
};
