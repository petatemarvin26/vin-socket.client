const {Buffer} = require('buffer');

function toBuffer(event: string, payload: any) {
  const at = new Date().getTime();
  const msg = Buffer.from(JSON.stringify({event, payload, at}));
  return msg;
}

async function toJSON(message: Blob) {
  const msg = await message.text();
  return JSON.parse(msg);
}

export {toBuffer, toJSON};
