# Web3Storage-UseCases-Chainlink

## Getting Started
1. First, git clone this project.
```
git clone https://github.com/Web3Packages/UseCases-Chainlink.git
```
or
```
git clone git@github.com:Web3Packages/UseCases-Chainlink.git
```


2. Copy the ".env.example" file and modify it to ".env". Then, make the necessary configuration changes. For example, private key.

3. Install all dependencies
```
npm install
```


## Make request to test the source 

1. Change the function returns you want in "./source.js"
```
// for single return
const [strToUtf8ByteStr] = returnFunction(); 
```
or 
```
// for multi-returns
const [strToUtf8ByteStr, uint8ArrayToByteStr, ...] = returnFunction();  
```


2. Change the url and namesInput in "/scripts/01_reques.js"
```
  // single file
  const url = "https://0x5d0b47bdd72265c0443d6f96065aa45c24677f04.11155111.w3link.io/strToUtf8ByteStr@1.0.1.txt";
  const namesInput = "strToUtf8ByteStr";
```
or 
```
  // multi-files
  const url = "https://0x5d0b47bdd72265c0443d6f96065aa45c24677f04.11155111.w3link.io/strToUtf8ByteStr@1.0.1_uint8ArrayToByteStr@1.0.1.txt";
  const namesInput = "strToUtf8ByteStr_uint8ArrayToByteStr";
```
3. run the script to test the source
```
node ./scripts/01_reques.js
```



## Get the result of test
You can get the reponses of the request you submited after a while
```
node ./scripts/02_readResponse.js
```