// Slack will send a request for each message sent on any or a specific channel.
// If trigger word has been configured on Slack, only messages starting with
// that trigger word will be sent

module.exports = function (context, done) {
  console.log('slack request: ', context.data);
  
  console.log(context.secrets);
  
  done(null, { text: 'hello pileta.tv' });
  
  
};
