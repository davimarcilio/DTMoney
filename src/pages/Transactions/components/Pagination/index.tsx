import { CaretLeft, CaretRight } from "phosphor-react";
import { FormEvent, useState } from "react";
import { useContextSelector } from "use-context-selector";
import { TransactionsContext } from "../../../../contexts/TransactionsContext";
import { Paginate, PaginateContainer } from "./style";

export function Pagination() {
  const { fetchTransactions, transactionsCount } = useContextSelector(
    TransactionsContext,
    (context) => {
      return {
        fetchTransactions: context.fetchTransactions,
        transactionsCount: context.transactionsCount,
      };
    }
  );

  const numberOfPagesToPagination = Math.ceil(transactionsCount / 10);

  interface PaginationFormProps {
    event: FormEvent;
    index: null;
    isActive: boolean;
    isBreak: boolean;
    isNext: boolean;
    isPrevious: boolean;
    nextSelectedPage: number;
    selected: number;
  }

  function handleGetPage(e: PaginationFormProps) {
    fetchTransactions("", e.nextSelectedPage + 1);
  }
  return (
    <PaginateContainer>
      <Paginate
        onClick={handleGetPage}
        containerClassName={"PaginateRContainer"}
        previousLabel={<CaretLeft size={24} />}
        nextLabel={<CaretRight size={24} />}
        pageCount={numberOfPagesToPagination}
      />
    </PaginateContainer>
  );
}
