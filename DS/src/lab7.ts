export default function Lab7():void{
    function greetUser(name:string, title?:string):string{
        if (title){
            return `Hello, ${title} ${name}!`;
        }
        else{
            return `Hello, ${name}!`;
        }
    }
    console.log(greetUser("Balu","Mr."));
    console.log(greetUser("S"));

    let res=(a:number,b:number)=>(a+b);

    console.log(res(5,10))

}
Lab7();