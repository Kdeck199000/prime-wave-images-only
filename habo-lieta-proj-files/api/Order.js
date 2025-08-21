// JavaScript Example: Reading Entities
// Filterable fields: customer_name, phone, email, location, shoe_description, brand_preference, size, color_preference, budget, additional_notes, image_url, status
async function fetchOrderEntities() {
    const response = await fetch(`https://app.base44.com/api/apps/689dcff9d76a68ce9ad38a2b/entities/Order`, {
        headers: {
            'api_key': '8111da9b45f14fe6bed7277feb284722', // or use await User.me() to get the API key
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    console.log(data);
}

// JavaScript Example: Updating an Entity
// Filterable fields: customer_name, phone, email, location, shoe_description, brand_preference, size, color_preference, budget, additional_notes, image_url, status
async function updateOrderEntity(entityId, updateData) {
    const response = await fetch(`https://app.base44.com/api/apps/689dcff9d76a68ce9ad38a2b/entities/Order/${entityId}`, {
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