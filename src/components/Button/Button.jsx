import { Btn } from './Button.styled';

const Button = ({ type, title, className, children }) => {
  return (
    <>
      <Btn type={type} className={className || ''}>
        {children}
        {title}
      </Btn>
    </>
  );
};

export default Button;
