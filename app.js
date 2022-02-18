

// ACCOUNTS

const user1 = {
    user: 'Dan Angelin',
    transfers: [40, 12, -45, 200, 2, 50, ],
    pass: 1234
}

const user2 = {
    user: 'Rey Skywalker',
    transfers: [-30, 34, 11, 6, -50, -33],
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

const allUsers = [user1, user2, user3, user4]


// ELEMENTS
const containerTransactions = document.querySelector('.history__transactions');
const currentBalance = document.querySelector('.balance');
const iconAng = `<img class="icon" src="img/icon.svg">`




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

displayTransfers(user1.transfers);


const createUserLogin = function(accUser) {
    accUser.forEach(function(usr) {
        usr.username = usr.user.toLowerCase().split(' ').map
     (name => name[0]).join('');
    });

}

createUserLogin(allUsers);


// Current Balance

const displayBalance = function(transfers) {
    const balance = transfers.reduce((acc ,transf) => acc + transf, 0);
    currentBalance.innerHTML = `${balance} ${iconAng}`;
};

displayBalance(user1.transfers)