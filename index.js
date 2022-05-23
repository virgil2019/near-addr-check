const nearAPI = require("near-api-js");

this.nearConfig = {
    networkId: 'mainnet',
    keyStore: new nearAPI.keyStores.UnencryptedFileSystemKeyStore(
      credentialsPath
    ),
    nodeUrl: config.get('networks.' + this.chainName + '.nodeUrl'),
    contractName: config.get('networks.' + this.chainName + '.crossChainContractAddress'),
    accountId: config.get('networks.' + this.chainName + '.validatorAccountId'),
    walletUrl: config.get('networks.' + this.chainName + '.walletUrl'),
    helperUrl: config.get('networks.' + this.chainName + '.helperUrl'),
  };
  // near connect
  let near = await nearAPI.connect(this.nearConfig);
  this.account = await near.account(this.nearConfig.accountId);