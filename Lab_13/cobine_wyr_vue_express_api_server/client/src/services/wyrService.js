// Export a default object containing methods for external use
export default {
    // Define method 'getRandomWYR' fetches data from the endpoint '/wyr' and returns a promise
    getRandomWYR() {  // return a promise 
        return fetch ('/wyr').then(response => {
            return response.json()
        })
    }
}