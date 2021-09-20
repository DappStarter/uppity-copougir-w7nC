require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install logic bottom trophy name random saddle assume install deputy frame gasp'; 
let testAccounts = [
"0xd60bd5ec6edf35ca4418aa531e9e55d94e0de5947a9d9f4f8dc39d005a159e39",
"0x145c25d73da391b8e62a350af04cd32494a8e9ffccf5b36c8135515c4aaa6947",
"0x2e6b449935e86e249da719591942ab206dc185f229c16df9ec4045264c91086e",
"0x7d7cdb14a1d0391b590f345e008166720ee347eedf884d82a9c39f88f19f8997",
"0x93d49d6272f09d0b8a09954dc852f5faf57da748d0d0d0f2f43cd48798b1af8d",
"0x053e097e285f9cd330b2b2e8b6b362ec0f3ea8a26bbb4d07c9ae8e2c3b4dbd18",
"0xb50751c1aa3025f7484a406de810fd2d0007996f861a1973c84e8e5e9ce3614a",
"0x9edc6bce2fbf5d705ad9289f6fbfad0c418d3f82992aa62785160ee95eff3043",
"0x3e37f4557d5c79308debbd077fb9c9a06e60654825415265ddbad91838def7f4",
"0x29efe236704f27a77d349be96e2498e6f8e5ea4288349533eb0933f8bed2d6cb"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

