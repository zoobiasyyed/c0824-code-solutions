import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

type Prop = {
  isOpen: boolean;
  positionTo: HTMLElement | null;
  onClose: () => void;
  children: ReactNode;
};

export function Popup({ isOpen, positionTo, onClose, children }: Prop) {
  const r = positionTo?.getBoundingClientRect();
  const top = r ? r.top + r.height : '50%';
  const left = r ? r.left + r.width / 2 : '50%';

  if (!isOpen) return null;
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose}></div>
      <div style={{ top, left }} className="border">
        {children}
      </div>
    </>,
    document.body
  );
}
