
const modal = {
    open() {
        //Open Modal
        // Add the class on modal
        document.querySelector('.modal-overlay')
            .classList.add('active')
    },
    close() {
        //close the modal
        //remove the active on modal'class
        document.querySelector('.modal-overlay')
            .classList.remove('active')
    }
}

const transactions = [
    {
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '23/01/2021'
    },

    {
        id: 2,
        description: 'Website',
        amount: 500000,
        date: '23/01/2021'
    },

    {
        id: 3,
        description: 'Internet',
        amount: -20000,
        date: '23/01/2021'
    },
]

// I need to add the entries.
// after I need to add the exits and remove value' entries of the exits, so I will have the total.


const Transaction = {
    incomes() {
        //add the entries

    },
    expenses() {
        //add the exits
    },
    total() {
        //entries - exits
    }
}

// I need to replace the data of the HTML by the JS data.

const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),

    addTransaction(transaction, index) {

        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)

        DOM.transactionsContainer.appendChild(tr)
    },

    innerHTMLTransaction(transaction) {

        const CSSclass = transaction.amount > 0 ? "income" : "expense"

        const amount = Utils.formatCurrency(transaction.amount)

        const html =
            ` 
           
            <td class="description">${transaction.description}</td>
            <td class=${CSSclass}>${amount}</td>
            <td>${transaction.date}</td>
            <td>
                <img src="./_assets/minus.svg" alt="Remover Transação">
            </td>
       
            `
        return html
    }
}

const Utils = {
    formatCurrency(value) {
        const signal = Number(value) < 0 ? "-" : ""

        value = String(value).replace(/\D/g, "")

        value = Number(value) / 100
        value = value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })

        return signal + value

    }
}

transactions.forEach(function (transaction) {
    DOM.addTransaction(transaction)
})