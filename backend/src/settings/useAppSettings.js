const useAppSettings = () => {
  let settings = {};
  settings['custflow_app_email'] = 'noreply@custflowapp.com';
  settings['custflow_base_url'] = 'https://custflow.vercel.app';
  return settings;
};

module.exports = useAppSettings;
