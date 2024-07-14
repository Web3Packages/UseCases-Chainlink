
const { Contract } = require("ethers");
const fs = require("fs");
const path = require("path");
const { signer } = require("../connection.js");
const abi = require("../package/abi/FunctionsConsumer.json");


// sepolia test
const consumerAddress = "0xbc38276Aa222cf14f45449a6A55baeDf164813c7";
const subscriptionId = "1759";


const sendRequest = async () => {
  if (!consumerAddress || !subscriptionId) {
    throw Error("Missing required environment variables.");
  }

  const functionsConsumer = new Contract(consumerAddress, abi, signer);

  const source = fs
    .readFileSync(path.resolve(__dirname, "../source.js"))
    .toString();

  // single file
  // const url = "https://0x5d0b47bdd72265c0443d6f96065aa45c24677f04.11155111.w3link.io/strToUtf8ByteStr@1.0.1.txt";
  // const namesInput = "strToUtf8ByteStr";

  // multi-files
  const url = "https://0x5d0b47bdd72265c0443d6f96065aa45c24677f04.11155111.w3link.io/strToUtf8ByteStr@1.0.1_uint8ArrayToByteStr@1.0.1.txt";
  const namesInput = "strToUtf8ByteStr_uint8ArrayToByteStr";


  const args = [url, namesInput];

  const callbackGasLimit = 300_000;  // 300_000;


  console.log("\n Sending the Request....")
  const requestTx = await functionsConsumer.sendRequest(
    source,
    // Location.DONHosted, // Location.DONHosted, Location.Remote
    // encryptedSecretsRef,
    args,
    [], // bytesArgs can be empty
    subscriptionId,
    callbackGasLimit
  );

  const txReceipt = await requestTx.wait(1);
 
  console.log(
    `Request made.  TxHash is ${requestTx.hash}`
  );
  
  console.log("");

};

sendRequest().catch(err => {
  console.log("\nError making the Functions Request : ", err);
});

