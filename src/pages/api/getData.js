import conn from "@/lib/db";

export default async function handler(req, res) {
    try {
        const query = `SELECT * FROM persons WHERE first_name='Richard' AND last_name='Cui' AND age=19;`;
        const result = await conn.query(query);
        console.log(result)
        res.json({'message': result.rows});
    } catch(error) {
        res.json({'error': error});
    }
}