import conn from "@/lib/db";

export default async function handler(req, res) {
    try {
        const parsedData = JSON.parse(req.body)
        const query = 'INSERT INTO persons(first_name, last_name, age) VALUES ($1, $2, $3);';
        const values = [parsedData.first_name, parsedData.last_name, parsedData.age];
        const result = await conn.query(query, values);
        res.json({'message': result});
    } catch(error) {
        res.json({'error': error});
    }
}