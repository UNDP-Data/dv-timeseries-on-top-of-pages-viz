interface Props {
  number: string;
  title: string;
}
export function ValueCard(props: Props) {
  const { number, title } = props;
  return (
    <div style={{ flexGrow: 1 }}>
      <h2 className='undp-typography bold margin-bottom-03'>{number}</h2>
      <p className='undp-typography large-font'>{title}</p>
    </div>
  );
}
