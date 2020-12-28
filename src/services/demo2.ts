// import request from "@/utils/request";

interface paramsType extends ReadableStream{}

export async function querydemo2Data(params:paramsType) {
  console.log(params);
  const Dummy ={
  data:{},
    message:"成功",
    code:200
  };
  return new Promise(resolve => {
    resolve(Dummy);
  })

}
