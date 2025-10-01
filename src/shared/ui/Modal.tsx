import { useEffect } from 'react';
import type { ReactNode } from 'react';
import clsx from 'clsx';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

export default function Modal({ children, onClose }: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className={clsx(
        'fixed inset-0 flex items-center justify-center bg-black/30 bg-opacity-50 z-50'
      )}
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-lg shadow-lg p-6 max-w-5xl w-full"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-2 z-10 rounded-full text-gray-500 hover:bg-gray-100 transition-colors"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>

        {children}
      </div>
    </div>
  );
}
