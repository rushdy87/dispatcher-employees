export const renderJobTitles = (jobTitles) =>
  jobTitles.map((jobTitle) => {
    return (
      <option key={jobTitle.id} value={jobTitle.id}>
        {jobTitle.title_name}
      </option>
    );
  });
export const renderDegrees = (degrees) =>
  degrees.map((degree) => {
    return (
      <option key={degree.id} value={degree.id}>
        {degree.degree_name}
      </option>
    );
  });

export const dayInWritingMode = (day) => {
  const days = [
    {
      num: 1,
      text: 'يوم واحد',
    },
    {
      num: 2,
      text: 'يومان',
    },
    {
      num: 3,
      text: 'ثلاثة أيام',
    },
    {
      num: 4,
      text: 'أربعة أيام',
    },
    {
      num: 5,
      text: 'خمسة أيام',
    },
    {
      num: 6,
      text: 'ستة أيام',
    },
    {
      num: 7,
      text: 'سبعة أيام',
    },
    {
      num: 8,
      text: 'ثمانية أيام',
    },
    {
      num: 9,
      text: 'تسعة أيام',
    },
    {
      num: 10,
      text: 'عشرة أيام',
    },
    {
      num: 11,
      text: 'أحد عشر يوماً',
    },
    {
      num: 12,
      text: 'إثناعشر يوماً',
    },
    {
      num: 13,
      text: 'ثلاثة عشر يوماً',
    },
    {
      num: 14,
      text: 'أربعة عشر يوماً',
    },
    {
      num: 15,
      text: 'خمسة عشر يوماً',
    },
    {
      num: 16,
      text: 'ستة عشر يوماً',
    },
    {
      num: 17,
      text: 'سبعة عشر يوماً',
    },
    {
      num: 18,
      text: 'ثمانية عشر يوماً',
    },
    {
      num: 19,
      text: 'تسعة عشر يوماً',
    },
    {
      num: 20,
      text: 'عشرون يوماً',
    },
    {
      num: 21,
      text: 'واحد وعشرون يوماً',
    },
    {
      num: 22,
      text: 'إثنان وعشرون يوماً',
    },
    {
      num: 23,
      text: 'ثلاثة وعشرون يوماً',
    },
    {
      num: 24,
      text: 'أربعة وعشرون يوماً',
    },
    {
      num: 25,
      text: 'خمسة وعشرون يوماً',
    },
    {
      num: 26,
      text: 'ستة وعشرون يوماً',
    },
    {
      num: 27,
      text: 'سبعة وعشرون يوماً',
    },
    {
      num: 28,
      text: 'ثمانية وعشرون يوماً',
    },
    {
      num: 29,
      text: 'تسعة وعشرون يوماً',
    },
    {
      num: 30,
      text: 'ثلاثثون يوما',
    },
  ];
  return days[day - 1].text;
};
