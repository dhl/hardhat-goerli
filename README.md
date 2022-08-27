# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
GAS_REPORT=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

# Deploying to Goerli testnet

1. Create .env file
```shell
cp .env.example .env
```

2. Update .env file with your Goerli private key and Alchemy API key

3. Deploy contract
```shell
npx hardhat run scripts/deploy.js --network goerli
```