import { ReactNode, useEffect, useRef } from 'react';

type Prop = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export function Modal({ children, isOpen, onClose }: Prop) {
  const modal = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (modal.current) {
      if (isOpen) {
        modal.current.showModal();
      } else {
        modal.current.close();
      }
    }
  }, [isOpen]);

  return (
    <dialog onClose={onClose} ref={modal}>
      {children}
    </dialog>
  );
}
