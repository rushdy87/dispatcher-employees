import { dayInWritingMode } from '../../utils/rendering';
import './DayOffPaper.scss';

const DayOffPaper = ({ employee }) => {
  return (
    <div className='paper-container'>
      <div className='ref-name'>
        <span>وزارة النفط</span>
        <span>وكالة الوزارة لشؤون التصفية</span>
        <span>مصفى كربلاء</span>
      </div>
      <h1 className='paper-header'>استمارة طلب اجازة اعتيادية</h1>
      <div className='paper-date'>
        <span>
          التاريخ: <span>{employee.date}</span>
        </span>
      </div>
      <div className='paper-name-and-id'>
        <span>
          الاسم: <span>{employee.name}</span>
        </span>
        <span>
          رقم الحاسبة: <span>{employee.id}</span>
        </span>
      </div>
      <div className='paper-dep-and-job'>
        <span>القسم والشعبة: الإنتاج والتشغيل - الاستلام والتجهيز</span>
        <span>
          العنوان الوظيفي <span>{employee.job_title}</span>
        </span>
      </div>
      <div className='paper-days'>
        <span>
          يرجى الموافقة على منحي اجازة اعتيادية لمدة:{' '}
          <span>{dayInWritingMode(employee.days)}</span> فقط
        </span>
        <span>
          اعتبارا من تاريخ: <span>{employee.from}</span>
        </span>
      </div>
      <div className='paper-signature'>
        <span>توقيع طالب الاجازة</span>
      </div>
      <div className='paper-line' />
      <div className='acceptance'>
        <h1>نوافق على منحه اجازة</h1>
        <div className='acceptance-signature'>
          <span>المسؤول المباشر</span>
          <span>مدير القسم</span>
          <span>معاون المدير العام</span>
        </div>
      </div>
      <div className='paper-line' />
      <div className='paper-accounting'>
        <h1>إلى قسم الحسابات</h1>
        <span>
          الموما اليه يستحق
          <span className='paper-blank'></span>
          من الاجازة الاعتيادية براتب المذكورة
        </span>
        <span>
          اعلاه وبراتب تام و<span className='paper-blank'></span>
          يوماً بنصف راتب و
        </span>
        <span>يوماً بدون راتب</span>
        <div className='accounting-signature'>
          <span>موظف الاجازات</span>
          <span>مدير الأفراد</span>
        </div>
      </div>
    </div>
  );
};

export default DayOffPaper;
