function teste(resqueste,response){
const time = new Date();
var kst = process.env.TESTEKEY
response.json({date:time.toDateString()})
}
export default teste;