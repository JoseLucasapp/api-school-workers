const app = require('../src/app')
const request = require('supertest')
const route = "/api/workers"

describe(`POST ${route}`, () => {

    const correctBody = {
        name: 'Lucas',
        age: 21,
        role: 'TEACHER'
    }

    it("Should get a 200 status code, and add a new worker", async () => {
        const response = await request(app).post(route).send(correctBody)
        expect(response.statusCode).toBe(200)
    })

    it("Should specify json in the content type header.", async () => {
        const response = await request(app).post(route).send(correctBody)

        expect(response.headers['content-type']).toEqual(expect.stringContaining('json'))
    })

    it("Should get an validation error", async () => {
        const body = [
            {
                name: 'Lucas',
                role: 'TEACHER'
            },
            {
                age: 21,
                role: 'TEACHER'
            },
            {
                name: 'Lucas',
                age: 21
            },
            {}
        ]
        for (const user of body) {
            const response = await request(app).post(route).send(user)

            expect(response.statusCode).toBe(422)
        }
    })
})

describe(`GET ${route}`, () => {
    it("Should get all workers", async () => {
        const response = await request(app).get(route)

        expect(response.statusCode).toBe(200)
        expect(response.body).toHaveProperty('data')
        expect(response.body.data.length).toBeGreaterThanOrEqual(0)
    })
})

describe(`GET ${route}:id`, () => {
    it("Should get a 200 status code", async () => {
        const response = await request(app).get(`${route}/6289c678746aa04a0b689a34`)

        expect(response.statusCode).toBe(200)
    })
    it("Should get a 404 status code", async () => {
        const response = await request(app).get(`${route}/6289c678746aa04aab689a34`)

        expect(response.statusCode).toBe(404)
    })
})

describe(`PUT ${route}:id`, () => {
    const newBody = {
        name: "José Lucas"
    }
    it("Should get a 200 status code", async () => {
        const response = await request(app).put(`${route}/6289c678746aa04a0b689a34`).send(newBody)

        expect(response.statusCode).toBe(200)
    })
    it("Should get a 404 status code", async () => {
        const response = await request(app).put(`${route}/6289c678746aa04aab689a34`).send(newBody)

        expect(response.statusCode).toBe(404)
    })
})

describe(`DELETE ${route}/:id`, () => {
    it("Should get a 200 status code", async () => {
        const response = await request(app).delete(`${route}/6289c6ee4582a34d7190c1f8`)

        expect(response.statusCode).toBe(200)
    })
    it("Should get a 404 status code", async () => {
        const response = await request(app).delete(`${route}/6289c259b4c24358d3ae0003`)

        expect(response.statusCode).toBe(404)
    })
})