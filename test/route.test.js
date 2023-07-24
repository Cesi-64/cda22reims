const request = require('supertest')
let server

describe('Router TEST', () => {

    beforeEach(() => {
        server = require('../server')
    })

    afterEach(() => {
        server.close()
    })

    describe('GET /', () => {
        it('Should return 200', async () => {
            const response = await request(server).get('/')
            expect(response.status).toBe(200)
        })

        it('Should return 501', async () => {
            const response = await request(server).get('/ghjgjghjghjj')
            expect(response.status).toBe(501)
        })        
    })

    describe('TEST ON MARCEL', () => {
        it('Should return 200', async () => {
            const response = await request(server).get('/marcel/12')
            expect(response.status).toBe(200)
        })

        it('Should return 204', async () => {
            const response = await request(server).delete('/marcel/5')
            expect(response.status).toBe(204)
        })
    })

})