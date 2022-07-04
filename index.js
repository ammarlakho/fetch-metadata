const solanaWeb3 = require('@solana/web3.js');
const { Metadata } = require("@metaplex-foundation/mpl-token-metadata");
const axios = require('axios');

async function printMetaData() {
    const mintAddress = process.argv[2] ? process.argv[2] : 'EPr4X3pqEMT7Eeu8YH9bt7uTD2PQ96rDP6NGU5PVoXaD';
    try {
        const rpcUrl= "https://api.mainnet-beta.solana.com";
				
        const connection = new solanaWeb3.Connection(rpcUrl, 'confirmed');
    
        let mintPubkey = new solanaWeb3.PublicKey(mintAddress);
        let tokenmetaPubkey = await Metadata.getPDA(mintPubkey);
    
        const tokenmeta = await Metadata.load(connection, tokenmetaPubkey);
        const uriResponse = await axios.get(tokenmeta.data.data.uri);
        
        console.log('name:', tokenmeta.data.data.name, '\n');
        console.log('description:', uriResponse.data.description, '\n');
        console.log('royalty(basis points):', tokenmeta.data.data.sellerFeeBasisPoints, ', royalty(%):', (tokenmeta.data.data.sellerFeeBasisPoints / 100), '\n');
        console.log('uri:', tokenmeta.data.data.uri, '\n');
        console.log('image link:', uriResponse.data.image, '\n');
        const creators = tokenmeta.data.data.creators;
        for (let i=0; i<creators.length; i++) {
            console.log(`${i+1}. creator address: ${creators[i].address}, share: ${creators[i].share}`);
        }
    }
    catch(err) {
        console.log(err);
    }

}


printMetaData()
.then(() => process.exit(0))
.catch(error => {
    console.error(error);
    process.exit(1);
});