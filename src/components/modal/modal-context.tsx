"use client";

import { createContext, useContext, useState, useCallback } from "react";

export type ModalId = "feedback" | null;

interface ModalContextType {
  modalId: ModalId;
  modalProps: Record<string, unknown>;
  openModal: (id: ModalId, props?: Record<string, unknown>) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | null>(null);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [modalId, setModalId] = useState<ModalId>(null);
  const [modalProps, setModalProps] = useState<Record<string, unknown>>({});

  const openModal = useCallback((id: ModalId, props: Record<string, unknown> = {}) => {
    setModalId(id);
    setModalProps(props);
  }, []);

  const closeModal = useCallback(() => {
    setModalId(null);
    setModalProps({});
  }, []);

  return (
    <ModalContext.Provider value={{ modalId, modalProps, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
