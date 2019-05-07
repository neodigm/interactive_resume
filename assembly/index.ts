// The entry file of your WebAssembly module.

export function getQuests(a: i32, b: i32): string {
  //let x:i32 = 9;
  //let sS:string = "cats";
  return '{"questions":[["Has a throax",["ant","elk","cow","dog","cat","owl"]],["Is a Feline",["cat","elk","cow","dog","ant","owl"]],["Is a Bovine",["cow","elk","cat","dog","ant","owl"]]]}';
}

class AVKOptions {
  aOpts : Array<string>;
  constructor ( pAr : Array<string> = [] ) {
      this.aOpts = pAr;
  }
}
export function ducks():void {
  //let options = new AVKOptions(["x","x"]);
}