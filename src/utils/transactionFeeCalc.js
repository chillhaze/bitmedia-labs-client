import hexToDecConvert from './hexToDecConvert';
import convert from 'ether-converter';

const transactionFeeCalc = (gas, gasPrice) => {
  const weiGasLimit = hexToDecConvert(gas);
  const weiGasPrice = hexToDecConvert(gasPrice);
  const transactionFee = weiGasLimit * weiGasPrice;
  const convertedToEthFee = convert(transactionFee, 'wei');

  return Number(convertedToEthFee.ether).toFixed(9);
};

export default transactionFeeCalc;
