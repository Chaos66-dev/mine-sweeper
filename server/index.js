import server from './server/server.js'

const PORT = 4000

server.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`))