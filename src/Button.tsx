type ButtonProps = {
  count: number;
  onClick: () => void;
};

function Button({ count, onClick }: ButtonProps) {
  return (
    <>
      <button onClick={onClick}>
        Clicked {count} times
      </button>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}

export default Button;
