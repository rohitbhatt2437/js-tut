const employee = {
    calcTax(){
        console.log("tax rate is 10");
    },
};

const karanarjun = {
    salary: 50000,
};

const karanarjun2 = {
    salary: 50000,
};

const karanarjun3 = {
    salary: 50000,
};

karanarjun.__proto__ = employee;
karanarjun2.__proto__ = employee;
karanarjun3.__proto__ = employee;