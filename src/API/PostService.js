
export default class PostService {
    static async getAll() {
        const url = `https://jsonplaceholder.typicode.com/posts`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Произошла ошибка!');
            }
            return response
        } catch (error) {
            throw error;
        }
    }
}