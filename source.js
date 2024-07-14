
const url = args[0];
const namesInput = args[1];

const nameFunctions = namesInput.split("_");

const codeRequest = await Functions.makeHttpRequest({
  url: url
});

if (codeRequest.error) {
  console.error(codeRequest.error);
  throw Error(`Get text failed`);
  }


var codeSplice = "";
var nameSplice= "";
for(const index in nameFunctions){
  const nameFunction = nameFunctions[index];
  var code = decodeURIComponent(codeRequest.data[nameFunction]);  // get the code
  codeSplice = codeSplice + code + "\n";
  nameSplice = nameSplice + nameFunction;
  if(index < nameFunctions.length-1) nameSplice = nameSplice + ",";
}

codeSplice = codeSplice + "\n return [" + nameSplice + "];"
const returnFunction = new Function([],codeSplice);

const [strToUtf8ByteStr] = returnFunction(); // for single return
// const [strToUtf8ByteStr, uint8ArrayToByteStr] = returnFunction();  // for multi-returns

const test = strToUtf8ByteStr("12");
const test2 = uint8ArrayToByteStr([1,15,32]);

return Functions.encodeString(test + test2);

