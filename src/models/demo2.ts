import {querydemo2Data} from "@/services/demo2";
import {Effect,Reducer} from "@@/plugin-dva/connect";
export interface lists{
  name:String,
  age:Number,
  sex:String
}
export interface Demo2ModelsState{
  PersonData: { list:lists[] };
}
export interface Demo2ModelsType{
  namesplace:String,
  state:Demo2ModelsState,
  effect:{

  },
  reducer:{

  }
}
const demo2 :Demo2ModelsType={
  namesplace:"Demo2Models",
  state: {
    PersonData:{
      list:[
        {name:'张三',age:21,sex:'女'}
      ]
    }
  },
  effect:{

  },
  reducer:{

  }
}
export default demo2;
