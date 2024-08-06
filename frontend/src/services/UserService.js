import axios from 'axios';

// Task 8: Write code for user service here
const USER_API_BASE_URL = '/users';

class UserService {
    async getUsers() {
        try {
            const response = await axios.get(USER_API_BASE_URL);
            return response.data;
        } catch (error) {
            console.error('Error fetching users:', error);
            throw error; 
        }
    }

    async createUser(user) {
        try {
            const response = await axios.post(USER_API_BASE_URL, user);
            return response.data;
        } catch (error) {
            console.error('Error creating user:', error);
            throw error;
        }
    }

    async getUserById(userId) {
        try {
            const response = await axios.get(`${USER_API_BASE_URL}/${userId}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching user with ID ${userId}:`, error);
            throw error;
        }
    }

    async updateUser(user, userId) {
        try {
            const response = await axios.put(`${USER_API_BASE_URL}/${userId}`, user);
            return response.data;
        } catch (error) {
            console.error(`Error updating user with ID ${userId}:`, error);
            throw error;
        }
    }

    async deleteUser(userId) {
        try {
            const response = await axios.delete(`${USER_API_BASE_URL}/${userId}`);
            return response.data;
        } catch (error) {
            console.error(`Error deleting user with ID ${userId}:`, error);
            throw error;
        }
    }
}

export default new UserService();