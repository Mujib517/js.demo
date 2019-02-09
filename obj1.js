// Objects
// properties, operations
// object literals
// iPhone X   Grey, Black, White 
var mobile = {
    width: 5,
    height: 6,
    color: 'Black',
    weight: 100,

    call: function (number) {
        console.log("calling", number);
    },

    sms: function (number, text) {
        console.log("SMSing", number, text);
    },
    nameOfMobile:'NOkia',
    'name of mobile': 'NOkia'
};


//lowercase Uppercase

//dot notation
//bracket notation
// reflection for in

for(var key in mobile){
    console.log( mobile[key] );
}