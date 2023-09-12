import { createContext, useState } from 'react';

export const TableColumnsContext = createContext(null);

export const TableColumnsContextProvider = ({ children }) => {
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

  return (
    <TableColumnsContext.Provider value={{ columns, setColumns }}>
      {children}
    </TableColumnsContext.Provider>
  );
};
