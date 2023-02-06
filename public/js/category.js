const addCategoryHandler = async (event) => {
    event.preventDefault()
    // collect items from the add item form
    const name = document.querySelector('#category-name').value.trim();


    if(name){
        const response = await fetch('/api/categories', {
            method: 'POST',
            body: JSON.stringify({ name }),
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
    .querySelector('.add-category-form')
    .addEventListener('submit', addCategoryHandler);