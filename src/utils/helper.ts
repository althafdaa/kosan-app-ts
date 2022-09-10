export const getLocalStorageValue = (name: string) => {
  if (typeof window !== undefined) {
    const data = localStorage.getItem(name);
    if (data) return JSON.parse(data);
    else return null;
  }
};

export const setLocalStorageValue = (key: string, value: object) => {
  const stringify = JSON.stringify(value);
  localStorage.setItem(key, stringify);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isFormValid = (name: string, formik: any) => {
  if (formik.errors[name] && formik.touched[name]) return true;
  else false;
};
