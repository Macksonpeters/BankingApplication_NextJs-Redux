import useApiGet from "@/hooks/UseApiGet";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  toggleModal: true,
  toggleNavigate: true,
  accountNumber: "",
  balance: 0,
  bank: [],
  bankCode: 0,
  bankName: "",
  receiverAccountNumber: 0,
  receiverAccountName: "",
  transferAmount: 0,
};

const applicationSlice = createSlice({
  name: "ApplicationSlice",
  initialState,
  reducers: {
    updateName: (state, action) => {
      state.name = action.payload;
    },
    toggleModal: (state, action) => {
      state.toggleModal = !action.payload;
    },
    toggleNavigate: (state, action) => {
      state.toggleNavigate = !action.payload;
    },
    createAccountNumber: (state) => {
      state.accountNumber = Math.floor(Math.random() * 10000000000).toString();
    },
    fundBalance: (state, action) => {
      state.balance = state.balance + Number(action.payload);
    },
    updateBalance: (state, action) => {
      state.balance = action.payload;
    },
    updateBank: (state, action) => {
      state.bank = action.payload;
    },
    updateBankCode: (state, action) => {
      state.bankCode = action.payload;
    },
    updateBankName: (state, action) => {
      state.bankName = action.payload;
    },
    updateReceiverAccountNumber: (state, action) => {
      state.receiverAccountNumber = action.payload;
    },
    updateReceiverAccountName: (state, action) => {
      state.receiverAccountName = action.payload;
    },
    updateTransferAmount: (state, action) => {
      state.transferAmount = action.payload;
    },
  },
});

export const {
  updateName,
  toggleModal,
  createAccountNumber,
  fundBalance,
  updateBalance,
  toggleNavigate,
  updateBank,
  updateBankCode,
  updateBankName,
  updateReceiverAccountNumber,
  updateReceiverAccountName,
  updateTransferAmount,
} = applicationSlice.actions;

export default applicationSlice.reducer;
