module.exports = {
    networks: {
        coverage: {
            host: 'localhost',
            network_id: '*', // eslint-disable-line camelcase
            port: 8545,
            gas: 0xfffffffffff,
            gasPrice: 0x01,
        },
        development: {
            host: 'localhost',
            port: 8545,
            network_id: '*', // eslint-disable-line camelcase
            gas: 6721975,
        },
    },
    mocha: {
        reporter: 'eth-gas-reporter',
    },
    compilers: {
        solc: {
            version: '0.5.12',
            docker: false,
            settings: {
                optimizer: {
                    enabled: true,
                    runs: 200,
                },
                evmVersion: 'petersburg',
            },
        },
    },
};
