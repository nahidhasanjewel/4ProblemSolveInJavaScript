
//Q.1
//Ans
function countDownFrom(number, massage) {
    	if (number> 0) {
           console.log(massage);
           countDownFrom(number - 1 ,massage);
    	}else{
            return;
        }     
    }
    countDownFrom(5,"massage");

 //Q 2.
//Ans:


let notifications = [
{message: 'Lorem', read: true},
{message: 'Ipsum', read: true},
{message: 'Dolor', read: true},
{message: 'Sit', read: false},
{message: 'Amet', read: true}
];

let allRead = notifications.every(c=>c.read==true);
console.log(allRead);




 //Q3,
//Ans:
var arr = [1, 2, 2, 3, 4, 4, 5];
new Set(arr);

 //Q4,
//Ans:

function wearPPE() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Wearing PPE'), 2000);
    })
}

function fightCorona() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Fighting Corona'), 1000);
    })
}

function execute() {
    wearPPE().then(result => console.log(result));
   
    setTimeout(()=> fightCorona().then(result => console.log(result)),2005);
}

execute();
