✅ 1. Get All Segments

curl -X GET http://localhost:3000/api/brokerage/segment


✅ 2. Update master_value (Only if Not Blocked)
curl -X PATCH "http://localhost:3000/api/brokerage/segment" \
  -H "Content-Type: application/json" \
  -d '[
    { "id": 1, "master_value": 250 },
    { "id": 2, "master_value": 200 },
    { "id": 3, "master_value": 5000 }
  ]'
