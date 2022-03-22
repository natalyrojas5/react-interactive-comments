
export const evaluateReply = (reply: string) => {
  let currentTarget = ''

  if (reply.length > 3) {
    reply.split(' ').forEach(text => {
      if (text.startsWith('@')) currentTarget += "<span style=\"color: #5457b6; font-weight: bold\"> " + text + "</span> ";
      else currentTarget += ' ' + text
    });

  }

  return currentTarget
}