function Flex({ children, classNames }) {
  return (
    <div className={`flex items-center gap-x-4 ${classNames}`}>{children}</div>
  );
}

export default Flex;
