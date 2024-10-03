export const UseDate = () => {
  const formatDateForAPI = (value: string) => {
    // value = yyyy-mm-ddThh:mm -> dd/mm/yyyy hh:mm

    const [year, month, day, time] = value.replace('T', '-').split('-');

    return `${day}/${month}/${year} ${time}`;
  };

  const formatAPIdate = (value: string) => {
    // value = yyyy-mm-ddThh:mm:ssZ -> dd/mm/yyyy hh:mm

    const [year, month, day, time] = value
      .slice(0, -4)
      .replace('T', '-')
      .split('-');

    return `${day}/${month}/${year} ${time}`;
  };

  return {
    formatDateForAPI,
    formatAPIdate
  };
};
