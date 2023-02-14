interface Props {
  number: string;
  title: string;
}
export function ValueCard(props: Props) {
  const { number, title } = props;
  return (
    <div
      className='padding-top-00 padding-bottom-07 padding-right-09 padding-left-09'
      style={{ flexGrow: 1 }}
    >
      <h3 className='undp-typography bold'>{number}</h3>
      <p className='undp-typography'>{title}</p>
    </div>
  );
}
