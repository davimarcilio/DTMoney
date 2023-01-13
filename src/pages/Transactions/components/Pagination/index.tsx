import { CaretLeft, CaretRight } from "phosphor-react";
import { FormEvent, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as Dialog from "@radix-ui/react-dialog";
import { useContextSelector } from "use-context-selector";
import { LoadingModal } from "../../../../components/LoadingModal";
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

  interface TypeProps {
    selected: number;
  }

  interface FormProps {
    type: TypeProps;
  }

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<FormProps>();
  async function handleGetPage(data: FormProps) {
    console.log(data);
    await fetchTransactions("", data.type.selected + 1);
  }
  return (
    <PaginateContainer onClick={handleSubmit(handleGetPage)}>
      <Controller
        control={control}
        name="type"
        render={({ field }) => {
          return (
            <Paginate
              onPageChange={field.onChange}
              containerClassName={"PaginateRContainer"}
              previousLabel={<CaretLeft size={24} />}
              nextLabel={<CaretRight size={24} />}
              pageCount={numberOfPagesToPagination}
            />
          );
        }}
      />
      <LoadingModal hidden={isSubmitting} />
    </PaginateContainer>
  );
}
