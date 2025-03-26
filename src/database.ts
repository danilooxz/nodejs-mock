export const users = new Map();

export function seedUsersStore() {
    users.set('danilo@cesul.com', {
        password: '123456'
    });
}