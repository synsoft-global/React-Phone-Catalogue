/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
export const showToast = (
  snackbar: any,
  message: string,
  key: string,
  variant: string,
  closeSnackbar: any,
) => {
  snackbar(message, {
    variant, persist: true, preventDuplicate: true, key,
  });
  setTimeout(() => {
    closeSnackbar(key);
  }, 4000);
};
