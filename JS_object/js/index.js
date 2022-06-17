//1
const objNoutbuk={
    model: 'HP 255 G8',
    serialNumber: '3V5E7EA',
    display: {
        resolutionDisplay: '1920x1080', //{h: 2532, w: 1170}, //[2532,1170], //'2532x1170'
        displayType: 'IPS'
    },
    processor: {
        name: 'AMD Ryzen 7 5700U (1.8 - 4.3 GHz)',
        cores: '8'
    },
    memoryRam: "8 GB",
    storageSize: '256 GB',
    storageType: 'SSD',
    graphicsCard: 'AMD Radeon Graphics',
    colourOptions: 'Silver',
    importantDetails: {
        weight: '1.7 kg',
        dimensions: '(W*L*H)358*242*19'
        }
    };
    console.log(objNoutbuk);
//2
class User{
    constructor(login, password){
        this.login=login;
        this.password=password;
    }
    outObject(){
        console.log(this);
    }
};

const user1=new User('login1', 'qwerty');
const user2=new User('superman', 'qwerty12345');
const user3=new User('super', 'qwerty123');
const users=[user1, user2, user3];

console.log(user1);
console.log(user3);
console.log(users);
console.log(users[1]);

user1.outObject();


//3
let userMap=new Map();
for(let i=0; i<users.length; i++){
    userMap.set(users[i].login, users[i]);
}

console.log(userMap);

//4.1
const user4=new User('login16', 'qwerty123');
const user5=new User('man', '12345');
const user6=new User('fff', 'qqq');
const user7=new User('superjohn', 'john');
const newUsers=[user4, user5, user6, user7];

const result = [...users, ...newUsers];
console.log(result);
//4.2
const newArray = [].concat(users, newUsers);
console.log(newArray);
//4.3
users.push(...newUsers);
console.log(users);



