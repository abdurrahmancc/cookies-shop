/* react select library design */
export const searchCategorySelected = {
  singleValue: (provided) => ({
    ...provided,
    color: "#FFFFFF",
  }),
  control: (base, state) => ({
    ...base,
    color: "#FFFFFF",
    backgroundColor: "#7B3D11",
    borderRadius: 0,
    height: 53,
    width: 116,
    border: "none",
    padding: "0px",
    boxShadow: state.isFocused ? null : null,
  }),
  menu: (base) => ({
    ...base,
    borderRadius: 0,
    top: 48,
    right: 0,
    width: 150,
    zIndex: 100,
  }),
  menuList: (base) => ({
    ...base,
    padding: 0,
  }),
  dropdownIndicator: (base) => ({
    ...base,
    display: "none",
  }),
  input: (base, state) => ({
    ...base,
    color: "#000",
  }),
  defaultValue: (base, state) => ({
    ...base,
    color: "#000",
  }),
  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: "#FFFFFF",
      fontSize: 15,
    };
  },
};
