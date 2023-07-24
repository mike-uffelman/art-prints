const config = async () => {
    return {
        transformIgnorePatterns: ['/node_modules/(?!(axios)/)'],
    }
}

module.exports = config