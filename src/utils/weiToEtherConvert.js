import convert from 'ether-converter';
import hexToDecConvert from './hexToDecConvert';

const weiToEtherConvert = value => {
  const wei = hexToDecConvert(value);
  const ether = convert(wei, 'wei');

  return Number(ether.ether).toFixed(18);
};

export default weiToEtherConvert;
