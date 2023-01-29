import { useState, createContext } from "react";

const ModalContext = createContext();

export const ModalProviderPosts = ({ children }) => {
  const [modalShow, setModalShow] = useState([false, "", null]);
  return (
    <ModalContext.Provider value={[modalShow, setModalShow]}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
