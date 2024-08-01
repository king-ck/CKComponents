import * as components from "./index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    CkButton: typeof components.Button;
  }
}
export {};
