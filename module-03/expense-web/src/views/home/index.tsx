import ExpenseTable from "./components/table";
import CreateModal from "./components/modal/createModal";
import ExpenseFormik from "./components/form/expenseFormik";
export default function HomeView() {
  return (
    <div>
      <CreateModal>
        <ExpenseFormik />
      </CreateModal>
      <ExpenseTable />
    </div>
  );
}
