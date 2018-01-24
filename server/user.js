exports.UserModel = class {

    constructor(email, rolename){
        this.id = 0;
        this.email = email;
        this.rolename = rolename;
    }

    test(){
        console.log('Testing...' + this.email);
    }
}