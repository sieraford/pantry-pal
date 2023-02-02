const addItemHandler = async (event) => {
    event.preventDefault()
    // collect items from the add item form
    const name = document.querySelector('#item-name').value.trim();
    const quantity = document.querySelector('#quantity').value.trim();
    const expiration_date = document.querySelector('#expiration-date').value.trim();
    const category_id = document.querySelector('#category').value.trim();


    if(name && quantity && expiration_date && category_id){
        const response = await fetch('/api/items', {
            method: 'POST',
            body: JSON.stringify({ name, quantity, expiration_date, category_id }),
            headers: { 'Content-Type': 'application/json' },
        });

        if(response.ok) {
            document.location.replace('/');
            
        } else {
            alert(response.statusText)
        }
        
    }
};

document
    .querySelector('.add-item-form')
    .addEventListener('submit', addItemHandler)
