const mongoo=require("mongoose")


//const URL="mongodb+srv://taigorad:goradwadi10@cluster0.ba6s9tj.mongodb.net/finjet"
const URL="mongodb+srv://brand_liberty_web:brandliberty1010@cluster0.wqfp3cw.mongodb.net/fiinzet1"
//const URL="mongodb+srv://brand_liberty_web:brandliberty1010@cluster0.wqfp3cw.mongodb.net/finjet"
const congfig={
    useNewUrlParser:true,
    useUnifiedTopology:true
}

mongoo.connect(URL,congfig).then(()=>{
    console.log("connected")
})
.catch((err)=>{
    console.log(err)
})


module.exports=mongoo
