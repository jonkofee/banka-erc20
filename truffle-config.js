const MNEMONIC = 'trophy unveil photo mobile embody style random delay such unveil fiction artist'
const NETWORK = 'mainnet'

const HDWalletProvider = require('truffle-hdwallet-provider')
console.log(MNEMONIC)
module.exports = {
    networks: {
        live: {
            provider: () => new HDWalletProvider(MNEMONIC, `https://${NETWORK}.infura.io`),
            network_id: '*',
            gas: 6500000,           // Default gas to send per transaction
            gasPrice: 1000000000,  // 10 gwei (default: 20 gwei)
            timeoutBlocks: 200,     // # of blocks before a deployment times out  (minimum/default: 50)
            skipDryRun: false        // Skip dry run before migrations? (default: false for public nets )
        },
    },
    compilers: {
        solc: {
            settings: {
                optimizer: {
                    enabled: true
                },
            }
        }
    }
};