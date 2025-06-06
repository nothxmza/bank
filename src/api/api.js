const BASE_URL = 'http://localhost:3001/api/v1';

export const api = {

	async login(data) {
		const response = await fetch(`${BASE_URL}/user/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data)
		})
		return response.json()
	},

	async getUser(token) {
		const response = await fetch(`${BASE_URL}/user/profile`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			}
		})
		return response.json()
	},

	async updateUserName(data, token) {
		const response = await fetch(`${BASE_URL}/user/profile`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
			body: JSON.stringify(data)
		})
		return response.json()
	},
}