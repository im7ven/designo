import { ReactNode } from "react";
import Footer from "../components/shared/Footer";

const DesignLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <main className="design-page-bg">{children}</main>
      <Footer />
    </>
  );
};

export default DesignLayout;
