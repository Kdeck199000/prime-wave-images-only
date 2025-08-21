// JavaScript Example: Reading Entities
// Filterable fields: name, brand, category, price, image_url, description, sizes, featured
async function fetchProductEntities() {
    const response = await fetch(`https://app.base44.com/api/apps/689dcff9d76a68ce9ad38a2b/entities/Product`, {
        headers: {
            'api_key': '8111da9b45f14fe6bed7277feb284722', // or use await User.me() to get the API key
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    console.log(data);
}

// JavaScript Example: Updating an Entity
// Filterable fields: name, brand, category, price, image_url, description, sizes, featured
async function updateProductEntity(entityId, updateData) {
    const response = await fetch(`https://app.base44.com/api/apps/689dcff9d76a68ce9ad38a2b/entities/Product/${entityId}`, {
        method: 'PUT',
        headers: {
            'api_key': '8111da9b45f14fe6bed7277feb284722', // or use await User.me() to get the API key
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateData)
    });
    const data = await response.json();
    console.log(data);
}