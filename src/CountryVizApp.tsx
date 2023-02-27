import { useEffect, useState } from 'react';
import { json } from 'd3-request';
import { CountryGroupDataType } from './Types';
import CountryViz from './CountryViz';

interface Props {
  country: string;
}

function CountryVizApp(props: Props) {
  const { country } = props;
  const [data, setData] = useState<CountryGroupDataType | undefined>(undefined);
  useEffect(() => {
    json(
      `https://raw.githubusercontent.com/UNDP-Data/Access-All-Data-Data-Repo/main/countryData/${country}.json`,
      (err: any, d: CountryGroupDataType) => {
        setData(d);
      },
    );
  }, []);
  return (
    <div
      className='undp-container padding-bottom-09 padding-top-09'
      style={{ backgroundColor: 'var(--gray-300)' }}
    >
      <div
        className='flex-div flex-wrap flex-hor-align-center gap-00'
        style={{ maxWidth: '1392px', margin: 'auto' }}
      >
        {data ? <CountryViz data={data} /> : null}
      </div>
    </div>
  );
}

export default CountryVizApp;
