const admin = require("firebase-admin");

const serviceAccount = require("../../db/ecommerce-be-1fa4c-firebase-adminsdk-a2g9g-c026732fd1.json");

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
});

class FirebaseContainer {
	constructor() {
		this.db = admin.firestore();
	}

	async get(collection, id) {
		if (!id) {
			const query = await this.db.collection(collection).get();
			const docs = query.docs;
			const response = docs.map((doc) => ({ id: doc.id, ...doc.data() }));
			return response;
		}

		const doc = await this.db.collection(collection).doc(id).get();
		const response = { id: doc.id, ...doc.data() };
		return response;
	}

	async add(collection, data, id) {
		if (!id) {
			const doc = await this.db.collection(collection).add(data);
			const response = { id: doc.id, ...data };
			return response;
		}

		await this.db.collection(collection).doc(id).set(data);
		const response = { id, ...data };
		return response;
	}

	async update(collection, id, data) {
		await this.db.collection(collection).doc(id).update(data);
		const response = { id, ...data };
		return response;
	}

	async delete(collection, id) {
		await this.db.collection(collection).doc(id).delete();
		return { id };
	}
}

module.exports = FirebaseContainer;