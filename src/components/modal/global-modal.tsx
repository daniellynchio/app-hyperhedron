"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useModal, ModalId } from "./modal-context";
import { FeedbackModal } from "./feedback-modal";

const modalRegistry: Record<Exclude<ModalId, null>, React.ComponentType> = {
  feedback: FeedbackModal,
};

export function GlobalModal() {
  const { modalId, closeModal } = useModal();

  if (!modalId) return null;

  const ModalContent = modalRegistry[modalId];

  return (
    <Dialog open={!!modalId} onOpenChange={(open) => !open && closeModal()}>
      <DialogContent>
        <ModalContent />
      </DialogContent>
    </Dialog>
  );
}
