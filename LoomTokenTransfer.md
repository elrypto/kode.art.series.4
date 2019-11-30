Token contract
Loom equivelent token contract

0. git clone
- git clone https://github.com/loomnetwork/truffle-dappchain-example
- yarn install

1. generate extdev key
- yarn gen:extdev-key

2. deploy contracts to extdev
- yarn deploy:extdev

3. generate rinkeby address
- yarn gen:rinkeby-key
- see rinkeby address
    -- cat rinkeby_account
- get some eth (on rinkeby) from faucet
  --https://testnet.help/en/ethfaucet/rinkeby


4. export INFURA_API_KEY=xxxxxxxxxx

5. deploy contracts to rinkeby
- yarn deploy:rinkeby

6. map contracts, tokens and addresses
- node ./gateway-cli.js map-contracts token
- node ./gateway-cli.js map-contracts coin
- node ./gateway-cli.js map-accounts

7. mint and deposit nft tokens (erc721)
- node ./gateway-cli.js mint-token 1
- node ./gateway-cli.js deposit-token 1

8. check token-balance
- node ./gateway-cli.js token-balance -c eth
- node ./gateway-cli.js token-balance -c extdev
- node ./gateway-cli.js token-balance -a gateway -c eth

9. deposit erc20
- node ./gateway-cli.js deposit-coin 500
- node ./gateway-cli.js coin-balance -c eth
- node ./gateway-cli.js coin-balance -c extdev
- node ./gateway-cli.js coin-balance -a gateway -c extdev

10. withdraw nft
- node ./gateway-cli.js withdraw-token 1
- node ./gateway-cli.js token-balance -a gateway -c eth

11. widraft coins
- node ./gateway-cli.js withdraw-coin 200




