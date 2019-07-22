const request = require("supertest")
const server = require("./server")

describe("server.js",()=>{
    describe("GET /",()=>{
        it("should respond with 200 status code",()=>{
            return request(server)
            .get("/")
            .then(response=>{
                expect(response.status).toBe(200)
            })
        })
        it("should respond with 200 OK async",async()=>{
            const response = await request(server).get("/")
            expect(response.status).toBe(200)
        })
        it("should respond with 200 OK async with done", (done)=>{
            request(server)
                .get("/")
                .then(response=>{
                    expect(response.status).toBe(200)
                    done()
                })
        })
    })
})