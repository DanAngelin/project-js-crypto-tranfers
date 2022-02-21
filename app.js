

// ACCOUNTS

const user1 = {
    user: 'Dan Angelin',
    transfers: [40, 12, -45, 200, 2, 50, ],
    pass: 1234
}

const user2 = {
    user: 'Rey Skywalker',
    transfers: [-30, 34, 11, 6, -50, -33, 88],
    pass: 1234
}

const user3 = {
    user: 'Kylo Ren',
    transfers: [20, -5, 22, 52, 30, -31],
    pass: 1234
}

const user4 = {
    user: 'Immanuel Bryony',
    transfers: [44, 12, -45, 22],
    pass: 1234
}

const allUsers = [user1, user2, user3, user4];
console.log(allUsers)


// ELEMENTS
const containerTransactions = document.querySelector('.history__transactions');
const currentBalance = document.querySelector('.balance');
const containerBalance = document.querySelector('.current__balance')
const iconAng = `<img class="icon" src="img/icon.svg">`;
const btnLogin = document.querySelector('.btn__login');
const inputUser = document.querySelector('.input__user');
const inputPass = document.querySelector('.input__pass');
const labelWelcome = document.querySelector('.welcome__message');
const appUi = document.querySelector('.app');
const valueIn = document.querySelector('.value__in');
const valueOut = document.querySelector('.value__out');
const inputTransferTo = document.querySelector('.form__to');
const inputTransferAmount = document.querySelector('.form__value--amount');
const btnTrasferrTo = document.querySelector('.btn__transfer--to');




const displayTransfers = function(transfers) {
    containerTransactions.innerHTML = '';

    transfers.forEach(function(transf, i) {
        const type = transf > 0 ? 'deposit' : 'withdrawal';

        const html = `<div class="history__row">
                    <div class="history__type type__${type}">${i + 1} ${type}</div>
                    <div class="history__value">${transf} <img class="icon" src="img/icon.svg"></div>
                    </div>`;

    containerTransactions.insertAdjacentHTML('afterbegin', html)
    })
}



const createUserLogin = function(accUser) {
    accUser.forEach(function(usr) {
        usr.username = usr.user.toLowerCase().split(' ').map
     (name => name[0]).join('');
    });

}

createUserLogin(allUsers);


// Current Balance

const displayBalance = function(acc) {
    acc.balance = acc.transfers.reduce((acc ,transf) => acc + transf, 0);
    currentBalance.innerHTML = `${acc.balance} ${iconAng}`;
};

// Calc summary

const calcSummary = function (transfers) {
    const incomes = transfers.filter(transf => transf > 0).reduce((acc, transf) => acc + transf, 0);
    valueIn.innerHTML = `${incomes} ${iconAng}`;

    const out = transfers.filter(transf => transf < 0).reduce((acc, transf) => acc + transf, 0);
    valueOut.innerHTML = `${Math.abs(out)} ${iconAng}`;
    
}

const updateUI = function(user) {
    // Display transfers
    displayTransfers(user.transfers);

    // Display balance
    displayBalance(user);

    // Display summary
    calcSummary(user.transfers)
}

let currentUser;

btnLogin.addEventListener('click', function(e) {
    e.preventDefault();

    currentUser = allUsers.find(acc => acc.username === inputUser.value);
    console.log(currentUser)

    if(currentUser?.pass === +(inputPass.value));
    console.log('Login')

    // Display box with details and welcome message
    labelWelcome.textContent = `Welcome back, ${currentUser.user}`;
    appUi.style.opacity = 100;
    containerBalance.style.opacity = 100;

    // Clear input
    inputUser.value = inputPass.value = '';
    inputPass.blur();

    updateUI(currentUser);

});


// Transfer between users
btnTrasferrTo.addEventListener('click', function(e) {
    e.preventDefault();
    const amount = +(inputTransferAmount.value);
    const receiverUser = allUsers.find(user => user.username === inputTransferTo.value);
    inputTransferAmount.value = inputTransferTo.value = '';

    if(amount > 0 && receiverUser && currentUser.balance >= amount && receiverUser?.username !==
        currentUser.username) {
         currentUser.transfers.push(-amount);
         receiverUser.transfers.push(amount);

         updateUI(currentUser);
    }
})