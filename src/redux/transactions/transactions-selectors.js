export const isLoadingTransactions = state =>
  state.transactions.isLoadingTransactions;
export const getTransactionsData = state => state.transactions.transactionsData;
export const getTransactionsCount = state => state.transactions.count;
export const getTransactionsFilterOption = state =>
  state.transactions.filterOption;
export const getTransactionsSearchQuery = state =>
  state.transactions.searchQuery;
export const getCurrentPage = state => state.transactions.currentPage;
export const getItemsLimit = state => state.transactions.pageItemsLimit;
