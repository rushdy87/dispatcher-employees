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
