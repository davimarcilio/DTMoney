import { ReactNode, useEffect, useState, useCallback } from "react";
import { createContext } from "use-context-selector";
import { api } from "../lib/axios";
interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}
interface CreateTransactionInput {
  description: string;
  price: number;
  category: string;
  type: "income" | "outcome";
}
interface TransactionContextType {
  transactions: Transaction[];
  fetchTransactions: (query?: string, page?: number) => Promise<void>;
  createTransaction: (data: CreateTransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext({} as TransactionContextType);

interface TransactionsProviderProps {
  children: ReactNode;
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const fetchTransactions = useCallback(
    async (query?: string, page?: number) => {
      const response = await api.get("transactions", {
        params: {
          _sort: "createdAt",
          _order: "desc",
          _limit: 10,
          _page: page,
          q: query,
        },
      });
      setTransactions(response.data);
    },
    []
  );
  const createTransaction = useCallback(
    async (data: CreateTransactionInput) => {
      const { category, description, price, type } = data;
      const response = await api.post("transactions", {
        category,
        description,
        price,
        type,
        createdAt: new Date(),
      });
      setTransactions((state) => [response.data, ...state]);
    },
    []
  );

  // function setTransactionsPagination() {
  //   // const transactionsPagination = transactions.slice(10, -10);
  //   // TOTAL PAGES =>  Math.ceil(35 / 10);
  //   const transactionsPagination = transactions.slice(0, 10);
  //   console.log(transactionsPagination);
  // }

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);
  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
