// @ts-ignore
// import { competitiveAnalysisModelsState } from '@/models/competitiveAnalysis';
// import { complainAnalysisModelsState } from '@/models/complainAnalysis';
// import { publicAnalysisModelsState } from '@/models/publicAnalysis';
// import { chartLayoutModelsState } from '@/models/chartLayout.ts';
// import { formModelsState } from '@/models/form';
// import { productIndexModelsState } from '@/models/productIndex';
import {demoModelsState} from "@/models/demo";

export interface Loading {
  global: boolean;
  effects: { [key: string]: boolean | undefined };
  models: {};
}

export interface ConnectState {
  loading: Loading;
  // competitiveAnalysisModels: competitiveAnalysisModelsState;
  // complainAnalysisModels: complainAnalysisModelsState;
  // publicAnalysisModels: publicAnalysisModelsState;
  // formModels: formModelsState;
  // chartLayoutModels: chartLayoutModelsState;
  // productIndexModels: productIndexModelsState;
  demoModels: demoModelsState;
  demo2Models: demoModelsState;
}
