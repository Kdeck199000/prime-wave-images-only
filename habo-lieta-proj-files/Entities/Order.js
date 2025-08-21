{
  "name": "Order",
  "type": "object",
  "properties": {
    "customer_name": {
      "type": "string",
      "description": "Customer's full name"
    },
    "phone": {
      "type": "string",
      "description": "Customer's phone number"
    },
    "email": {
      "type": "string",
      "description": "Customer's email"
    },
    "location": {
      "type": "string",
      "enum": [
        "lesotho",
        "south_africa"
      ],
      "description": "Customer location"
    },
    "shoe_description": {
      "type": "string",
      "description": "Description of desired shoe"
    },
    "brand_preference": {
      "type": "string",
      "description": "Preferred brand"
    },
    "size": {
      "type": "string",
      "description": "Shoe size"
    },
    "color_preference": {
      "type": "string",
      "description": "Color preference"
    },
    "budget": {
      "type": "string",
      "description": "Budget range"
    },
    "additional_notes": {
      "type": "string",
      "description": "Additional requirements or notes"
    },
    "image_url": {
      "type": "string",
      "description": "URL of the uploaded reference image"
    },
    "status": {
      "type": "string",
      "enum": [
        "pending",
        "confirmed",
        "processing",
        "completed"
      ],
      "default": "pending",
      "description": "Order status"
    }
  },
  "required": [
    "customer_name",
    "phone",
    "location",
    "shoe_description"
  ],
  "rls": {
    "write": {
      "created_by": "{{user.email}}"
    }
  }
}