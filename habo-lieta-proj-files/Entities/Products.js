{
  "name": "Product",
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Product name"
    },
    "brand": {
      "type": "string",
      "description": "Brand name"
    },
    "category": {
      "type": "string",
      "enum": [
        "sneakers",
        "boots",
        "casual",
        "sports",
        "lifestyle"
      ],
      "description": "Product category"
    },
    "price": {
      "type": "number",
      "description": "Price in local currency"
    },
    "image_url": {
      "type": "string",
      "description": "Product image URL"
    },
    "description": {
      "type": "string",
      "description": "Product description"
    },
    "sizes": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "Available sizes"
    },
    "featured": {
      "type": "boolean",
      "default": false,
      "description": "Featured product"
    }
  },
  "required": [
    "name",
    "brand",
    "category",
    "price"
  ],
  "rls": {
    "write": {
      "created_by": "{{user.email}}"
    }
  }
}