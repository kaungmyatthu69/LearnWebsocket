export default defineEventHandler(async (event)=>{
    // handle query params
    // const {name}= getQuery(event)
    // // handle post data
    // const {age} =await readBody(event)sd
    const {data} = await  $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_Rl04KG3S8Qfz942QZkdAUXTACNEWw9WhgGeU0hkG')
    return data;
})

