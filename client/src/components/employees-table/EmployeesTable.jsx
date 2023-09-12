import { useContext, useState } from 'react';
import { EmployeesContext } from '../../contexts/employees-context';
import { MdPersonRemoveAlt1, MdOutlineEditNote } from 'react-icons/md';
import './EmployeesTable.scss';
import TablePagination from '../table-pagination/TablePagination';
import usePagination from '../../hooks/usePagination';

const EmployeesTable = () => {
  const [columns, setColumns] = useState({
    id: { value: true, ar: 'رقم الحاسبة' },
    name: { value: true, ar: 'الاسم' },
    job_title: { value: true, ar: 'العنوان الوظيفي' },
    degree: { value: false, ar: 'التحصيل الدراسي' },
    status: { value: true, ar: 'الحالة الوظيفية' },
    workday: { value: false, ar: 'نوع الدوام' },
    joining_date: { value: false, ar: 'تاريخ المباشرة' },
    phone_number: { value: false, ar: 'رقم الهاتف' },
    birthdate: { value: false, ar: 'تاريخ الميلاد' },
    address: { value: false, ar: 'العنوان' },
  });

  const { employees } = useContext(EmployeesContext);

  const { currentData, currentPage, nextPage, prevPage, goToPage, totalPages } =
    usePagination(employees, 15);

  const renderHeader = Object.keys(columns).map((key) => {
    if (columns[key].value) {
      return (
        <th key={key} className={`${key}-column`}>
          {columns[key].ar}
        </th>
      );
    }
    return null;
  });

  const renderEmployess = currentData.map((employee) => {
    return (
      <tr key={employee.id}>
        {Object.keys(columns).map((key) => {
          if (columns[key].value) {
            return (
              <td key={key} className={`${key}-column`}>
                {employee[key]}
              </td>
            );
          }
          return null;
        })}
        {
          <>
            <td>
              <MdPersonRemoveAlt1 onClick={() => {}} />
            </td>
            <td>
              <MdOutlineEditNote onClick={() => {}} />
            </td>
          </>
        }
      </tr>
    );
  });

  return (
    <>
      <TablePagination
        currentPage={currentPage}
        nextPage={nextPage}
        prevPage={prevPage}
        goToPage={goToPage}
        totalPages={totalPages}
      />
      <table>
        <thead>
          <tr>
            {renderHeader}
            {
              <>
                <th>حذف</th>
                <th>تعديل</th>
              </>
            }
          </tr>
        </thead>
        <tbody>{currentData.length > 0 && renderEmployess}</tbody>
      </table>
    </>
  );
};

export default EmployeesTable;
