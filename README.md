# fetch-metadata

Script to query the metadata of a NFT on solana. 

#### Pre-requisites

[Node.js](https://nodejs.org/en/download/)
<br><br>

#### How to run

```
git clone https://github.com/ammarlakho/fetch-metadata.git
cd fetch-metadata
npm i
node index.js
```

This should print the metadata of the following [NFT](https://solscan.io/token/EPr4X3pqEMT7Eeu8YH9bt7uTD2PQ96rDP6NGU5PVoXaD). <br>
Output should be something like this: <br> <br>
<img width="544" alt="Screenshot 2022-04-21 at 2 49 23 AM" src="https://user-images.githubusercontent.com/50075749/164329161-52849d62-7f5a-43d4-8d20-626cd7734eb1.png">


To fetch the metadata of any other NFT, run the following command: <br>
`node index.js <MINT_ADDRESS>` <br>
Replace <MINT_ADDRESS> with the address of the NFT.

