const useDate = ({ settings }) => {
  const { custflow_app_date_format } = settings;

  const dateFormat = custflow_app_date_format;

  return {
    dateFormat,
  };
};

module.exports = useDate;
