require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remain minor gloom enrich orange genre'; 
let testAccounts = [
"0xb109960dd5d5f3825ab589c533dc30114ee1331284cb6b095a88dbe95d1144ba",
"0x4ae10043c43d41ab98103f0ff225c670c117fd1a0fac0d5898828ef65120be6d",
"0x2231bfd74608a315256fc7ed1ed7f6d1dc0d6650e6d78dad413d1b2eb9c3d366",
"0x884205f9a615c90486b74ea0769bd61692014f29175809d669f3c9c506f5715f",
"0x092b04f061e344e290cef34ae61bd0ed0cd7b049570ace5d3eabe63f600d240e",
"0x0aace7752ce32c97eb384c3502dbf5dc6bb24e14eb7d71b7d35f8edb673764d4",
"0xd6c95432bb08180127028aabee5696a8aa541bf892c002d46c66b77dcdff8890",
"0x70f7e1c1af36fa2b27e43a56f0149fac34c027ea74279ab5fb97a67df8f6c233",
"0xed3f72b35c599f8ea39f3675d07a391f6f9f15bcb7eb390b85a63d7eb66d3d84",
"0x88f016134e57b397fa6f360abd7e388d48b755064f8871111ac192d2428e41d9"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


