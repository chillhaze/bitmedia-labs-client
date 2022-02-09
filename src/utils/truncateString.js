const truncateString = (str, n, isMobile) => {
  if (isMobile) {
    n = n / 2;
  }
  return str?.length > n ? str.substr(0, n - 1) + '...' : str;
};

export default truncateString;
