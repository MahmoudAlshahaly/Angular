let arr: number[] = [10, 50];
arr.push(80);
arr.push(1000);
arr.push(500);
//arr.push("500");


let arr2: (string | number)[] = [10, "ahmed", 50, "yasser"];

for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}


let numbool: number | boolean = 10;
numbool = true;



function sum(n1: number, n2: number): number {
    return n1 + n2;
}
console.log(sum(10, 40));


interface IEmployee {
    readonly id: number,
    name: string,
    username: string,
    email: string,
    address:
    {
        street: string,
        suit: string,
        city: string,
        zipcode: string,
        geo:
        {
            lat: string,
            lng: string
        }
    }
}

class Employee implements IEmployee {


    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suit: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };

}
class manger extends Employee {
  public  id: number;
    name: string;
    username: string;
    email: string;
    address: any;

    constructor() {
        super();

        this.id=1;
        this.name= "Leanne Graham";
        this.username= "Bret";
        this.email= "Sincere@april.biz";
        this.address =
        {
            street: "Kulas Light",
            suit: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo:
            {
                lat: "-37.3159",
                lng: "81.1496",
            }
        }
    }
    showAddress = function () {
        
        console.log(` street : ${this.address.street} suit: ${this.address.suit}city: ${this.address.city} zipcode: ${this.address.zipcode} geo lat: ${this.address.geo.lat} geo lng: ${this.address.geo.lng}`);
    }
}

let m = new manger();
m.showAddress();