function teste(resqueste,response){
const time = new Date();
response.json({date:time.toDateString()})
}
export default teste;