import React, {
  DetailedHTMLProps,
  ForwardedRef,
  forwardRef,
  HTMLAttributes,
} from 'react';
import classNames from 'classnames';

export interface IInputCodeProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string;
  name?: string;
  type?: string;
  error?: string;
}

export const InputCode = forwardRef(
  (
    { className, name, type, error, ...rest }: IInputCodeProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    return (
      <>
        <input
          className={classNames(className, 'Input', {
            Input__error: error,
          })}
          data-testid="test-input"
          name={name}
          type={type}
          ref={ref}
          {...rest}
        />
      </>
    );
  }
);

InputCode.displayName = 'FormInputCode';
