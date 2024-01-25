import { useSuModalTransition } from './useSuModalTransition';
import { useCloseOnEscKey } from './useCloseOnEscKey';
import './style/style.css';

export const SuModal = ({
  children,
  isOpen,
  setIsOpen,
  suModal_transition = true,
  closeButton = true,
  closeOnClickOut = true,
  closeOnEscKey = true,
  styleOptions,
}) => {
  const setTransition = useSuModalTransition(isOpen);
  useCloseOnEscKey(isOpen, setIsOpen, closeOnEscKey);

  return (
    <>
      <div
        className="sumodal__background"
        onClick={closeOnClickOut ? () => setIsOpen(false) : undefined}
        style={{
          background:
            styleOptions && styleOptions.main_bg
              ? styleOptions.main_bg
              : 'rgba(117, 117, 117, 0.8)',
        }}
      >
        <div
          className={`${
            (suModal_transition && 'sumodal__initpos') || 'sumodal__container'
          } ${
            (suModal_transition && setTransition && 'sumodal__finalpos') || ''
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="sumodal__modal"
            style={{
              background:
                styleOptions && styleOptions.modal_bg
                  ? styleOptions.modal_bg
                  : 'white',
              border:
                styleOptions && styleOptions.border
                  ? styleOptions.border
                  : '5px solid black',
            }}
          >
            <div
              className="sumodal__modal__content"
              style={{
                width:
                  styleOptions && styleOptions.width
                    ? styleOptions.width
                    : 'auto',
                height:
                  styleOptions && styleOptions.height
                    ? styleOptions.height
                    : 'auto',
              }}
            >
              {children}
            </div>
            {closeButton && (
              <button
                type="button"
                className="sumodal__btn"
                onClick={() => setIsOpen(false)}
              >
                X
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
