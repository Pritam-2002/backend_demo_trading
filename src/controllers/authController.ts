import { users } from '../constant/db/dummyDB';

export const updateUser = (req: any, res: any) => {
    try {
        const { id } = req.params;
        const { name, role, password } = req.body;

        const userIndex = users.findIndex(user => user.id === id);

        if (userIndex === -1) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Update the user fields if they are provided
        if (name) users[userIndex].name = name;
        if (role) users[userIndex].role = role;
        if (password) users[userIndex].password = password;

        return res.status(200).json({ message: 'User updated successfully', user: users[userIndex] });
    } catch (error) {
        console.error('Error updating user:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};
