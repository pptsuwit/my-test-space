"use client";

import { useGlobalContext } from "@/context/store";
import Modal from "@/components/baseComponent/Modal";
import PageProvider from "@/components/helpers/PageProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  const { modal, setModal, modalMessage } = useGlobalContext();
  return (
    <PageProvider>
      <Modal open={modal} handleClose={() => setModal(false)} body={modalMessage}></Modal>
      {children}
    </PageProvider>
  );
}
