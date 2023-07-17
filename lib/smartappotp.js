const axios = require('axios')

function generateAndroidUUID() {
    const chars = 'abcdef0123456789';
    let uuid = '';
    
    for (let i = 0; i < 16; i++) {
      uuid += chars[Math.floor(Math.random() * chars.length)];
    }
    
    return uuid;
  }
//   const androidUUID = generateAndroidUUID();
//   console.log(androidUUID);
const registert = async (num) => {
  const uuid= generateAndroidUUID()
  num = `92${num.split('').splice(1).join('')}`
  console.log('uuid>>>>:::::::::::',uuid)
  const data  = `msisdn=${num}&language=en&applicationVersion=2.14.0.16&uuid=${uuid}`
    const config = {
      headers: {
        "Content-Type":'application/x-www-form-urlencoded',
        "TE":'gzip, deflate; q=0.5',
        "Content-Length":data.length,
        "Connection":'Keep-Alive',
        "Accept-Encoding":'gzip'
      }
    };
  
    try {
      const response = await axios.post('https://pktelenor.smartadd.app/api/cxf/rest/users/registerUser', data, config);
   
      return {res:response.data.userToken,uuid:uuid}
     
    } catch (error) {
      console.error('error from request on regitering ......');
      return {status:429, res:'Request error'}
    }
  };