

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
const bntSort = document.querySelector('.btn__sort');
const btnAdd = document.querySelector('.btn__add');
const inputAdd = document.querySelector('.form__value--add');
const btnClose = document.querySelector('.btn__close');
const inputCloseUser = document.querySelector('.form__close--user');
const inputClosePass = document.querySelector('.form__close--pass');
const labelDate = document.querySelector('.label__date')




const displayTransfers = function(transfers, sort = false) {
    containerTransactions.innerHTML = '';

    const transfSort = sort ? transfers.slice().sort((a, b) =>
     a - b) : transfers;

     transfSort.forEach(function(transf, i) {
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

const now = new Date();
const day = `${now.getDate()}`.padStart(2, 0);
const month = `${now.getMonth() + 1}`.padStart(2, 0);
const year = now.getFullYear();
const hour = `${now.getHours()}`.padStart(2, 0);
const min = `${now.getMinutes()}`.padStart(2, 0);
labelDate.textContent = `As of ${day}/${month}/${year}, ${hour}:${min}`;


btnLogin.addEventListener('click', function(e) {
    e.preventDefault();

    currentUser = allUsers.find(acc => acc.username === inputUser.value);

    if(currentUser?.pass === +(inputPass.value));

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
});

// Sort Transfers
let sorted = false;
bntSort.addEventListener('click', function(e) {
    e.preventDefault();
    displayTransfers(currentUser.transfers, !sorted);
    sorted = !sorted;
});


// Add Amount
btnAdd.addEventListener('click', function(e) {
    e.preventDefault();

    const amount = +(inputAdd.value);

    if(amount > 0 && currentUser.transfers.some(transf => transf >= amount * 0.5)) {
        // Add transfer
        currentUser.transfers.push(amount);

        // Update
        updateUI(currentUser);
    }
    inputAdd.value = '';
});


// Close Account
btnClose.addEventListener('click', function(e) {
    e.preventDefault();

    if(inputCloseUser.value === currentUser.username && +(inputClosePass.value) === currentUser.pass) {
        const index = allUsers.findIndex(user => user.username === currentUser.username)

        // Delete user
        allUsers.splice(index, 1);

        // Hide UI
        appUi.style.opacity = 0;
        containerBalance.style.opacity = 0;
        labelWelcome.textContent = `Login in to get started`;
    }

    inputCloseUser.value = inputClosePass.value = '';
});

// Widget Top Crypto Price

const pRank1 = document.querySelector('.rank_1');
const rank1Logo = document.querySelector('.rank_1--logo');
const rank1Name = document.querySelector('.rank_1--name');
const rank1Price = document.querySelector('.rank_1--price');

const pRank2 = document.querySelector('.rank_2');
const rank2Logo = document.querySelector('.rank_2--logo');
const rank2Name = document.querySelector('.rank_2--name');
const rank2Price = document.querySelector('.rank_2--price');

const pRank3 = document.querySelector('.rank_3');
const rank3Logo = document.querySelector('.rank_3--logo');
const rank3Name = document.querySelector('.rank_3--name');
const rank3Price = document.querySelector('.rank_3--price');

const pRank4 = document.querySelector('.rank_4');
const rank4Logo = document.querySelector('.rank_4--logo');
const rank4Name = document.querySelector('.rank_4--name');
const rank4Price = document.querySelector('.rank_4--price');

const pRank5 = document.querySelector('.rank_5');
const rank5Logo = document.querySelector('.rank_5--logo');
const rank5Name = document.querySelector('.rank_5--name');
const rank5Price = document.querySelector('.rank_5--price');

async function widget() {
    const response = await fetch(`https://api.coinstats.app/public/v1/coins?skip=0&limit=5&currency=USD`);

    const widgetCrypto = await response.json();

    const { coins: [{rank: rank1, icon: logo1, name: name1, price: price1},
                    {rank: rank2, icon: logo2, name: name2, price: price2},
                    {rank: rank3, icon: logo3, name: name3, price: price3},
                    {rank: rank4, icon: logo4, name: name4, price: price4},
                    {rank: rank5, icon: logo5, name: name5, price: price5}] } = widgetCrypto

    pRank1.textContent = `# ${rank1}`;
    rank1Logo.innerHTML = `<img src="${logo1}" />`;
    rank1Name.textContent = `${name1}`;
    rank1Price.textContent = `${price1.toFixed(2)} $`;

    pRank2.textContent = `${rank2}`;
    rank2Logo.innerHTML = `<img src="${logo2}" />`;
    rank2Name.textContent = `${name2}`;
    rank2Price.textContent = `${price2.toFixed(2)} $`;

    pRank3.textContent = `# ${rank3}`;
    rank3Logo.innerHTML = `<img src="${logo3}" />`;
    rank3Name.textContent = `${name3}`;
    rank3Price.textContent = `${price3.toFixed(2)} $`;

    pRank4.textContent = `# ${rank4}`;
    rank4Logo.innerHTML = `<img src="${logo4}" />`;
    rank4Name.textContent = `${name4}`;
    rank4Price.textContent = `${price4.toFixed(2)} $`;

    pRank5.textContent = `# ${rank5}`;
    rank5Logo.innerHTML = `<img src="${logo5}" />`;
    rank5Name.textContent = `${name5}`;
    rank5Price.textContent = `${price5.toFixed(2)} $`;
}

widget()