import { PipeTransform,Pipe } from "@angular/core";

@Pipe(
{
    name:"substring"
})
export class SubString implements PipeTransform{
    transform(original:String,...args):string{
        let start:number =args[0];
        let end:number =args[1];
        console.log("inside substring transform, original="+original+" start="+start+" end="+end);


    if(end==undefined){
        let desired = original.substring(start);
        return desired;
    }

  
        let desired = original.substring(start,end);
        return desired;
    }
    
}
