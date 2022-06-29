const createTransaction = (oldData, newData) => {
  if (oldData) {
    window.sessionStorage.setItem(
      "transaction",
      JSON.stringify([...oldData, newData])
    );
  } else {
    window.sessionStorage.setItem("transaction", JSON.stringify([newData]));
  }
};

const useCreateTransaction = () => {
  return {
    createTransaction,
  };
};

export { useCreateTransaction };
