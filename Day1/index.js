var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var arr = [10, 50];
arr.push(80);
arr.push(1000);
arr.push(500);
//arr.push("500");
var arr2 = [10, "ahmed", 50, "yasser"];
for (var i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}
var numbool = 10;
numbool = true;
function sum(n1, n2) {
    return n1 + n2;
}
console.log(sum(10, 40));
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());
var manger = /** @class */ (function (_super) {
    __extends(manger, _super);
    function manger() {
        var _this = _super.call(this) || this;
        _this.showAddress = function () {
            console.log(" street : ".concat(this.address.street, " suit: ").concat(this.address.suit, "city: ").concat(this.address.city, " zipcode: ").concat(this.address.zipcode, " geo lat: ").concat(this.address.geo.lat, " geo lng: ").concat(this.address.geo.lng));
        };
        _this.id = 1;
        _this.name = "Leanne Graham";
        _this.username = "Bret";
        _this.email = "Sincere@april.biz";
        _this.address =
            {
                street: "Kulas Light",
                suit: "Apt. 556",
                city: "Gwenborough",
                zipcode: "92998-3874",
                geo: {
                    lat: "-37.3159",
                    lng: "81.1496"
                }
            };
        return _this;
    }
    return manger;
}(Employee));
var m = new manger();
m.showAddress();
