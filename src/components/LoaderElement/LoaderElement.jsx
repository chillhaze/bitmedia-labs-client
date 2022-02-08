import { TailSpin } from 'react-loader-spinner';
import { LoaderWrapper } from 'components/LoaderElement/LoaderElement.styled';

const LoaderElement = () => {
  return (
    <LoaderWrapper>
      <TailSpin type="TailSpin" color={'#3A80BA'} height={66} width={66} />
    </LoaderWrapper>
  );
};

export default LoaderElement;
