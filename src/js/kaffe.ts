abstract class kaffe {
    constructor(rabat : number){
this._rabat = rabat;
    }
    
  
  private _rabat : number;
  public get rabat() : number {
      return this._rabat;
  }
  public set rabat(v : number) {
      this._rabat = v;
  }
  
  abstract Pris(pris: number): void;
 public Styrke(styrke: string)
 {
     return "Mild";
 }
}