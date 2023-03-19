export async function AddItem(name, description, price) {
    let item = {"id": Date.now(), "name": name, "description": description, "price": price}

    await fetch('http://localhost:3001/items', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(item)
    })
    .catch(error => {
        console.error('Error:', error);
    });
}