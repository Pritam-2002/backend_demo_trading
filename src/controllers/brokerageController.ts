// segmentController.ts
import { Request, Response } from 'express';
import { pool } from '../config/db';

export const getSegment = async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM segments ORDER BY id ASC');
    res.json(result.rows);
    return;
  } catch (err) {
    console.error('Error fetching segments:', err);
    res.status(500).json({ error: 'Internal server error' });
    return;
  }
};

// export const updateSegment = async (req: Request, res: Response) => {
//   const { master_value } = req.body;
//   const id = req.query.id;

//   if (!id || typeof id !== 'string') {
//     res.status(400).json({ error: 'Segment ID is required' });
//     return;
//   }

//   if (master_value === undefined || master_value === null) {
//     res.status(400).json({ error: 'master_value is required' });
//     return;
//   }


//   try {
//     const result = await pool.query(
//       `
//       UPDATE segments
//       SET master_value = $1
//       WHERE id = $2 AND is_blocked = FALSE
//       RETURNING *
//     `,
//       [master_value, id]
//     );

//     if (result.rowCount === 0) {
//       res.status(404).json({ error: 'Segment not found' });
//       return;
//     }

//     res.status(200).json(result.rows[0]);
//     return;
//   } catch (err) {
//     console.error('Error updating segment:', err);
//     res.status(500).json({ error: 'Internal server error' });
//     return;
//   }
// };


export const updateSegment = async (req: Request, res: Response) => {
  const updates = req.body;

  if (!Array.isArray(updates) || updates.length === 0) {
    res.status(400).json({ error: 'Body must be a non-empty array of {id, master_value}' });
    return;
  }

  // Validate and build value tuples
  const values: [number, number][] = [];
  for (const item of updates) {
    const { id, master_value } = item;
    if (typeof id !== 'number' || typeof master_value !== 'number') {
      res.status(400).json({ error: 'Each item must have a numeric id and number master_value' });
      return;
    }
    values.push([id, master_value]);
  }

  try {
    // Build VALUES part dynamically with correct casting
    const valuesSQL = values
      .map((_, i) => `($${i * 2 + 1}::INTEGER, $${i * 2 + 2}::INTEGER)`)
      .join(', ');

    const flatParams = values.flat(); // flatten [[id, master_value], ...] to [id, master_value, ...]

    const query = `
      WITH updates (id, master_value) AS (
        VALUES ${valuesSQL}
      )
      UPDATE segments
      SET master_value = updates.master_value
      FROM updates
      WHERE segments.id = updates.id AND segments.is_blocked = FALSE
      RETURNING segments.*;
    `;

    const result = await pool.query(query, flatParams);

    res.status(200).json({ updated: result.rows });

  } catch (err) {
    console.error('Error performing bulk update:', err);
    res.status(500).json({ error: 'Internal server error' });
    return;
  }
};
