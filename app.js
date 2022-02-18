

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

const users = [user1, user2, user3, user4]


// ELEMENTS
const containerTransactions = document.querySelector('.history__transactions');




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

displayTransfers(user1.transfers)