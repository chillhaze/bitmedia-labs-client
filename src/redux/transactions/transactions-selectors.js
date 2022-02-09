export const isLoadingTransactions = state =>
  state.transactions.isLoadingTransactions;
export const getTransactionsData = state => state.transactions.transactionsData;
export const getCurrentPage = state => state.transactions.currentPage;
export const getItemsLimit = state => state.transactions.itemsLimit;
export const getTransactionsCount = state => state.transactions.count;
export const getTransactionsTimestamp = state => state.transactions.timestamp;
// export const getType = (state) => state.transactions.type;
