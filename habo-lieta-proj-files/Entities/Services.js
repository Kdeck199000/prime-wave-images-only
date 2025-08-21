{
  "name": "Service",
  "type": "object",
  "properties": {
    "title": {
      "type": "string"
    },
    "short_description": {
      "type": "string"
    },
    "long_description": {
      "type": "string"
    },
    "image_url": {
      "type": "string"
    },
    "icon": {
      "type": "string",
      "description": "Name of the lucide-react icon"
    }
  },
  "required": [
    "title",
    "short_description"
  ]
}