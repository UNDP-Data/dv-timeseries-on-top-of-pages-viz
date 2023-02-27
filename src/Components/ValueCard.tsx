import styled from 'styled-components';

interface Props {
  number: string | number;
  title: string;
  year?: number;
}

const StatEl = styled.h3`
  width: 100%;
  font-size: 4.375rem !important;
  line-height: 0.75 !important;
  text-shadow: none !important;
  -webkit-text-stroke: 2px var(--black) !important;
  color: var(--gray-200) !important;
  letter-spacing: 0.05rem !important;
  margin-top: 0 !important;
  margin-bottom: 1rem !important;
  font-family: var(--fontFamilyHeadings) !important;
`;

const YearEl = styled.span`
  font-size: 1.5rem !important;
  line-height: 1.09 !important;
  text-shadow: none !important;
  -webkit-text-stroke: 0px var(--black) !important;
  color: var(--gray-500) !important;
  margin-top: 0 !important;
  margin-bottom: 1rem !important;
`;

export function ValueCard(props: Props) {
  const { number, title, year } = props;
  return (
    <div style={{ flexGrow: 1, display: 'flex' }}>
      <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
        <StatEl className='undp-typography bold margin-bottom-03'>
          {number}
          {year ? <YearEl> ({year})</YearEl> : null}
        </StatEl>
        <p className='undp-typography large-font margin-bottom-00'>{title}</p>
      </div>
    </div>
  );
}
