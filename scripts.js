
        const modal = {
            open(){
                //Open Modal
                // Add the class on modal
                document.querySelector('.modal-overlay')
                .classList.add('active')
            },
            close(){
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
            incomes(){
                //add the entries

            },
            expenses(){
                //add the exits
            },
            total() {
                //entries - exits
            }
        }

// I need to replace the data of the HTML by the JS data.