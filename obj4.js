class BaseMobile {
    constructor() {
        console.log("parent constructor");
    }

    sms() {
        console.log("SmS");
    }
}

class Mobile extends BaseMobile {

    constructor() {
        console.log("child constructor");
        super();
        this.width = 5;
        this.height = 10;
    }

    call() {
        console.log("Calling...");
    }
}

var m = new Mobile();
m.sms();