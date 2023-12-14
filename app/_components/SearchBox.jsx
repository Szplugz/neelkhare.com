import React from "react";
import { useContext, useEffect } from "react";
import { forwardRef } from "react";

const SearchBox = forwardRef(function SearchBox(props, ref) {
  const { isVisible, id } = props;
  console.log(isVisible);

  useEffect(() => {
    if (isVisible) {
      ref.current.focus();
    }
  }, []);

  // you can use a more precise way to center it later but it seems like it can be done directly through this component.
  return isVisible ? <input id={id} ref={ref} className="" /> : null;
});

export default SearchBox;
