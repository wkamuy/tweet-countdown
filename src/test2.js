const Twitter = require('twitter')

const client = new Twitter({
  consumer_key: '4XvzLMhsoFjmeN0ujQlBvQcf7',
  consumer_secret: 'C0jz5zT27nD6Lr5dOEypoZsZ58HJT0EFA6vCNZKJngIHrORJ2A',
  access_token_key: '1342851245258620928-DNyTpqXOrc4MXwAeiuzFlPtHzuwLaO',
  access_token_secret: 'VbR7ZT0BxYMciVULtJyNox0Oghy8hy3X2VkQSTdArG4l4'
})

client.post('statuses/update', {status: 'テスト'}, error => {
  if (!error) {
    console.log('Succeed!')
  } else {
    console.log('Couldnt tweet.')
    console.log(error)
  }
})