interface Props {
  number: string;
  title: string;
}
export function ValueCard(props: Props) {
  const { number, title } = props;
  return (
    <div style={{ flexGrow: 1 }}>
      <h6 className='undp-typography'>{title}</h6>
      <h2 className='undp-typography bold'>{number}</h2>
    </div>
  );
}
